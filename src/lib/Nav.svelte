<script>
	export let color = '#000';
	export let accentColor = '#fff';
	export let navButtons = [{ href: '#about', innerHtml: 'About' }];
</script>

<nav style={`color: ${color};`}>
	<ul>
		{#each navButtons as navButton}
			<li><a href={navButton.href}>{navButton.innerHtml}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	ul {
		display: flex;
		height: 100%;
		font-size: 1.5rem;
	}

	li {
		height: 100%;
	}

	a {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 0px 1.5rem 0px 1.5rem;
	}

	a:hover {
		padding-top: 4px;
		border-bottom: 4px #fff solid;
	}
</style>
