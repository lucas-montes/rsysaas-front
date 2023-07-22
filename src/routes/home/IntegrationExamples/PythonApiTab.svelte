<div
	class="p-4 bg-grey-800 rounded-lg dark:bg-grey-800"
	role="tabpanel"
	aria-labelledby="services-tab"
>
	<pre>
	<code>
	
import requests

url = "https://elerem.com/api/v1/recommendations/"
{@html `headers = {`}
	"Authorization": "Bearer your_token_here"
	{@html `}`}

response = requests.get(url, headers=headers)
	
	
	</code>
	</pre>
</div>

<style>
	pre {
		overflow-x: auto;
		word-wrap: break-word;
	}
</style>
