<script lang="ts">
  import { LinkSolid } from 'flowbite-svelte-icons';
  import { tooltip } from '@svelte-plugins/tooltips';

  export let name: string;
  export let about: string;
  export let langs: string[];
  export let deploy: string = '';

  const langsToInvert = ['rust', 'gml'];

  function grabImages(): { src: string; alt: string; style: string[] }[] {
    const iconsURL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/';
    let images = [];

    for (let lang of langs) {
      let imageSource: string;
      let languageName: string = lang.split('-')[0].replaceAll(/^(custom\:)/g, '');

      lang = lang.toLowerCase();

      const style = ['w-6', 'h-6', 'object-contain'];

      if (langsToInvert.includes(languageName.toLowerCase())) {
        style.push('invert');
      }

      if (lang.includes('custom:')) {
        imageSource = `/langs/${lang.split(':')[1]}.svg`;
        images.push({ src: imageSource, alt: languageName, style });
        continue;
      }

      imageSource = `${iconsURL}${lang.split('-')[0]}/${lang}`;

      if (!lang.includes('-')) {
        imageSource += '-original';
      }

      imageSource += '.svg';

      images.push({ src: imageSource, alt: languageName, style });
    }

    return images;
  }
</script>

<div
  class="w-full flex flex-col gap-2 rounded shadow-2xl shadow-opacity-10 shadow-purple p-8 all:decoration-none"
>
  <header class="flex flex-justify-between">
    <h1 class="flex items-center gap-2 text-3xl fw-800 all:transition all:ease">
      <a
        href={`https://github.com/devkcud/${name.split(' ').join('-')}`}
        class="text-purple hover:color-purple-900"
      >
        {name}
        <span><LinkSolid size="sm" class="inline op-30" /></span>
      </a>

      {#if deploy !== ''}
        <a
          href={deploy}
          class="flex items-center gap-2 px-2 bg-gray-900 text-sm text-white fw-400 rounded-full outline-none hover:outline-white"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Preview</span>
        </a>
      {/if}
    </h1>

    <div class="flex gap-2 items-center">
      {#each grabImages() as lang}
        <img
          src={lang.src}
          alt={lang.alt}
          class={lang.style.join(' ')}
          title={lang.alt}
          use:tooltip
        />
      {/each}
    </div>
  </header>

  <p>{@html about}</p>
</div>
