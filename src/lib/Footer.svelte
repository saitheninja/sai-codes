<script lang="ts">
  import { fly } from "svelte/transition";
  import { quintInOut } from "svelte/easing";

  // pixels
  let offset = 120;
  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<footer
  id="footer"
  class="sticky bottom-0 -mr-2 ml-auto max-w-max py-8 md:-mr-16 print:hidden"
>
  {#if scrollY > offset}
    <a
      href="#top"
      class="footer-drop-shadow"
      transition:fly|global={{ duration: 200, y: 50, easing: quintInOut }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>scroll to top</title>
        <path
          d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
          fill="currentColor"
        />
      </svg>
    </a>
  {/if}
</footer>
