<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Link from '$lib/components/Link.svelte';
  import Purple from '$lib/components/Purple.svelte';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="flex flex-col gap-4 animate-fade-in">
  <h1 class="fw-400 text-5xl">Hey, I'm <Link href="https://github.com/devkcud">André</Link>!</h1>

  <i>aka <Purple>devkcud</Purple> and <Purple>Pato</Purple>.</i>

  <div class="flex justify-between mt-6">
    <Button nobg href="/about">About me</Button>
    <Button nobg href="/projects">Projects</Button>
    <Button nobg href="/tech">Technologies</Button>
  </div>

  <p class="border-t-1 border-t-solid border-white pt-2 px-4 op-30">
    Fullstack/Game Developer from São Paulo, Brazil
  </p>
</section>
