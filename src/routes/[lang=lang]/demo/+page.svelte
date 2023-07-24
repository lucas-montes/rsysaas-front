<script lang="ts">
	import bIcon from '$lib/images/b-icon.svg';
	import Alert from '$lib/components/Alert.svelte';
	import LL from '$i18n/i18n-svelte';
	import { NEW_USER_URL } from '$src/constants';

	let showAlert = false;
	let inputName = '';
	let inputEmail = '';
	let inputMessage = '';
	const onSubmit = async () => {
		try {
			const payload = new URLSearchParams();
			payload.append('email', inputEmail);
			payload.append('name', inputName);
			payload.append('message', inputMessage);
			const response = await fetch(NEW_USER_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: payload
			});

			if (response.ok) {
				showAlert = true;
				// Clear the form inputs after successful submission
				inputName = '';
				inputEmail = '';
				inputMessage = '';
			} else {
				// Handle the error scenario if needed
			}
		} catch (error) {
			// Handle the error scenario if needed
		}
	};
</script>

<svelte:head>
	<title>Demo</title>
	<meta name="description" content="Demo this app" />
</svelte:head>

<section class="mt-20">
	<Alert show={showAlert} />
	<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
		<h2
			class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
		>
			{$LL.contactTitle()}
		</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
			{$LL.contactContet()}
		</p>
		<form on:submit|preventDefault={onSubmit} class="space-y-8">
			<div>
				<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>{$LL.contactInputName()}</label
				>
				<input
					type="text"
					id="name"
					bind:value={inputName}
					class="
						shadow-sm border
						border-black text-black bg-white
						text-sm rounded-lg focus:ring-primary-500
						focus:border-primary-500 block w-full
						p-2.5 dark:bg-black dark:border-white
						dark:placeholder-gray-400 dark:text-white
						dark:focus:ring-primary-500
						dark:focus:border-primary-500
						dark:shadow-sm-light"
					required
				/>
			</div>
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Email</label
				>
				<input
					type="email"
					id="email"
					bind:value={inputEmail}
					class="
						shadow-sm border
						border-black text-black bg-white
						text-sm rounded-lg focus:ring-primary-500
						focus:border-primary-500 block w-full
						p-2.5 dark:bg-black dark:border-white
						dark:placeholder-gray-400 dark:text-white
						dark:focus:ring-primary-500
						dark:focus:border-primary-500
						dark:shadow-sm-light"
					required
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-black dark:text-white"
					>Message</label
				>
				<textarea
					id="message"
					rows="6"
					bind:value={inputMessage}
					class="
						block p-2.5 w-full text-sm
						text-black bg-white
						rounded-lg shadow-sm border
						border-black focus:ring-primary-500
						focus:border-primary-500 dark:bg-black
						dark:border-white dark:placeholder-white
						dark:text-white dark:focus:ring-primary-500
						dark:focus:border-primary-500"
					placeholder={$LL.contactFormMessagePlaceholder()}
				/>
			</div>
			<button
				type="submit"
				class="
					btn white-button
					py-3 px-5 text-sm font-medium text-center
				"
			>
				<img src={bIcon} class="h-5 mr-3" alt="Elerem" />
				{$LL.contactButton()}
			</button>
		</form>
	</div>
</section>
