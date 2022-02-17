<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <title>sai.codes</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="max-w-prose mx-4 sm:mx-auto pb-8 flex-grow">
    <slot />
  </main>

  <Footer />
</div>
