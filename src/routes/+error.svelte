<script>
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';
  import { ChevronLeftSolid } from 'flowbite-svelte-icons';
</script>

<section class="flex flex-col">
  <p>Oh, no! It's a</p>
  <h1 class="color-red-800 text-5xl my-4">{$page.status} error page.</h1>
  <p class="w-fit ml-auto">Everybody, run!</p>

  <p class="w-fit mx-auto mt-16 op-30 italic">{$page.url} &gt; {$page.error?.message}</p>

  <Button
    nobg
    icon={ChevronLeftSolid}
    style="margin: 1rem auto"
    onclick={() => window.history.back()}
  >
    Back
  </Button>
</section>
