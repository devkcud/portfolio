<script lang="ts">
  import { GithubSolid, LinkSolid } from 'flowbite-svelte-icons';
  import LanguageImage from './LanguageImage.svelte';
  import Button from './Button.svelte';

  interface Lang {
    name: string;
    invert?: boolean;
  }

  export let name: string;
  export let about: string;
  export let langs: (string | Lang)[];
  export let deploy: string = '';
</script>

<div class="w-full shadow-lg shadow-purple/20 rounded-lg p-8">
  <h1 class="text-3xl text-purple">{name}</h1>

  <div class="inline-flex gap-1 my-4">
    {#each langs as lang}
      <LanguageImage
        name={typeof lang === 'string' ? lang : lang.name}
        invert={typeof lang === 'string' ? false : lang.invert}
        width={20}
        height={20}
      />
    {/each}
  </div>

  <p class="my-4">{about}</p>

  <div class="flex justify-between gap-8">
    <Button href="https://github.com/devkcud/{name.replace(/ /g, '-')}" icon={GithubSolid} external>
      GitHub
    </Button>
    <Button href={deploy} disabled={!deploy} icon={LinkSolid} external>Deploy</Button>
  </div>
</div>
