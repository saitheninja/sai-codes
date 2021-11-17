<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
</script>

<svelte:head>
  <title>sai.codes</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<Header />

<main class="max-w-prose mx-4 sm:mx-auto pb-8">
  <slot />
</main>
