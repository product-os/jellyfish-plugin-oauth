import type { TriggeredActionContractDefinition } from '@balena/jellyfish-worker';

export const triggeredActionSyncOAuthClient: TriggeredActionContractDefinition =
	{
		slug: 'triggered-action-sync-oauth-client',
		type: 'triggered-action@1.0.0',
		name: 'Triggered action for oauth client sync',
		markers: [],
		data: {
			schedule: 'sync',
			filter: {
				type: 'object',
				required: ['type'],
				properties: {
					type: {
						const: 'oauth-client@1.0.0',
					},
				},
			},
			action: 'action-sync-oauth-client@1.0.0',
			target: {
				$eval: 'source.id',
			},
			arguments: {},
		},
	};
