<script>
	import Education from '$lib/components/Education.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Knowledge from '$lib/components/Knowledge.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<Header />

<Education />

<Knowledge />

<Projects />

<Footer />

<style>
	@font-face {
		src: url('/fonts/Montserrat-Regular.ttf');
		font-family: Montserrat;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background-color: #232526; 
		color: var(--secondary-color);
		-webkit-font-smoothing: antialiased;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem 0rem;
		transition: background-color 0.3s
	}

	:global(body, input, button) {
		font-size: 14px;
		font-family: Montserrat;
	}

	:global(button) {
		cursor: pointer;
	}

	:global(:root) {
		--primary-color: #f1f900;
		--secondary-color: #ffffff;
		--tertiary-color: #9f9f9f;
		--bg-color: #1c1c1f;
	}
</style>
