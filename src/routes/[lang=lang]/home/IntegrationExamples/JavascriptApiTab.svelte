<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { API_URL } from '$src/constants';

	const code = `
const https = require('https');
const url = '${API_URL}';
const bearerToken = 'your_token_here';
const axios = require('axios');
const options = {
headers: {
'Authorization': 'Bearer ' + bearerToken
},
params: {
    entity: "book",
    target: "product",
    userId: 1,
    prodId: 1,
    numberRecommendations: 5,
  }
};


axios.get(url, options)

	`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight language={typescript} {code} let:highlighted>
	<LineNumbers {highlighted} hideBorder />
</Highlight>
