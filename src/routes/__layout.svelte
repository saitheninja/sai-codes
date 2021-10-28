<script>
  import "../app.css";
</script>

<svelte:head>
  <title>sai.codes</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<body class="min-h-screen max-w-prose mx-auto">
  <header class="pt-4 pb-10 sticky top-0 text-right">
    <h1><a href="/" class="text-4xl font-mono"> sai.codes </a></h1>
    <span id="links" class="space-x-2 text-sm">
      <a href="writing"> writing </a>
      <a href="resume"> for hire </a>
      <a href="https://github.com/saitheninja/resume" target="_blank">
        GitHub
      </a>
      <a href="https://www.instagram.com/saitheninja/" target="_blank">
        Instagram
      </a>
    </span>
  </header>

  <main>
    <slot />
  </main>
</body>
