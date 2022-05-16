# Jellyfish OAuth Plugin

Provides OAuth related contracts and Jellyfish auth integration.

# Usage

Below is an example how to use this library:

```typescript
import { defaultPlugin } from '@balena/jellyfish-plugin-default';
import { oauthPlugin } from '@balena/jellyfish-plugin-oauth';
import { PluginManager } from '@balena/jellyfish-worker';

// Load contracts from this plugin
const pluginManager = new PluginManager([
	defaultPlugin(),
	oauthPlugin(),
]);
const contracts = pluginManager.getCards();
console.dir(contracts);
```

# Documentation

[![Publish Documentation](https://github.com/product-os/jellyfish-plugin-oauth/actions/workflows/publish-docs.yml/badge.svg)](https://github.com/product-os/jellyfish-plugin-oauth/actions/workflows/publish-docs.yml)

Visit the website for complete documentation: https://product-os.github.io/jellyfish-plugin-oauth

# Testing

Unit tests can be easily run with the command `npm test`.
