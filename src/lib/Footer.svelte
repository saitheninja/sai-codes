<script>
  import { onMount } from "svelte";

  // When the user clicks on the button, scroll to the top of the document
  function scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  onMount(() => {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("scrollTopButton").className = "sticky";
      } else {
        document.getElementById("scrollTopButton").className = "hidden";
      }
    }
  });
</script>

<footer class="link-hover sticky text-right bottom-2 px-4">
  <button id="scrollTopButton" class="hidden" on:click={scrollTop}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z"
        fill="currentColor"
      />
    </svg>
  </button>
</footer>
