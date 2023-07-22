<script lang="ts">
	import { onMount } from 'svelte';
	import LL from '$i18n/i18n-svelte'

	onMount(async () => {
		// Inside the onMount lifecycle function, import the 'globe.gl' package
		const ModuleGlobe = await import('globe.gl');
		displayGlobe(ModuleGlobe.default);
	});

	function displayGlobe(Globe: any) {
		if (typeof window !== 'undefined') {
			const N = 20;
			const arcsData = [...Array(N).keys()].map(() => ({
				startLat: (Math.random() - 0.5) * 180,
				startLng: (Math.random() - 0.5) * 360,
				endLat: (Math.random() - 0.5) * 180,
				endLng: (Math.random() - 0.5) * 360,
				color: [
					['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
					['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
				]
			}));

			Globe()
				.backgroundImageUrl(null)
				.width(500)
				.height(600)
				.globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
				.arcsData(arcsData)
				.arcColor('color')
				.arcDashLength(() => Math.random())
				.arcDashGap(() => Math.random())
				.arcDashAnimateTime(() => Math.random() * 5000 + 500)(document.getElementById('globeViz'))
				.backgroundColor('rgba(0, 0, 0, 0)')
				.controls({ enabled: false, autoRotate: true })
				.update();
		} else {
			setTimeout(displayGlobe, 100);
		}
	}
</script>

<section class="my-20">
	<div
		class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
	>
		<div id="globeViz" class="globe-container" />
		<div class="mt-4 md:mt-0">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				{$LL.section3Title()}
			</h2>
			<p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
				{$LL.section3Content()}
			</p>
			<!-- <a href="#" class="white-button py-3 px-5">
				{$_("section1Button")}
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</a> -->
		</div>
	</div>
</section>

<style>
	.globe-container {
		height: 600px;
		width: 500px;
		position: relative;
		/* border: 1px solid #ccc;
		border-radius: 8px; */
		overflow: hidden;
	}
</style>
