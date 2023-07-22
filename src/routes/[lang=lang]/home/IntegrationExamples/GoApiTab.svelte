<div
	class="p-4 bg-grey-800 rounded-lg dark:bg-grey-800"
	role="tabpanel"
	aria-labelledby="services-tab"
>
	<pre>
		<code>
package main

import (
	"fmt"
	"net/http"
)

{@html `func main() {`}
	url := "https://elerem.com/api/v1/recommendations/"
	bearerToken := "your_token_here"

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Add("Authorization", "Bearer "+bearerToken)

	resp, _ := http.DefaultClient.Do(req)
	{@html `defer resp.Body.Close()}`}
		</code>
	</pre>
</div>

<style>
	pre {
		overflow-x: auto;
		word-wrap: break-word;
	}
</style>
