<script>
	export let height = '4rem';
	export let color = '#000';
	export let backgroundColor = '#fff';
</script>

<nav style={`height: ${height}; color: ${color}; background-color: ${backgroundColor}`}>
	<ul>
		<li><a href="#about">About</a></li>
	</ul>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
	}
</style>
