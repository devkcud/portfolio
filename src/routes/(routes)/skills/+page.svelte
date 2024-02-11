<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';
  import LanguageImage from '$lib/components/LanguageImage.svelte';
  import Purple from '$lib/components/Purple.svelte';
  import { onMount } from 'svelte';
  import skillsJSON from '$lib/data/skills.json';

  type Skill = {
    name: string;
    aliases: string[];
    invert: boolean;
    type: string;
  };

  let skills: Array<Skill> = [...skillsJSON, ...skillsJSON];
  let search: string = '';

  $: filteredSkills = skills.slice(0, skills.length / 2).filter((skill) => {
    if (search === '') {
      return false;
    }

    return (
      skill.name.toLowerCase().includes(search.toLowerCase()) ||
      skill.aliases.some((alias) => alias.toLowerCase().includes(search.toLowerCase())) ||
      skill.type.toLowerCase().includes(search.toLowerCase())
    );
  });

  onMount(() => {
    document.documentElement.style.setProperty('--slide-count', `${skills.length / 2}`); // Required for the 'slide' animation: CSS variable
  });
</script>

<svelte:head>
  <title>Skills</title>
</svelte:head>

<div class="rotate-7 w-full my-16 overflow-hidden sider-blur">
  <div class="inline-flex gap-8 animate-slide">
    {#each skills as skill}
      <LanguageImage name={skill.name} invert={skill.invert} />
    {/each}
  </div>
</div>

<section class="w-fit mx-auto flex flex-col items-center">
  <article>
    <h2 class="text-3xl text-center">Over <Purple>{skills.length / 2}</Purple> skills.</h2>
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
      {#if filteredSkills.length === 0}
        <p class="text-center op-30">
          {search === '' ? 'Type in the box to begin search' : `0 results found for "${search}"`}
        </p>
      {:else}
        {#each filteredSkills as skill}
          <li>
            <LanguageImage name={skill.name} invert={skill.invert} />
          </li>
        {/each}
      {/if}
    </ul>
  </article>
</section>
