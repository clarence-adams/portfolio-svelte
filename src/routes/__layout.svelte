<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<header>
	<Nav
		accentColor={'#ff3e00'}
		navButtons={[
			{ href: '#about', innerHtml: 'About' },
			{ href: '#projects', innerHtml: 'Projects' },
			{ href: '#contact', innerHtml: 'Contact' }
		]}
	/>
</header>

<main><slot /></main>

<footer>
	<Footer />
</footer>

<style>
	/* Preflight */

	@import '../styles/preflight.css';

	/* Global Variables */

	:global(body) {
		--grey: #676778;
		--orange: #ff3e00;
		--green: #90e39a;
		--blue: #40b3ff;
	}

	/* Global Classes */

	:global(.grey) {
		color: var(--grey);
	}
	:global(.orange) {
		color: var(--orange);
	}
	:global(.green) {
		color: var(--green);
	}
	:global(.blue) {
		color: var(--blue);
	}

	header {
		position: fixed;
		width: 100%;
		height: 4rem;
		background-color: #fff;
		z-index: 1;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
	}

	main {
		width: 100%;
		padding-top: 4rem;
		z-index: 0;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.25rem;
		background-color: #fff;
		border-top: 1px solid #ccc;
	}
</style>
