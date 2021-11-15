<script>
	export let title = 'title';
	export let link = '';
	export let github = '';
	export let screenshot = '';
	export let headerColor = '#fff';
</script>

<div class="tile">
	<div class="header">
		<h2 style={`color: ${headerColor}`}>{title}</h2>
		<a href={github} target="_blank" rel="noreferrer" class="github-link">
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>
			</svg>
		</a>
	</div>
	<div class="screenshot">
		<a href={link} target="_blank" rel="noreferr">
			<img src={screenshot} alt={`Screenshot of ${title} website.`} /></a
		>
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
		height: 4rem;
		background-color: #fff;
		font-size: 1.75rem;
		font-weight: 600;
	}

	.github-link {
		box-sizing: content-box;
		position: absolute;
		right: 1rem;
		padding: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
		background-color: #ccc;
		border-radius: 100%;
	}

	.github-link:hover {
		background-color: var(--blue);
	}

	.screenshot {
		height: 300px;
		background-color: #666;
		cursor: pointer;
	}
</style>
