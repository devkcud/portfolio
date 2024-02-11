<script lang="ts">
  import { TagSolid, LinkSolid } from 'flowbite-svelte-icons';
  import type { ComponentType } from 'svelte';

  export let href: string = '';
  export let center: boolean = false;
  export let external: boolean = false;
  export let icon: ComponentType = href ? LinkSolid : TagSolid;
  export let onclick: () => void = () => {};

  const classes = [
    'w-fit',
    center && 'mx-auto',
    'block',
    'px-2',
    'py-1',
    'bg-trasparent',
    'text-purple',
    href && 'no-underline'
  ];
</script>

{#if href}
  <a
    {href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    class={classes.join(' ')}
  >
    <svelte:component this={icon} size="xs" />
    <slot />
  </a>
{:else}
  <!-- Only makes sense to add onclick to a button -->
  <button class={classes.join(' ')} on:click={onclick}>
    <svelte:component this={icon} size="xs" />
    <slot />
  </button>
{/if}
