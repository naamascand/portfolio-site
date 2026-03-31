<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<header>
	<div class="header-inner">
		<a href="/" class="name">Your Name</a>
		<nav>
			<a href="#projects">Projects</a>
			<a href="#about">About</a>
			<ThemeToggle />
		</nav>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		transition: var(--transition-color);
	}

	.header-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.name {
		font-weight: 600;
		font-size: 1rem;
		color: var(--color-text);
	}

	.name:hover {
		color: var(--color-text);
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	nav a {
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	nav a:hover {
		color: var(--color-text);
	}
</style>
