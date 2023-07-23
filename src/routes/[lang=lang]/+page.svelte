<script>
	import Hero from './home/Hero.svelte';
	import FirstStep from './home/FirstStep.svelte';
	import SecondStep from './home/SecondStep.svelte';
	import ThirdStep from './home/ThirdStep.svelte';
	import UtilityStats from './home/UtilityStats.svelte';
	import LL from '$i18n/i18n-svelte';

	let title = Object.values($LL.heroTitle)
		.map((title) => title())
		.join(' ');
</script>

<svelte:head>
	<title>Elerem: {title}</title>
	<meta name="description" content={title} />
</svelte:head>

<Hero />
<FirstStep />
<UtilityStats />
<SecondStep />
<ThirdStep />
