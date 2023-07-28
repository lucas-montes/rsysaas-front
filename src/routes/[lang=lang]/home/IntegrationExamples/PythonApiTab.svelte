<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import python from 'svelte-highlight/languages/python';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { API_URL } from '$src/constants';

	const code = `
import requests


url = "${API_URL}"
token = "your_token_here"
headers = {
	"Authorization": f"Bearer {token}"
}

params = {
    "entity": "book",
    "target": "product",
    "userId": 1,
    "prodId": 1,
    "numberRecommendations": 5,
}

response = requests.get(url, params=params, headers=headers)
	`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight language={python} {code} let:highlighted>
	<LineNumbers {highlighted} hideBorder />
</Highlight>
