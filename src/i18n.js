// src/i18n.js
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const INIT_OPTIONS = {
	fallbackLocale: 'en',
	initialLocale: null,
	loadingDelay: 200,
	formats: {},
	warnOnMissingMessages: true,
};

register('en', () => import('./i18n_en.json'));
register('fr', () => import('./i18n_fr.json'));

export function startClient() {
	init({
		...INIT_OPTIONS,
		initialLocale: getLocaleFromNavigator(),
	});
};

export function i18nMiddleware() {
	init(INIT_OPTIONS);
};
