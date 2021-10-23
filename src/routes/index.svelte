<script>
	import Project from '$lib/Project.svelte';
	import Contact from '$lib/Contact.svelte';

	const projects = [
		{
			title: 'Stox',
			link: 'https://zen-sammet-07e1df.netlify.app/',
			github: 'https://github.com/clarence-adams/stox',
			screenshot: '/stox.png'
		},
		{
			title: 'Slone HVAC',
			link: 'https://sloneheatingandair.com/',
			github: 'https://github.com/clarence-adams/slone-heating-and-air',
			screenshot: '/slone.png'
		},
		{
			title: 'Calculator',
			link: 'https://flamboyant-kalam-8ca516.netlify.app/',
			github: 'https://github.com/clarence-adams/fcc-calculator',
			screenshot: '/calculator.png'
		}
	];
</script>

<svelte:head>
	<title>Clarence's Portfolio</title>
	<meta name="description" content="Clarence Adams is a fullstack web developer." />
</svelte:head>

<!-- About -->

<section id="about">
	<img id="profile" src="/profile.jpg" alt="Clarence" />
	<h1>Hi, I'm Clarence</h1>
	<p>A fullstack web developer</p>
</section>

<!-- Projects -->

<section id="projects">
	{#each projects as project}
		<Project
			title={project.title}
			link={project.link}
			github={project.github}
			screenshot={project.screenshot}
		/>
	{/each}
</section>

<!-- Contact -->

<section id="contact">
	<Contact />
</section>

<style>
	@media screen and (max-width: 900px) {
		#projects {
			min-height: var(--mobile-screen-height) !important;
			scroll-margin-top: 3rem !important;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
		}
	}

	#about {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		min-height: calc(100vh - 4rem);
		text-align: center;
		color: #fff;
		background-color: #222;
	}

	#profile {
		width: 25%;
		border-radius: 100%;
		box-shadow: 2px 2px 2px 2px black inset;
	}

	#projects {
		min-height: calc(100vh - 4rem);
		display: grid;
		gap: 32px;
		grid-template-columns: repeat(3, 1fr);
		background-color: #444;
		min-height: var(--screen-height);
		scroll-margin-top: 4rem;
		padding: 25px;
	}

	#contact {
		background-color: #222;
		padding: 8rem 24rem 8rem 24rem;
	}

	section {
		scroll-margin-top: 4rem;
		color: #fff;
	}

	h1 {
		font-weight: bold;
		font-size: 4rem;
	}

	p {
		font-size: 1.5rem;
	}
</style>
