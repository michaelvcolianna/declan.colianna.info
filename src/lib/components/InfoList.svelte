<script>
  let { children } = $props();
</script>

<ul class="mt-8 flex flex-col lg:grid grid-cols-2 gap-8 text-3xl w-full">
  {@render children()}
</ul>
