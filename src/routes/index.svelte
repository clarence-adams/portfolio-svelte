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
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		class="about-icon blue"
		viewBox="0 0 16 16"
	>
		<path
			d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
		/>
	</svg>
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
		#contact {
			padding: 4rem 3% 4rem 3% !important;
		}
	}

	.orange {
		color: #ff3e00;
	}

	.blue {
		color: #40b3ff;
	}

	.grey {
		color: #676778;
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
		background-color: #676778;
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
