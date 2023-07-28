<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import vbscriptHtml from 'svelte-highlight/languages/vbscript-html';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { ASSETS_URL } from '$src/constants';

	const code = `
<!-- Elerem Widget BEGIN -->
<div class="elerem-widget-container">
	<div class="elerem-widget-container__widget"></div>
	<script type="text/javascript" src="${ASSETS_URL}" async>
		{
		"entity": "book",
		"numberRecommendations": 5,
		"userId": 1,
		"prodId": 2,
		"publicKey": "public_api_key",
		"target": "product"
		}
	<script>
</div>
<!-- Elerem Widget END -->
	`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight language={vbscriptHtml} {code} let:highlighted>
	<LineNumbers {highlighted} hideBorder />
</Highlight>
