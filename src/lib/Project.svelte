<script>
	export let title = 'title';
	export let link = '';
	export let github = '';
	export let screenshot = '';
	export let headerColor = '#fff';

	const mouseEnterHandler = (event) => {
		event.target.classList.add('orange');
	};

	const clickHandler = () => {
		window.open(link, '_blank');
	};
</script>

<div class="tile">
	<div class="header">
		<h3 style={`color: ${headerColor}`}>{title}</h3>
		<a href={github} target="_blank" id="github-link" on:mousehover:focus={mouseEnterHandler}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				class="bi bi-code-slash"
				viewBox="0 0 16 16"
			>
				<path
					d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
				/>
			</svg></a
		>
	</div>
	<div class="screenshot" on:click={clickHandler}>
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
		height: 4rem;
		background-color: #fff;
		font-size: 1.75rem;
		font-weight: 600;
	}

	#github-link {
		box-sizing: content-box;
		position: absolute;
		right: 1rem;
		padding: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
		background-color: #ccc;
		border-radius: 100%;
	}

	.screenshot {
		height: 300px;
		background-color: #666;
		cursor: pointer;
	}
</style>
