<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { setLocale, locale } from '$i18n/i18n-svelte';
	import type { Locales } from '$i18n/i18n-types';
	import { locales } from '$i18n/i18n-util';
	import { loadLocaleAsync } from '$i18n/i18n-util.async';
	import { replaceLocaleInUrl } from '../utils.js';

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return;

		// load new dictionary from server
		await loadLocaleAsync(newLocale);

		// select locale
		setLocale(newLocale);

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale));
		}

		// run the `load` function again
		invalidateAll();
	};

	// update `lang` attribute
	$: browser && document.querySelector('html')!.setAttribute('lang', $locale);

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false);

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales;
		switchLocale(lang, false);
		history.replaceState(
			{ ...history.state, locale: lang },
			'',
			replaceLocaleInUrl($page.url, lang)
		);
	}
	let menuOpen: boolean = true;
	const languages = { en: 'English', es: 'Español' };
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<button
	id="dropdownDefaultButton"
	on:click={() => (menuOpen = !menuOpen)}
	class="
		font-medium rounded-lg
		text-center
		inline-flex items-center"
	type="button"
	>Languages <svg
		class="w-2.5 h-2.5 ml-2.5"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 10 6"
	>
		<path
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="m1 1 4 4 4-4"
		/>
	</svg></button
>
<!-- Dropdown menu -->
<div
	id="dropdown"
	class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-black"
	class:hidden={menuOpen}
>
	<ul class="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
		{#each locales as l}
			<li>
				<a
					href={replaceLocaleInUrl($page.url, l)}
					on:click={() => (menuOpen = !menuOpen)}
					class="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
					>{languages[l]}</a
				>
			</li>
		{/each}
	</ul>
</div>
