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

response = requests.get(url, headers=headers)
	`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight language={python} {code} let:highlighted>
	<LineNumbers {highlighted} hideBorder />
</Highlight>
