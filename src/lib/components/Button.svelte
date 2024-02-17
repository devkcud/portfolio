<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { TagSolid, LinkSolid } from 'flowbite-svelte-icons';
  import type { ComponentType } from 'svelte';

  export let href: string = '';
  export let disabled: boolean = false;
  export let center: boolean = false;
  export let external: boolean = false;
  export let icon: ComponentType = href ? LinkSolid : TagSolid;
  export let onclick: undefined | (() => void) = undefined;
  export let eclass: string = '';

  if (disabled) {
    href = '';
    onclick = undefined;
  }

  const classes = [
    'w-fit',
    center && 'mx-auto',
    'flex',
    'items-center',
    'gap-2',
    'px-2',
    'py-1',
    'border-none',
    'outline-none',
    'bg-transparent',
    'text-[16px]',
    !disabled && 'text-purple',
    !disabled && (href || onclick) && 'active:scale-95',
    !disabled && (href || onclick) && 'hover:scale-105',
    !disabled && (href || onclick) && 'hover:cursor-pointer',
    href && 'no-underline',
    'transition',
    ...(disabled ? Array('text-gray-600', 'hover:cursor-not-allowed') : [])
  ];
</script>

{#if href}
  <a
    {href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noreferrer' : undefined}
    class={twMerge(...classes, eclass)}
  >
    <svelte:component this={icon} size="xs" />
    <slot />
  </a>
{:else}
  <!-- Only makes sense to add onclick to a button -->
  <button class={twMerge(...classes)} on:click={onclick}>
    <svelte:component this={icon} size="xs" />
    <slot />
  </button>
{/if}
