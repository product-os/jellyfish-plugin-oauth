import { defaultEnvironment as environment } from '@balena/jellyfish-environment';
import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import qs from 'qs';

export const oauthProviderJellyfish: ContractDefinition = {
	type: 'oauth-provider@1.0.0',
	name: 'Jellyfish oauth provider',
	slug: 'oauth-provider-jellyfish',
	data: {
		authorizeUrl: `${environment.hydra.publicHost}/oauth2/auth?${qs.stringify({
			client_id: environment.integration.jellyfish.appId,
			response_type: 'code',
		})}`,
		tokenUrl: `https://hydra.${process.env.DNS_TLD}/oauth2/token`,
		clientId: environment.integration.jellyfish.appId,
		clientSecret: environment.integration.jellyfish.appSecret,
		integration: 'jellyfish',
	},
};
