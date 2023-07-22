<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	export let route: string;
</script>

<a href={`/${$locale}${route}`} hreflang={$locale} {...$$restProps}>
	<slot />
</a>
