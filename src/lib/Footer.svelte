<script lang="ts">
  import { fly } from "svelte/transition";

  // pixels
  let offset = 120;
  let scrollY: number;
</script>

<svelte:window bind:scrollY />

{#if scrollY > offset}
  <footer
    class="sticky bottom-5 mx-auto w-full max-w-prose px-2 print:hidden"
    transition:fly={{ y: 10 }}
  >
    <a
      href="#top"
      class="float-right sm:-mr-16"
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
  </footer>
{/if}
