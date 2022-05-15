import type { ActionDefinition } from '@balena/jellyfish-worker';
import { actionSyncOAuthClient } from './action-sync-oauth-client';

export const actions: ActionDefinition[] = [actionSyncOAuthClient];
