import type { IntegrationDefinition, Map } from '@balena/jellyfish-worker';
import { jellyfishIntegrationDefinition } from './jellyfish';

export const integrations: Map<IntegrationDefinition> = {
	jellyfish: jellyfishIntegrationDefinition,
};
