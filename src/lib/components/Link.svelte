<script lang="ts">
  export let href: string;
</script>

<a {href} class="color-purple decoration-none animate-underline">
  <slot />
</a>
