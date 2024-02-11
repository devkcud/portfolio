<script lang="ts">
  import Project from '$lib/components/Project.svelte';
  import projects from '$lib/data/projects.json';
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<section class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-16 my-16">
  {#each projects as project}
    <Project {...project} />
  {/each}
</section>
