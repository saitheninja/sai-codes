<script>
  import "../app.css";
</script>

<svelte:head>
  <title>sai.codes</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<body class="min-h-screen max-w-prose mx-4 md:mx-auto">
  <header class="pt-4 pb-12 sticky top-0 text-right">
    <h1><a href="/" class="text-4xl font-mono"> sai.codes </a></h1>
    <nav id="links" class="mt-1 space-x-2 text-sm">
      <a href="resume"> resume </a>
      <a href="ranting"> ranting </a>
      <a href="https://github.com/saitheninja/resume" target="_blank">
        GitHub
      </a>
      <a href="https://www.instagram.com/saitheninja/" target="_blank">
        Instagram
      </a>
    </nav>
  </header>

  <main class="pb-8">
    <slot />
  </main>
</body>
