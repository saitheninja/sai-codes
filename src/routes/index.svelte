<svelte:head>
  <title>Resume: Saien Govender</title>
</svelte:head>

<div class="max-w-prose mx-auto my-4 space-y-8">
  <h1>Saien Govender</h1>

  <div id="code" class="space-y-2">
    <h2>Code</h2>

    <div>
      <h3>
        <a href="https://saitheninja.itch.io/spacejanitor" target="_blank">
          Game: Space Janitor
        </a>
      </h3>
      <p>2019</p>
      <p>
        ShenaniJam 2019.
        <a href="https://www.godotengine.org" target="_blank">Godot engine.</a>
      </p>
    </div>

    <div>
      <h3>Marketing Agency: Creative Crew</h3>
      <p>2019 - 2020</p>
      <p>
        HTML, CSS, JS. Managing WordPress deploys. Providing technical support.
        Managing clients. Photography, videography, audio production, design.
      </p>
    </div>

    <div>
      <h3>Freelance Developer</h3>
      <p>2020 - current</p>
      <p>
        Learning Svelte, with most up-to-date JavaScript tools and practices.
      </p>
    </div>
  </div>

  <div id="audio" class="space-y-2">
    <h2>Audio</h2>

    <div>
      <h3>Amateur musician</h3>
      <p>2010 - current</p>
      <p>Guitar, synths.</p>
    </div>

    <div>
      <h3>Photographer / Videographer</h3>
      <p>2015 - 2020</p>
      <p>Corporate advertising, educational courses, music videos.</p>
    </div>
  </div>

  <div class="space-y-2">
    <h2>About</h2>

    <p>Hi.</p>

    <p>I make art.</p>

    <p>
      When I started using the internet, it took ~30 minutes to download an
      .mp3. I have spent many hours of my life contemplating audio bitrates and
      download sizes.
    </p>

    <p>
      Pocket Casts says I've listened to podcasts for
      <em> 164 days, 13 hours </em>
      since 2017. (That's quite a lot.)
    </p>

    <p id="buzzwords">
      I use modern IDEs (VSCode, NeoVim) that have all the bells and whistles
      (ESLint, Prettier, TypeScript) & run on Linux (Arch, Ubuntu, Docker
      Compose) to build apps with JavaScript frameworks (Node, Svelte,
      SvelteKit, Vue, Nuxt) & CSS frameworks (Tailwind + PostCSS, SCSS) that I
      use CI/CD (git, GitHub Actions) to bundle (Webpack, Gulp, Parcel) & deploy
      (JAMstack, Digitalocean, Netlify).
    </p>

    <p class="text-gray-400">
      <a href="https://github.com/saitheninja/resume" target="_blank">
        GitHub repo.
      </a>
    </p>
  </div>

  <!-- <ul class="list-disc">
    <li>Static web app development background</li>
    <li>Experience writing modern, conformant HTML5 code</li>
    <li>Experience with several modern CSS/SCSS frameworks</li>
    <li>Familiarity with JavaScript unit testing & web browser developer tools</li>
    <li>Experience working with Jamstack</li>
    <li>Experience working on an audio, podcast, or other media platform</li>
  </ul> -->
</div>

<style>
  h1,
  h2,
  h3 {
    @apply font-bold;
  }

  h1 {
    @apply text-6xl;
  }

  h2 {
    @apply text-4xl;
  }

  h3 {
    @apply text-lg;
  }

  a {
    @apply underline;
  }
</style>
