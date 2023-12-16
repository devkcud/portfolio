<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import LanguageImage from '$lib/components/LanguageImage.svelte';
  import { HomeSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';

  let images = [
    { name: 'custom:astro', aliases: [], invert: false, type: 'frontend' },
    { name: 'svelte', aliases: ['sveltekit'], invert: false, type: 'frontend' },
    { name: 'react', aliases: ['reactjs'], invert: false, type: 'frontend' },
    { name: 'nextjs', aliases: ['react'], invert: true, type: 'frontend' },
    { name: 'html5', aliases: [], invert: false, type: 'frontend' },
    { name: 'php', aliases: [], invert: false, type: 'backend' },
    { name: 'java', aliases: [], invert: false, type: 'backend' },
    { name: 'go', aliases: ['golang'], invert: false, type: 'backend' },
    { name: 'rust-plain', aliases: [], invert: true, type: 'backend' },
    { name: 'javascript', aliases: ['js', 'ecmascript', 'nodejs'], invert: false, type: 'backend' },
    { name: 'typescript', aliases: ['ts'], invert: false, type: 'backend' },
    { name: 'python', aliases: [], invert: false, type: 'backend' },
    { name: 'firebase-plain', aliases: ['firestore'], invert: false, type: 'db' },
    { name: 'mongodb', aliases: ['mongoose'], invert: false, type: 'db' },
    { name: 'mysql', aliases: [], invert: false, type: 'db' },
    { name: 'postgresql', aliases: [], invert: false, type: 'db' },
    { name: 'docker', aliases: [], invert: false, type: 'tool' },
    { name: 'linux', aliases: [], invert: false, type: 'system' },
    { name: 'git', aliases: [], invert: false, type: 'tool' },
    { name: 'github', aliases: [], invert: true, type: 'tool' },
    { name: 'gitlab', aliases: [], invert: true, type: 'tool' },
    { name: 'css3', aliases: [], invert: false, type: 'frontend' },
    { name: 'sass', aliases: ['scss'], invert: false, type: 'frontend' },
    { name: 'tailwindcss-plain', aliases: [], invert: false, type: 'frontend' },
    { name: 'bootstrap', aliases: ['css'], invert: false, type: 'frontend' },
    { name: 'custom:unocss', aliases: [], invert: false, type: 'frontend' },
    { name: 'eslint', aliases: [], invert: false, type: 'tool' },
    { name: 'custom:prettier', aliases: [], invert: false, type: 'tool' },
    { name: 'vim', aliases: [], invert: false, type: 'tool' },
    { name: 'custom:nvim', aliases: ['neovim'], invert: false, type: 'tool' },
    { name: 'vscode', aliases: ['visual studio code', 'vs code'], invert: false, type: 'tool' },
    { name: 'markdown', aliases: ['mdx'], invert: true, type: 'tool' },
    { name: 'custom:gml', aliases: ['gamemaker', 'game maker'], invert: true, type: 'tool' }
  ];

  let search: string = '';

  images = [...images, ...images];

  onMount(() => {
    document.documentElement.style.setProperty('--slide-count', `${images.length / 2}`);
  });

  let filteredImages: { name: string; aliases: string[]; invert: boolean; type: string }[];

  $: filteredImages = images.slice(0, images.length / 2).filter((image) => {
    if (search === '') return false;

    return (
      image.name.toLowerCase().includes(search.toLowerCase()) ||
      image.aliases.some((alias) => alias.toLowerCase().includes(search.toLowerCase())) ||
      image.type.toLowerCase().includes(search.toLowerCase())
    );
  });
</script>

<svelte:head>
  <title>Technologies</title>
</svelte:head>

<Button style="margin-bottom: 4rem" href="/" nobg icon={HomeSolid}>Go home</Button>

<div class="rotate-7 w-full overflow-hidden sider-blur">
  <div
    class="inline-flex gap-4 all:w-16 all:h-16 all:object-contain all:transition hover:all:scale-[1.1] animate-slide"
  >
    {#each images as image}
      <LanguageImage name={image.name} class={image.invert ? 'invert' : ''} />
    {/each}
  </div>
</div>

<h1 class="mt-16 p-4 border-b-solid border-b-2 border-b-purple">
  Over <span class="color-purple">{images.length / 2}</span>
  skills.
  <br />
  From <span class="text-purple">Back-end</span> to
  <span class="text-purple">Front-end</span>.
</h1>

<div class="m-4">
  <p>
    More than <span class="text-purple">1.000+</span> contributions on
    <span class="text-purple">GitHub</span> yearly.
  </p>

  <p>
    Studing since <span class="text-purple">2014</span>; mostly
    <span class="text-purple">Back-end</span>. Started with <span class="text-purple">Pascal</span>.
  </p>

  <p>
    Working as a <span class="text-purple">Tech Lead</span> for
    <span class="text-purple">Faísca Científica</span> @ <span class="text-purple">Unicamp</span>.
  </p>
</div>

<div class="mt-10">
  <div class="w-fit mx-auto flex flex-wrap justify-center items-center gap-4">
    <p>
      Can't find a <span class="text-purple">specific technology</span>?
      <span class="text-purple">Search</span>
      for it:
    </p>

    <input
      type="text"
      placeholder="Search by name"
      bind:value={search}
      class="w-fit px-4 py-2 border-none border-b-solid border-b-2 border-b-purple outline-none bg-transparent text-purple"
    />
  </div>

  <div class="m-8 flex justify-center flex-wrap gap-4 all:w-12 all:h-12 all:object-contain">
    {#each filteredImages as image}
      <LanguageImage
        name={image.name}
        class={`${image.invert ? 'invert' : ''} transition hover:scale-[1.2]`}
      />
    {/each}
    {#if filteredImages.length === 0}
      <p class="text-center italic op-30 w-full">{search === '' ? 'Type in the box to begin search' : '0 results'}</p>
    {/if}
  </div>
</div>
