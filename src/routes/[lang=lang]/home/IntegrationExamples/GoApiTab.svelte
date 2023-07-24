<script>
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import go from 'svelte-highlight/languages/go';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';
	import { API_URL } from '$src/constants';

	const code = `
package main

import (
	"fmt"
	"net/http"
)

func main() {
	url := "${API_URL}"
	bearerToken := "your_token_here"

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("Authorization", "Bearer "+bearerToken)

	resp, _ := http.DefaultClient.Do(req)
	defer resp.Body.Close()}
	`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight language={go} {code} let:highlighted>
	<LineNumbers {highlighted} hideBorder />
</Highlight>
