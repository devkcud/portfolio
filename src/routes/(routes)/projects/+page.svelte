<script>
  import Project from '$lib/components/Project.svelte';

  const projects = [
    {
      name: 'portfolio',
      about: 'This site :)',
      langs: ['svelte', 'TypeScript', 'custom:UnoCSS', 'CSS3'],
      deploy: 'https://devkcud.vercel.app/'
    }
  ];
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<section class="flex gap-4 my-16">
  {#each projects as project}
    <Project {...project} />
  {/each}
</section>
