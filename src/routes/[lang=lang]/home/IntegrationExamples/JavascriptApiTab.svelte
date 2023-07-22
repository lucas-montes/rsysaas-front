<div
	class="p-4 bg-grey-800 rounded-lg dark:bg-grey-800"
	role="tabpanel"
	aria-labelledby="services-tab"
>
	<pre class="m-0 max-h-full overflow-auto">
	<code>
const https = require('https');
const url = 'https://elerem.com/api/v1/recommendations/';
const bearerToken = 'your_token_here';

{@html `
const options = {
	headers: {
		'Authorization': 'Bearer ' + bearerToken
	}
	};

	const axios = require('axios');
	axios.get(url, options)

	axios.get('https://jsonplaceholder.typicode.com/users')
	.then(res => {
		res.data
	.catch(err => {
		console.log('Error: ', err.message);
	});
`}
	</code>
	</pre>
</div>

<style>
	pre {
		overflow-x: auto;
		word-wrap: break-word;
	}
</style>
