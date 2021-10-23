<script>
	let name = '';
	let email = '';
	let message = '';

	let messageStatus = 'notSent';

	const sendMessage = () => {};
</script>

<form>
	<h4>Contact</h4>
	<label for="name">Name</label>
	<input id="name" bind:value={name} />

	<label for="email">Email</label>
	<input id="email" bind:value={email} />

	<label for="message">Message</label>
	<textarea id="message" bind:value={message} />

	<button type="button" onclick={sendMessage}>Submit</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0 4rem 4rem 4rem;
		background-color: #333;
	}

	form > input,
	textarea {
		width: 100%;
	}

	h4 {
		align-self: center;
		margin: 2rem 0 2rem 0;
		font-size: 3rem;
		text-align: center;
	}

	input,
	textarea {
		background-color: rgba(255, 255, 255, 0.1);
		border: 2px #666 solid;
		border-radius: 0.5rem;
	}

	input {
		margin-bottom: 1rem;
	}

	button {
		box-sizing: content-box;
		align-self: center;
		padding: 0.75rem;
		margin-top: 2rem;
		background-color: #000;
		border-radius: 1rem;
		font-size: 1.125rem;
	}
</style>
