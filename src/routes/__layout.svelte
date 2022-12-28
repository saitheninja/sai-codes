<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <title>sai.codes</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<div id="noise" class="noise-bg" />
<div id="waves" class="waves-bg" />

<div class="isolate flex min-h-screen flex-col">
  <Header />

  <main class="mx-4 my-8 max-w-prose flex-grow pb-8 sm:mx-auto">
    <slot />
  </main>

  <Footer />
</div>
