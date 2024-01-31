<div>
  {#if $$slots.default}
    <span class="px-4">
      <slot />
    </span>
  {/if}
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-block: 2rem;
    color: #c084fc;
  }

  div::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #c084fc;
  }

  div::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #c084fc;
  }
</style>
