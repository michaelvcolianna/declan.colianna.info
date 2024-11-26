<script>
  import Link from '$lib/components/Link.svelte';

  let { href, children } = $props();
</script>

<li>
  <Link {href}>{@render children()}</Link>
</li>
