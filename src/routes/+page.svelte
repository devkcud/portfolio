<script lang="ts">
  import { GithubSolid, PhoneSolid } from 'flowbite-svelte-icons';
  import Button from '$lib/components/Button.svelte';
  import Purple from '$lib/components/Purple.svelte';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="flex flex-col gap-4">
  <h1 class="fw-400 text-5xl">Hey, I'm <Purple>André</Purple>!</h1>

  <i>aka <Purple>devkcud</Purple> and <Purple>Pato</Purple>.</i>

  <div class="flex justify-between mt-6">
    <Button href="/about">About</Button>
    <Button href="/projects">Projects</Button>
    <Button href="/skills">Skills</Button>
  </div>

  <p class="border-t-1 border-t-solid border-white pt-2 px-4 op-30">
    Fullstack/Game Developer from São Paulo, Brazil
  </p>

  <div class="flex justify-center gap-8 mt-6">
    <Button href="https://github.com/devkcud" icon={GithubSolid} external>GitHub</Button>
    <Button href="/contact" icon={PhoneSolid}>Contact</Button>
  </div>
</section>
