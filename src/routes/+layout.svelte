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
    content="Svelte, HTML, CSS, JavaScript, TypeScript"
  />
</svelte:head>

<div class="text-color-main isolate flex min-h-screen flex-col">
  <Header />

  <main
    id="main"
    class="mx-6 mb-16 mt-10 max-w-prose flex-grow scroll-mt-36 sm:mx-auto sm:mt-14 print:mx-auto print:my-0"
  >
    <slot />
  </main>

  <Footer />
</div>
