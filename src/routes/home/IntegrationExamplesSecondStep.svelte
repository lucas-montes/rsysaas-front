<script>
	/**
	 * @type Array<{ value: number; label: string; component: any }>
	 */
	export let items = [];
	let activeTabValue = 1;

	const handleClick = (/** @type {number} */ tabValue) => () => (activeTabValue = tabValue);

	let selected =
		'text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500';
	let notSelected =
		'hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300';
</script>

<div class="w-full bg-white border border-black rounded-lg shadow dark:bg-black dark:border-white">
	<ul
		class="flex flex-wrap text-sm font-medium text-center text-black border-b border-black rounded-t-lg bg-white dark:border-white dark:text-white dark:bg-black"
		id="defaultTab"
		role="tablist"
	>
		{#each items as item}
			<li class="mr-2">
				{#if activeTabValue === item.value}
					<button
						on:click={handleClick(item.value)}
						id="{item.label}-tab"
						type="button"
						role="tab"
						aria-controls={item.label}
						aria-selected="true"
						class="inline-block p-4 {selected}">{item.label}</button
					>
				{:else if activeTabValue === item.value && item.value === 1}
					<button
						on:click={handleClick(item.value)}
						id="{item.label}-tab"
						type="button"
						role="tab"
						aria-controls={item.label}
						aria-selected="true"
						class="inline-block p-4 rounded-tl-lg {selected}">{item.label}</button
					>
				{:else if item.value === 1}
					<button
						on:click={handleClick(item.value)}
						id="{item.label}-tab"
						type="button"
						role="tab"
						aria-controls={item.label}
						aria-selected="true"
						class="inline-block p-4 rounded-tl-lg {notSelected}">{item.label}</button
					>
				{:else}
					<button
						on:click={handleClick(item.value)}
						id="{item.label}-tab"
						type="button"
						role="tab"
						aria-controls={item.label}
						aria-selected="false"
						class="inline-block p-4 {notSelected}">{item.label}</button
					>
				{/if}
			</li>
		{/each}
	</ul>
	{#each items as item}
		<div id="defaultTabContent">
			{#if activeTabValue == item.value}
				<div
					class="bg-white rounded-lg dark:bg-gray-800"
					id="tab-{item.value}"
					role="tabpanel"
					aria-labelledby="{item.value}-tab"
				>
					<svelte:component this={item.component} />
				</div>
			{/if}
		</div>
	{/each}
</div>

<!-- class="inline-block rounded-tl-lg p-4 ">About</button>
class="inline-block p-4 ">Services</button>
class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Facts</button> -->
