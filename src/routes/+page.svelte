<script lang="ts">
  import { LinkSolid as Link } from 'flowbite-svelte-icons';

  const github = 'https://github.com/devkcud';
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="select-none flex flex-col gap-4 animate-fade-in">
  <h1 class="fw-400 text-5xl">
    Hey, I'm
    <a
      href={github}
      class="inline-flex items-center gap-2 color-purple decoration-none animate-underline"
    >
      André
      <Link />
    </a>.
  </h1>

  <p>
    I am also known as <span class="color-purple">devkcud</span> and
    <span class="color-purple">Pato</span>.
  </p>

  <ul class="flex justify-center gap-2 border-t-1 border-t-solid border-white pt-2 list-none op-30">
    <li>Student from São Paulo, Brazil</li>
    <li>•</li>
    <li>Fullstack Developer</li>
    <li>•</li>
    <li>Game developer</li>
  </ul>
</section>
