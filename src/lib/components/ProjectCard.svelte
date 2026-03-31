<script lang="ts">
	import type { Project } from '$lib/types';

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	<h3>
		{#if project.url}
			<a href={project.url} target="_blank" rel="noopener noreferrer">
				{project.title}
				<span class="arrow">&nearr;</span>
			</a>
		{:else}
			{project.title}
		{/if}
	</h3>
	<p>{project.description}</p>
	<div class="tags">
		{#each project.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
		{#if project.repo}
			<a href={project.repo} target="_blank" rel="noopener noreferrer" class="repo-link">Source</a>
		{/if}
	</div>
</article>

<style>
	.card {
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--color-border);
		transition: var(--transition-color);
	}

	.card:last-child {
		border-bottom: none;
	}

	h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	h3 a {
		color: var(--color-text);
		text-decoration: none;
	}

	h3 a:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.arrow {
		font-size: 0.85rem;
		opacity: 0.5;
	}

	p {
		font-size: 0.925rem;
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
	}

	.tag {
		font-size: 0.75rem;
		padding: 0.2rem 0.6rem;
		border-radius: 9999px;
		background: var(--color-bg-subtle);
		color: var(--color-text-muted);
		transition: var(--transition-color);
	}

	.repo-link {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		text-decoration: underline;
		text-underline-offset: 2px;
	}
</style>
