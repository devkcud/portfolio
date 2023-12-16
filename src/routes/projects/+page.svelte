<script>
  import { HomeSolid } from 'flowbite-svelte-icons';
  import Button from '$lib/components/Button.svelte';
  import Project from '$lib/components/Project.svelte';

  const projects = [
    {
      name: 'portfolio',
      about: 'This site :)',
      langs: ['svelte', 'TypeScript', 'custom:UnoCSS', 'CSS3'],
      deploy: 'https://devkcud.vercel.app/'
    },
    {
      name: 'portfolio.astro',
      about: 'My portfolio in Astro (cause i wanted to learn it).',
      langs: ['custom:Astro', 'TypeScript', 'custom:UnoCSS'],
      deploy: 'https://devkcud-astro.vercel.app/'
    },
    {
      name: 'DuckOS',
      about: 'Old portfolio designed to simulate an operating system.',
      langs: ['React', 'TypeScript', 'Sass'],
      deploy: 'https://duckos.vercel.app/'
    },
    {
      name: 'Storage System',
      about: 'Fullstack application for managing a storage/inventory system.',
      langs: ['Svelte', 'TypeScript', 'Sass', 'Go', 'MongoDB']
    },
    {
      name: 'Mutare',
      about: 'Online markdown editor made for a school project.',
      langs: ['HTML5', 'CSS3', 'JavaScript'],
      deploy: 'https://devkcud.github.io/mutare/'
    },
    {
      name: 'Aeroporto ACAD',
      about: 'Fullstack application for a school project in PHP.',
      langs: ['HTML5', 'CSS3', 'PHP', 'MySQL']
    },
    {
      name: 'Kubic',
      about: 'Logical cube game made for a school project.',
      langs: ['custom:GML']
    },
    {
      name: 'mk',
      about:
        'CLI tool used for generating files & folders; similar to the commands <code>mkdir</code> and <code>touch</code>.',
      langs: ['Go']
    },
    {
      name: 'dotfile-tool',
      about: 'CLI tool used for managing dotfiles (config files in unix systems).',
      langs: ['Go']
    },
    {
      name: 'bakfile',
      about: 'A Makefile alternative.',
      langs: ['Rust-plain']
    },
    {
      name: 'htodo',
      about: 'Todo list manager for terminal.',
      langs: ['Rust-plain']
    },
    {
      name: 'cutequote',
      about: 'The provider of """funny""" quotes on the 404 page you can see.',
      langs: ['Go'],
      deploy: 'https://cutequote.onrender.com/'
    }
  ];
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<section class="w-full min-h-screen p-2 flex flex-col items-center justify-center">
  <Button href="/" nobg icon={HomeSolid}>Go home</Button>

  <section
    class="w-full grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] justify-center gap-6 mx-16 my-16"
  >
    {#each projects as project}
      <Project
        name={project.name}
        about={project.about}
        langs={project.langs}
        deploy={project.deploy}
      />
    {/each}
  </section>

  <p class="italic op-30">
    Explore more on my <a
      href="https://github.com/devkcud"
      class="color-blue-500 underline not-italic">GitHub</a
    >...
  </p>
</section>
