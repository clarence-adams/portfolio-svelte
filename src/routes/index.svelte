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
	<h1>Hi, I'm <span class="orange">Clarence</span></h1>
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
			headerColor={'#ff3e00'}
		/>
	{/each}
</section>

<!-- Contact -->

<section id="contact">
	<Contact />
</section>

<style>
	@media screen and (max-width: 1100px) {
		#projects {
			min-height: var(--mobile-screen-height) !important;
			scroll-margin-top: 3rem !important;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
		}
	}

	@media screen and (min-width: 1000px) {
		#contact {
			padding: 4rem 33% 4rem 33% !important;
		}
	}

	@media screen and (max-width: 800px) {
		#profile {
			width: 50% !important;
		}
	}

	@media screen and (max-width: 650px) {
		#contact {
			padding: 4rem 10% 4rem 10% !important;
		}
	}

	@media screen and (max-width: 500px) {
		#profile {
			width: 50% !important;
		}
	}

	@media screen and (max-width: 400px) {
		#about {
			background-image: url('/about-background-mobile.svg') !important;
		}
		#contact {
			padding: 4rem 3% 4rem 3% !important;
		}
	}

	.about-icon {
		width: 2.5rem;
		height: 2.5rem;
		margin-top: 1.25rem;
	}

	#about {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 2rem 0 2rem;
		min-height: calc(100vh - 4rem);
		text-align: center;
		background-image: url('/about-background.svg');
		background-size: cover;
		background-position: center;
	}

	#about > p {
		font-size: 1.75rem;
	}

	#profile {
		width: 25%;
		border-radius: 100%;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
	}

	#projects {
		min-height: calc(100vh - 4rem);
		display: grid;
		gap: 3rem;
		grid-template-columns: repeat(3, 1fr);
		background-color: var(--grey);
		min-height: var(--screen-height);
		scroll-margin-top: 4rem;
		padding: 3rem;
	}

	#contact {
		background-color: #fff;
		padding: 4rem 25% 4rem 25%;
	}

	section {
		scroll-margin-top: 4rem;
	}

	h1 {
		font-weight: bold;
		font-size: 4rem;
	}

	p {
		font-size: 1.5rem;
	}
</style>
