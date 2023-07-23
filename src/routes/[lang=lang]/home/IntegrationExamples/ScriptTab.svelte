<script>
	let example = `
<!-- Elerem Widget BEGIN -->
<div class="elerem-widget-container">
	<div class="elerem-widget-container__widget"></div>
	<script type="text/javascript" src="https://backend.elerem.com/assets/embed-widget.js" async>
		{
		"entity": "term",
		"numberRecommendations": 4,
		"userId": 1,
		"prodId": 5,
		"publicKey": "public_invfin_api_key",
		"isFor": "product"
		}
	<script>
</div>
<!-- Elerem Widget END -->
	`;
</script>

<div
	class="p-4 bg-bg-grey-800 rounded-lg dark:bg-grey-800"
	role="tabpanel"
	aria-labelledby="services-tab"
>
	<pre>
	<code>
{example}
	</code>
	</pre>
</div>

<style>
	pre {
		overflow-x: auto;
		word-wrap: break-word;
	}
</style>
