<script lang="ts">
	import { page } from '$app/stores'
	import { setLocale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'

	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles/style.css';

	export let data: LayoutData
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale)
</script>

<Navbar />

<main class="overflow-scroll container mx-auto">
	<slot />
</main>

<Footer />
<svelte:head>
	<title>{$page.data.title || 'typesafe-i18n'}</title>
</svelte:head>
