<svelte:head>
	<title>Clarence's Portfolio</title>
	<meta name="description" content="Clarence Adams is a fullstack web developer." />
</svelte:head>

<section id="about">
	<img id="profile" src="/profile.jpg" alt="Clarence" />
	<h1>Hi, I'm Clarence</h1>
	<p>A fullstack web developer</p>
</section>

<style>
	#about {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		min-height: calc(100vh - 4rem);
		text-align: center;
		color: #fff;
		background-color: #353535;
	}

	#profile {
		width: 25%;
		border-radius: 100%;
		box-shadow: 2px 2px 2px 2px black inset;
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
