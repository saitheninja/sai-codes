<script>
  import "../app.css";
</script>

<svelte:head>
  <title>sai.codes a resume</title>
  <link rel="icon" href="https://fav.farm/⌨️" />
</svelte:head>

<header class="m-4">
  <a href="/" class="text-4xl font-mono">sai.codes</a>
  <span class="float-right space-x-2">
    <a href="resume">resume</a>
    <a href="blog">blog</a>
  </span>
</header>

<body class="text-white bg-gradient-to-br from-blue-900 to-pink-900 bg-fixed">
  <slot />
</body>

<footer class="my-4 space-x-4 gray text-center">
  <a href="https://github.com/saitheninja/resume" target="_blank">site repo</a>
  <a href="mailto:saitheninja@gmail.com">email</a>
  <a href="https://saitheninja.com" target="_blank">photos</a>
  <a href="https://www.instagram.com/saitheninja/" target="_blank">Instagram</a>
  <a href="https://twitter.com/sainotbot" target="_blank">Twitter</a>
</footer>
