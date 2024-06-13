<script>
  import "../app.css";
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
    class="mx-auto mt-8 w-full max-w-prose scroll-mt-36 px-6 sm:mt-14 print:mx-auto print:my-0"
  >
    <slot />

    <Footer />
  </main>
</div>
