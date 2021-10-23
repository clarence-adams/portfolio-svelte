<script>
	export let title = 'title';
	export let link = '';
	export let github = '';
	export let screenshot = '';

	const clickHandler = () => {
		window.open(link, '_blank');
	};
</script>

<div class="tile" on:click={clickHandler}>
	<div class="header">
		<h3>{title}</h3>
		<a href={github} target="_blank" id="github-link"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg></a
		>
	</div>
	<div class="screenshot">
		<img src={screenshot} alt="screenshot" />
	</div>
</div>

<style>
	a {
		width: 24px;
		height: 24px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.tile {
		background-color: #444;
		border: solid black 4px;
		text-align: center;
		min-height: 300px;
	}

	.header {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 3rem;
		font-size: 1.5rem;
	}

	#github-link {
		box-sizing: content-box;
		position: absolute;
		right: 1rem;
		padding: 0.25rem;
		background-color: #333;
		border-radius: 100%;
	}

	.screenshot {
		height: 300px;
		background-color: #666;
		cursor: pointer;
	}
</style>
