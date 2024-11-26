<script>
  let { anchor, summary, children } = $props();
</script>

<div class="w-full">
  <details
    id={anchor}
    class="border-2 border-dashed border-black p-4 [&_svg]:open:-rotate-45"
  >
    <summary class="flex cursor-pointer list-none items-center gap-4">
      <div>
        <svg
          class="hidden lg:inline rotate-0 transform text-black transition-all duration-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><line x1="12" y1="5" x2="12" y2="19"></line><line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          ></line></svg
        >
      </div>

      <div class="font-bold text-2xl">
        {summary}
      </div>
    </summary>

    <div class="p-4">
      {@render children()}
    </div>
  </details>
</div>
