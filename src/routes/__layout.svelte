<script>
	import Nav from '$lib/Nav.svelte';
</script>

<header>
	<Nav color={'#fff'} backgroundColor={'#222'} />
</header>

<main><slot /></main>

<footer>
	<p>Coded by Clarence using Svelte</p>
</footer>

<style>
	@import '../styles/globals.css';
	header {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
	}

	main {
		width: 100%;
		margin-top: 4rem;
	}

	footer {
		height: 4rem;
		background-color: black;
		color: white;
	}
</style>
