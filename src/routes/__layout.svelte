<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<header>
	<Nav
		color={'#fff'}
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
	@import '../styles/globals.css';
	header {
		position: fixed;
		width: 100%;
		height: 4rem;
		background-color: #333;
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
		height: 4rem;
		font-size: 1.25rem;
		background-color: #333;
		color: white;
	}
</style>
