<script>
  let isScrolled = false;

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function checkVisibility() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      isScrolled = true;
    } else {
      isScrolled = false;
    }
  }
</script>

<svelte:window on:scroll={checkVisibility} />

<footer
  class="bottom-4 mx-auto w-full max-w-prose px-2 text-right print:hidden"
  class:hidden={!isScrolled}
  class:sticky={isScrolled}
>
  <button
    id="scrollToTopButton"
    class="sm:-mr-12"
    on:click={scrollToTop}
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
  </button>
</footer>
