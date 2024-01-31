<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import LanguageImage from '$lib/components/LanguageImage.svelte';
  import Purple from '$lib/components/Purple.svelte';
  import { HomeSolid } from 'flowbite-svelte-icons';
  import { onMount } from 'svelte';

  type Image = {
    name: string;
    aliases: string[];
    invert: boolean;
    type: string;
  };

  let images: Image[] = [
    { name: 'custom:astro', aliases: [], invert: false, type: 'frontend' },
    { name: 'svelte', aliases: ['sveltekit'], invert: false, type: 'frontend' },
    { name: 'react', aliases: ['reactjs'], invert: false, type: 'frontend' },
    { name: 'nextjs', aliases: ['react'], invert: true, type: 'frontend' },
    { name: 'html5', aliases: [], invert: false, type: 'frontend' },
    { name: 'php', aliases: [], invert: false, type: 'backend' },
    { name: 'go', aliases: ['golang'], invert: false, type: 'backend' },
    { name: 'rust-plain', aliases: [], invert: true, type: 'backend' },
    { name: 'express', aliases: ['js'], invert: true, type: 'backend' },
    { name: 'flask', aliases: ['python'], invert: true, type: 'backend' },
    { name: 'nodejs', aliases: ['js'], invert: false, type: 'backend' },
    { name: 'javascript', aliases: ['js', 'ecmascript', 'nodejs'], invert: false, type: 'backend' },
    { name: 'typescript', aliases: ['ts'], invert: false, type: 'backend' },
    { name: 'python', aliases: [], invert: false, type: 'backend' },
    { name: 'custom:supabase', aliases: [], invert: false, type: 'db' },
    { name: 'firebase-plain', aliases: ['firestore', 'fireauth'], invert: false, type: 'db' },
    { name: 'mongodb', aliases: ['mongoose'], invert: false, type: 'db' },
    { name: 'custom:prisma', aliases: [], invert: true, type: 'db' },
    { name: 'mysql', aliases: [], invert: false, type: 'db' },
    { name: 'postgresql', aliases: [], invert: false, type: 'db' },
    { name: 'docker', aliases: [], invert: false, type: 'tool' },
    { name: 'linux', aliases: [], invert: false, type: 'system' },
    { name: 'bash', aliases: ['shell'], invert: false, type: 'system' },
    { name: 'git', aliases: [], invert: false, type: 'tool' },
    { name: 'github', aliases: [], invert: true, type: 'tool' },
    { name: 'gitlab', aliases: [], invert: false, type: 'tool' },
    { name: 'css3', aliases: [], invert: false, type: 'frontend' },
    { name: 'sass', aliases: ['scss'], invert: false, type: 'frontend' },
    { name: 'tailwindcss-plain', aliases: [], invert: false, type: 'frontend' },
    { name: 'bootstrap', aliases: ['css'], invert: false, type: 'frontend' },
    { name: 'custom:unocss', aliases: [], invert: false, type: 'frontend' },
    { name: 'jest-plain', aliases: [], invert: false, type: 'tool' },
    { name: 'eslint', aliases: [], invert: false, type: 'tool' },
    { name: 'custom:prettier', aliases: [], invert: false, type: 'tool' },
    { name: 'vim', aliases: [], invert: false, type: 'tool' },
    { name: 'custom:nvim', aliases: ['neovim'], invert: false, type: 'tool' },
    { name: 'vscode', aliases: ['visual studio code', 'vs code'], invert: false, type: 'tool' },
    { name: 'markdown', aliases: ['mdx'], invert: true, type: 'tool' },
    { name: 'figma', aliases: [], invert: false, type: 'tool' },
    { name: 'gimp', aliases: [], invert: false, type: 'tool' },
    { name: 'custom:gml', aliases: ['gamemaker', 'game maker'], invert: true, type: 'tool' },
    { name: 'godot', aliases: [], invert: false, type: 'tool' }
  ];

  images = [...images, ...images];

  let search: string = '';

  $: filteredImages = images.slice(0, images.length / 2).filter((image) => {
    if (search === '') {
      return false;
    }

    return (
      image.name.toLowerCase().includes(search.toLowerCase()) ||
      image.aliases.some((alias) => alias.toLowerCase().includes(search.toLowerCase())) ||
      image.type.toLowerCase().includes(search.toLowerCase())
    );
  });

  onMount(() => {
    document.documentElement.style.setProperty('--slide-count', `${images.length / 2}`); // Required for the 'slide' animation: CSS variable
  });
</script>

<svelte:head>
  <title>Technologies</title>
</svelte:head>

<section class="max-w-3/4 my-4">
  <Button href="/" nobg icon={HomeSolid} style="display: block; margin: 0 auto;">Go home</Button>

  <div class="rotate-7 w-full my-16 overflow-hidden sider-blur">
    <div class="inline-flex gap-8 animate-slide">
      {#each images as image}
        <LanguageImage name={image.name} class={image.invert ? 'invert' : ''} />
      {/each}
    </div>
  </div>

  <section class="w-fit mx-auto flex flex-col items-center">
    <article>
      <h2 class="text-3xl text-center">Over <Purple>{images.length / 2}</Purple> skills.</h2>
      <p>
        From <Purple>Back-end</Purple> to <Purple>Front-end</Purple> to <Purple>Design</Purple>.
      </p>
    </article>

    <Divider />

    <article class="m-4">
      <p>
        Studing since <Purple>2014</Purple>; mostly <Purple>Back-end</Purple> and
        <Purple>Security</Purple>.
      </p>

      <p>More than <Purple>1.000</Purple> contributions on <Purple>GitHub</Purple> yearly.</p>
    </article>

    <Divider />

    <article>
      <div class="mx-auto flex flex-wrap justify-center items-center gap-2">
        <p>
          Can't see a <Purple>specific skill</Purple>?
        </p>

        <input
          type="text"
          placeholder="Search by name"
          bind:value={search}
          class="w-[118px] bg-transparent text-purple border-none outline-none p-2"
        />
      </div>

      <ul class="m-8 flex justify-center flex-wrap gap-4 list-none">
        {#if filteredImages.length === 0}
          <p class="text-center op-30">
            {search === '' ? 'Type in the box to begin search' : `0 results found for "${search}"`}
          </p>
        {:else}
          {#each filteredImages as image}
            <li>
              <LanguageImage name={image.name} class={image.invert ? 'invert' : ''} />
            </li>
          {/each}
        {/if}
      </ul>
    </article>
  </section>
</section>
