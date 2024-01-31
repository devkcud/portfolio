<script>
  import { HomeSolid } from 'flowbite-svelte-icons';
  import Button from '$lib/components/Button.svelte';
</script>

<section class="max-w-3/4 my-4">
  <Button href="/" nobg icon={HomeSolid} style="display: block; margin: 0 auto;">Go home</Button>

  <slot />
</section>
