<script>
	import wLogo from '$lib/images/w-svg-logo.svg';
	import { page } from '$app/stores';
	import LL from '$i18n/i18n-svelte';
	import Route from '$lib/components/Route.svelte';
</script>

<nav
	class="
	fixed w-full z-20 top-0 left-0
	border-b border-gray-200 dark:border-gray-600
	bg-opacity-50 backdrop-filter backdrop-blur"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<Route route="/" class="flex items-center">
			<img src={wLogo} class="h-8 mr-3" alt="Elerem" />
		</Route>

		<div class="flex md:order-2">
			<Route route={$LL.navbarButton.path()} class="btn white-button py-1 px-4">
				{$LL.navbarButton.title()}
			</Route>

			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="
				inline-flex items-center p-2 w-10
				h-10 justify-center text-sm text-gray-500
				rounded-lg md:hidden hover:bg-gray-100
				focus:outline-none focus:ring-2
				focus:ring-gray-200 dark:text-gray-400
				dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>
		<div
			class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
			id="navbar-sticky"
		>
			<ul
				class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0"
			>
				{#each Object.values($LL.navbarPaths) as navbarPath}
					<li>
						{#if navbarPath.path() === $page.url.pathname}
							<Route route={navbarPath.path()} class="active-button" aria-current="page"
								>{navbarPath.title()}</Route
							>
						{:else}
							<Route route={navbarPath.path()} class="not-active-button" aria-current={undefined}
								>{navbarPath.title()}</Route
							>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
