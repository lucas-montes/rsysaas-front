<script lang="ts">
	import { tick, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import bIcon from '$lib/images/b-icon.svg';
	import LL from '$i18n/i18n-svelte';
	import Route from '$lib/components/Route.svelte';

	const currentIndex = writable(0);
	const gradients = [
		'from-purple-600 to-blue-500',
		'from-pink-600 to-purple-500',
		'from-yellow-400 to-red-500'
	];
	const button_color = [
		'group-hover:from-purple-600 group-hover:to-blue-500 shadow-blue-600 focus:ring-blue-600',
		'group-hover:from-pink-600 group-hover:to-purple-500 shadow-purple-600 focus:ring-purple-600',
		'group-hover:from-yellow-400 group-hover:to-red-500 shadow-yellow-600 focus:ring-yellow-600'
	];

	async function updateIndex() {
		currentIndex.update((n) => (n + 1) % 3);
		await tick(); // Wait for the next rendering cycle
	}

	updateIndex(); // Call it initially

	const interval = setInterval(updateIndex, 3000);

	// Clean up the interval when the component is destroyed
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<section class="mt-40">
	<div class="text-center">
		<h1
			class="text-8xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-8xl dark:text-white"
		>
			{#each Object.values($LL.heroTitle) as title, i}
				{#if i === $currentIndex}
					<span class="inline-block">
						<span
							class="
							inline-block
							bg-clip-text text-transparent
							bg-gradient-to-br {gradients[i]}"
						>
							{title()}
						</span>
					</span>
				{:else}
					<span class="inline-block">{title()}</span>
				{/if}
				&nbsp;
			{/each}
		</h1>
		<p
			class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
		>
			{$LL.heroSubtitle()}
		</p>
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
			<Route route="/demo" class="btn white-button py-3 px-5"
				><img src={bIcon} class="h-5 mr-3" alt="Elerem" />
				{$LL.heroFirstButton()}
			</Route>
			<Route
				route="/demo"
				class="btn
			relative inline-flex items-center
			justify-center p-0.5 mb-2 mr-2
			overflow-hidden text-sm font-medium
			text-gray-900 rounded-lg group bg-gradient-to-br
			hover:text-white dark:text-white
			focus:ring-4 focus:outline-none shadow-3xl
			{gradients[$currentIndex]} {button_color[$currentIndex]}
			"
			>
				<span
					class="
				relative px-5
				py-3.5 transition-all
				ease-in duration-75
				dark:bg-black bg-white
				rounded-md
				group-hover:bg-opacity-0"
				>
					{$LL.heroSecondButton()}
				</span>
			</Route>
		</div>
	</div>
</section>
