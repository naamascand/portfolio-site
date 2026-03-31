<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<section class="hero">
	<h1>Naama Scandarion</h1>
	<p>
		Software engineer based in Boca Raton, FL. Currently at <a href="https://www.outboundiq.com/" target="_blank" rel="noopener noreferrer">OutboundIQ</a>, building data pipelines
		and dashboard analytics. Pursuing an MS in Computer Science at <a href="https://omscs.gatech.edu/" target="_blank" rel="noopener noreferrer">Georgia Tech</a>, specializing in
		Machine Learning.
	</p>
</section>

<section id="projects">
	<h2>Projects</h2>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</section>

<section id="experience">
	<h2>Experience</h2>
	<div class="experience-item">
		<div class="experience-header">
			<h3><a href="https://www.outboundiq.com/" target="_blank" rel="noopener noreferrer">OutboundIQ</a></h3>
			<span class="date">Sep 2024 — Present</span>
		</div>
		<p class="role">Software Engineer</p>
		<p>
			Building CSV upload and processing pipelines using SST, SQS, and AWS Lambda.
			Designing server-side API routes powering dashboard analytics including campaign
			breakdowns, agent performance metrics, and disposition statistics.
		</p>
	</div>
	<div class="experience-item">
		<div class="experience-header">
			<h3><a href="https://www.totalwine.com/" target="_blank" rel="noopener noreferrer">Total Wine & More</a></h3>
			<span class="date">May 2024 — Aug 2024</span>
		</div>
		<p class="role">Software Engineer Intern</p>
		<p>
			Led a database migration from in-memory storage to CockroachDB. Developed a RESTful
			API using .NET and built a micro frontend with React and TypeScript to enhance
			internal business tooling.
		</p>
	</div>
</section>

<style>
	section {
		margin-bottom: var(--spacing-section);
	}

	.hero {
		padding: 3rem 0 2rem;
	}

	.hero h1 {
		font-weight: 400;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.hero p {
		font-size: 1.1rem;
		line-height: 1.7;
		max-width: 540px;
	}

	.experience-item {
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.experience-item:last-child {
		border-bottom: none;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.experience-header h3 {
		font-size: 1.05rem;
		font-weight: 600;
	}

	.experience-header h3 a {
		color: var(--color-text);
	}

	.experience-header h3 a:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.date {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	.role {
		font-size: 0.875rem;
		color: var(--color-text-muted);
		margin-bottom: 0.5rem;
	}

	.experience-item > p:last-child {
		font-size: 0.925rem;
		line-height: 1.6;
	}
</style>
