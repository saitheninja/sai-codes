<script>
  import "../app.css";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
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

  <div class="mx-4 mt-8 scroll-mt-36 sm:mt-14 print:my-0">
    <main
      id="main"
      class="mx-auto w-full max-w-prose"
    >
      <slot />

      <Footer />
    </main>
  </div>
</div>
