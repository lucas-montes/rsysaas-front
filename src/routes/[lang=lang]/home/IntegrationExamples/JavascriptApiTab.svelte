<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { API_URL } from '$src/constants';

	const code = `
const https = require('https');
const url = '${API_URL}';
const bearerToken = 'your_token_here';


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
	`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight language={typescript} {code} let:highlighted>
	<LineNumbers {highlighted} hideBorder />
</Highlight>
