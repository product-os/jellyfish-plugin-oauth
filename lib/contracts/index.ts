import type { ContractDefinition } from '@balena/jellyfish-types/build/core';
import { oauthClient } from './oauth-client';
import { oauthProviderJellyfish } from './oauth-provider-jellyfish';
import { triggeredActionSyncOAuthClient } from './triggered-action-sync-oauth-client';

export const contracts: ContractDefinition[] = [
	oauthClient,
	oauthProviderJellyfish,
	triggeredActionSyncOAuthClient,
];
