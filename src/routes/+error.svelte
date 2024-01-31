<script>
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';
  import { ChevronLeftSolid } from 'flowbite-svelte-icons';
</script>

<section class="flex flex-col">
  <p>Oh,</p>
  <h1 class="color-red-800 text-5xl my-4">ERROR {$page.status}</h1>
  <p class="ml-auto">{$page.error?.message}</p>

  <Button
    nobg
    icon={ChevronLeftSolid}
    style="margin: 1rem auto; margin-top: 4rem;"
    onclick={() => window.history.back()}
  >
    Go Back
  </Button>
</section>
