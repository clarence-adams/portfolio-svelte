<script>
	let name = '';
	let email = '';
	let message = '';

	let disabled = false;

	let messageStatus = 'not sent';
	const sendMessage = async (event) => {
		event.preventDefault();

		if (name === '' || email === '' || message === '') {
			return (messageStatus = 'blank forms');
		}

		disabled = true;

		messageStatus = 'sending';

		const data = { name, email, message };
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		};

		fetch('/index.json', options)
			.then((res) => res.json())
			.then((res) => {
				res.message === 'success' ? (messageStatus = 'sent') : (messageStatus = 'error');
			})
			.catch((err) => (messageStatus = 'error'));
	};
</script>

<form>
	<h4>Contact</h4>

	<fieldset {disabled}>
		<label for="name">Name</label>
		<input id="name" bind:value={name} />

		<label for="email">Email</label>
		<input id="email" bind:value={email} />

		<label for="message">Message</label>
		<textarea id="message" bind:value={message} />
	</fieldset>

	{#if messageStatus === 'not sent'}
		<button type="button" {disabled} on:click={sendMessage}>Submit</button>
	{:else if messageStatus === 'sending'}
		<p class="form-alert">sending...</p>
	{:else if messageStatus === 'sent'}
		<p class="form-alert-success">Message Sent!</p>
	{:else if messageStatus === 'blank forms'}
		<button type="button" on:click={sendMessage}>Submit</button>
		<p class="form-alert-error">Please fill out all forms</p>
	{:else}
		<p class="form-alert-error">Error sending message, try again later</p>
	{/if}
</form>

<style>
	.form-alert,
	.form-alert-success,
	.form-alert-error {
		box-sizing: border-box;
		align-self: center;
		width: 100%;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;
		margin-bottom: 2rem;
		color: black;
		border-radius: 0.75rem;
		text-align: center;
		font-size: 1.125rem;
		font-weight: 600;
	}

	.form-alert {
		background-color: #b2e0ff;
		border: 4px #40b3ff solid;
	}

	.form-alert-success {
		background-color: #d2f3d6;
		border: 4px #90e39a solid;
	}

	.form-alert-error {
		background-color: #ffb199;
		border: 4px #ff3e00 solid;
	}

	form {
		display: flex;
		flex-direction: column;
		padding: 0 4rem 0 4rem;
		color: #fff;
		background-color: #676778;
		border-radius: 1rem;
	}

	fieldset {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 2rem;
	}

	label {
		font-size: 1.125rem;
		font-weight: 600;
	}

	fieldset > input,
	textarea {
		width: 100%;
	}

	h4 {
		align-self: center;
		margin: 2rem 0 2rem 0;
		font-size: 3rem;
		font-weight: 600;
		text-align: center;
	}

	input,
	textarea {
		padding: 0.25rem;
		color: #000;
		background-color: #fff;
		border: 2px #000 solid;
		border-radius: 0.5rem;
	}

	input {
		margin-bottom: 1rem;
	}

	textarea {
		min-height: 8rem;
	}

	button {
		box-sizing: content-box;
		align-self: center;
		padding: 0.5rem 0.75rem 0.5rem 0.75rem;
		margin-bottom: 2rem;
		background-color: #ff3e00;
		border-radius: 0.75rem;
		font-size: 1.125rem;
		font-weight: 600;
	}
</style>
