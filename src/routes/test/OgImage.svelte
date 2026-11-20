
<svelte:options css="injected" />

<script lang="ts">
  let { name = "Goo goo gaga" } = $props();
</script>


<div
  id="og-image"
  class="w-full h-full flex items-center justify-center p-12 flex-col gap-4"
>
  <div class="text-center whitespace-pre-wrap leading-normal text-7xl font-semibold text-black">
    Welcome {name} to
    <span class="font-bold">Svelte</span> world
  </div>
</div>

<style>
  #og-image {
    background-image: linear-gradient(to bottom right, var(--color-orange-50), var(--color-red-200));
  }
</style>
