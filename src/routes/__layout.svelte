<script>
  import "../app.css";
</script>

<svelte:head>
  <title>sai.codes a resume</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<header>
  <h1>sai.codes</h1>
</header>

<body class="text-white bg-gradient-to-br from-blue-900 to-pink-900 bg-fixed">
  <slot />
</body>

<footer class="mb-4">
  <p id="contact" class="gray text-center">
    <a href="https://github.com/saitheninja/resume" target="_blank">
      site repo
    </a>
    /
    <a href="mailto:saitheninja@gmail.com"> email </a>
    /
    <a href="https://saitheninja.com" target="_blank"> photos </a>
    /
    <a href="https://www.instagram.com/saitheninja/" target="_blank">
      Instagram
    </a>
    /
    <a href="https://twitter.com/sainotbot" target="_blank"> Twitter </a>
  </p>
</footer>
