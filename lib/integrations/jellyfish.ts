import type {
	Integration,
	IntegrationDefinition,
} from '@balena/jellyfish-worker';
import _ from 'lodash';
import { hydraAdmin } from '../actions/action-sync-oauth-client';

const SLUG = 'jellyfish';

export class JellyfishIntegration implements Integration {
	public slug = SLUG;
	public context: any;

	constructor(options: any) {
		this.context = options.context;
	}

	public async destroy() {
		return;
	}

	public async translate(): Promise<any> {
		return [];
	}

	public async mirror(): Promise<any> {
		return [];
	}
}

export const jellyfishIntegrationDefinition: IntegrationDefinition = {
	slug: SLUG,
	initialize: async (options): Promise<JellyfishIntegration> =>
		new JellyfishIntegration(options),
	isEventValid: () => true,
	whoami: async (syncActionContext, credentials) => {
		const token = await hydraAdmin.introspectOAuth2Token(
			credentials.access_token,
		);
		return syncActionContext.getElementBySlug(`${token.data.sub}@1.0.0`, true);
	},
	match: (_syncContext, externalUser) => {
		return externalUser;
	},
};
