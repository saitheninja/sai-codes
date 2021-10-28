<script>
  import "../app.css";
</script>

<svelte:head>
  <title>sai.codes a resume</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<body class="flex flex-col min-h-screen">
  <header class="m-4 flex">
    <a href="/" class="text-4xl font-mono">sai.codes</a>
    <div class="flex-grow" />
    <span id="links" class="space-x-2">
      <a href="blog">blog</a>
      <a href="resume">for hire</a>
    </span>
  </header>

  <main class="flex-grow">
    <slot />
  </main>

  <footer class="my-4 space-x-4 gray text-center">
    <a href="https://github.com/saitheninja/resume" target="_blank">
      site repo
    </a>
    <a href="mailto:saitheninja@gmail.com">email</a>
    <a href="https://saitheninja.com" target="_blank">photos</a>
    <a href="https://www.instagram.com/saitheninja/" target="_blank">
      Instagram
    </a>
    <a href="https://twitter.com/sainotbot" target="_blank">Twitter</a>
  </footer>
</body>
