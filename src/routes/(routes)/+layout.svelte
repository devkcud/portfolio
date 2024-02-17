<script>
  import { HomeSolid } from 'flowbite-svelte-icons';
  import Button from '$lib/components/Button.svelte';
</script>

<div class="max-w-3/4 my-4">
  <Button href="/" icon={HomeSolid} center>Go home</Button>
  <slot />
</div>
