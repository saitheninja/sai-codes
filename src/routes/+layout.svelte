<script>
  import "../app.postcss";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <link
    rel="icon"
    href="https://fav.farm/🐧"
  />

  <meta
    name="description"
    content="Miscellaneous experiments and rants."
  />

  <meta
    name="keywords"
    content="Svelte, HTML, CSS, JavaScript"
  />
</svelte:head>

<div class="text-color-main isolate flex min-h-screen flex-col">
  <Header />

  <main
    id="main"
    class="mx-6 mt-10 mb-12 max-w-prose flex-grow scroll-mt-36 print:my-0 print:mx-auto sm:mx-auto sm:mt-14"
  >
    <slot />
  </main>

  <Footer />
</div>
