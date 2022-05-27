import type { PluginDefinition } from '@balena/jellyfish-worker';
import { actions } from './actions';
import { contracts } from './contracts';
import { integrations } from './integrations';
export { hydraAdmin } from './actions/action-sync-oauth-client';

// tslint:disable-next-line: no-var-requires
const { version } = require('../package.json');

/**
 * The Jellyfish OAuth plugin.
 */
export const oauthPlugin = (): PluginDefinition => {
	return {
		slug: 'plugin-oauth',
		name: 'OAuth Plugin',
		version,
		actions,
		contracts,
		integrationMap: integrations,
		requires: [
			{
				slug: 'plugin-default',
				version: '>=27.x',
			},
		],
	};
};
