<script>
  let { href, children } = $props();
</script>

<a {href} class="text-indigo-700 underline text-wrap">{@render children()}</a>
