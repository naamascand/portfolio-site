<script lang="ts">
	import { socialLinks } from '$lib/data/social';
</script>

<footer>
	<div class="footer-inner">
		<div class="links">
			{#each socialLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
			{/each}
		</div>
		<p class="copyright">&copy; {new Date().getFullYear()} Naama Scandarion</p>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--color-border);
		margin-top: var(--spacing-section);
		transition: var(--transition-color);
	}

	.footer-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 2rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.links {
		display: flex;
		gap: 1.5rem;
	}

	.links a {
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.links a:hover {
		color: var(--color-text);
	}

	.copyright {
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}

	@media (max-width: 600px) {
		.footer-inner {
			flex-direction: column;
			gap: 1rem;
		}

		.links {
			flex-wrap: wrap;
			justify-content: center;
		}

		.copyright {
			text-align: center;
		}
	}
</style>
