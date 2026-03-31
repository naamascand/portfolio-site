<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Naama Scandarion</title>
	<meta name="description" content="Developer portfolio" />
</svelte:head>

<div class="theme-toggle-float">
	<ThemeToggle />
</div>

<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.theme-toggle-float {
		position: fixed;
		top: 1.25rem;
		right: 1.25rem;
		z-index: 10;
	}
</style>
