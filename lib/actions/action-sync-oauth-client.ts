import { AdminApi, Configuration, OAuth2Client } from '@ory/hydra-client';
import { defaultEnvironment as environment } from '@balena/jellyfish-environment';
import type { ActionDefinition } from '@balena/jellyfish-worker';

const baseOptions: any = {};
// TODO: Read this from jellyfish-environment
if (process.env.MOCK_TLS_TERMINATION) {
	baseOptions.headers = { 'X-Forwarded-Proto': 'https' };
}

export const hydraAdmin = new AdminApi(
	new Configuration({
		basePath: environment.hydra.adminBaseUrl,
		baseOptions,
	}),
);

const handler: ActionDefinition['handler'] = async (
	_session,
	_context,
	contract,
	_request,
) => {
	const oauthClientData: OAuth2Client = {
		client_id: contract.data.clientId as string,
		client_secret: contract.data.clientSecret as string,
		grant_types: ['authorization_code', 'refresh_token'],
		response_types: ['code', 'id_token'],
		scope: 'openid,offline',
		token_endpoint_auth_method: 'client_secret_post',
		redirect_uris: [contract.data.redirectUrl as string],
	};

	try {
		await hydraAdmin.createOAuth2Client(oauthClientData);
	} catch (err: any) {
		if (
			err?.response?.data?.error ===
			'Unable to insert or update resource because a resource with that value exists already'
		) {
			console.log('Jellyfish oauth client already exists, updating...');
			await hydraAdmin.updateOAuth2Client(
				oauthClientData.client_id!,
				oauthClientData,
			);
		} else {
			throw err;
		}
	}

	return {
		id: contract.id,
		type: contract.type,
		slug: contract.slug,
		version: contract.version,
	};
};

export const actionSyncOAuthClient: ActionDefinition = {
	handler,
	contract: {
		slug: 'action-sync-oauth-client',
		version: '1.0.0',
		type: 'action@1.0.0',
		data: {
			filter: {
				type: 'object',
				required: ['type'],
				properties: {
					type: {
						const: 'oauth-client@1.0.0',
					},
				},
			},
			arguments: {},
		},
	},
};
