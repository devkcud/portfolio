<script lang="ts">
  import { TagSolid, CloseCircleSolid, LinkSolid } from 'flowbite-svelte-icons';
  import type { ComponentType } from 'svelte';

  export let type: 'normal' | 'danger' | 'correct' | 'disabled' = 'normal';
  export let href: string = '';
  export let icon: ComponentType = href
    ? LinkSolid
    : type === 'danger'
      ? CloseCircleSolid
      : TagSolid;
  export let style: string = '';
  export let nobg: boolean = false;
  export let onclick: () => void = () => {};
  export let onmouseenter: () => void = () => {};
  export let onmouseleave: () => void = () => {};

  if (type === 'danger') {
    type += ' animate-shake';
  }

  if (type === 'disabled') {
    href = '';
  }

  if (href !== '') {
    onclick = () => {
      window.location.href = href;
    };
  }

  if (nobg) {
    type += ' nobg';
  }
</script>

<button
  class={type}
  {style}
  on:click={onclick}
  on:mouseenter={onmouseenter}
  on:mouseleave={onmouseleave}
>
  <svelte:component this={icon} size="xs" />
  <slot />
</button>

<style>
  button {
    --bg: #c084fc;
    --fg: #000;

    width: fit-content;

    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    padding-right: 1rem;
    padding-left: 0.5rem;
    padding-block: 0.25rem;

    font-size: 16px;

    background-color: var(--bg);
    color: var(--fg);

    border: none;
    border-radius: 100px;

    cursor: pointer;

    transition: transform 0.2s ease-in-out;
  }

  button:not(.disabled):hover {
    transform: scale(0.9);
  }

  button:not(.disabled):active {
    transform: scale(1.05);
  }

  button.disabled {
    --bg: #a8a29e;
    cursor: not-allowed;
    opacity: 0.3;
  }

  button.correct {
    --bg: #10b981;
  }

  button.danger {
    --bg: #ef4444;
  }

  button.nobg {
    background: none;
    --fg: var(--bg);
  }
</style>
