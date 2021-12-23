<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<div class="space-y-8">
  <h1 class="font-bold text-6xl pb-2">Saien Govender</h1>

  <div id="code" class="space-y-2">
    <h2 class="text-4xl code">Code</h2>

    <div>
      <h3>
        <a href="https://saitheninja.itch.io/spacejanitor" target="_blank">
          Game: Space Janitor
        </a>
      </h3>
      <p class="parentheses">2019</p>
      <p>
        Built for ShenaniJam 2019, with the
        <a href="https://www.godotengine.org" target="_blank">
          Godot engine.
        </a>
      </p>
    </div>

    <div>
      <h3>Marketing Agency: Creative Crew</h3>
      <p class="parentheses">2019 - 2020</p>
      <p>
        HTML, CSS, JS. Managing WordPress sites. Providing technical support.
        Managing clients. Photography, videography, audio production, design.
      </p>
    </div>

    <div>
      <h3>
        <a href="https://sanskara.co.za" target="_blank">
          Freelance Web Developer
        </a>
      </h3>
      <p class="parentheses">2020 - current</p>
      <p>Svelte and Vue, with the most up-to-date tools and practices.</p>
    </div>
  </div>

  <div id="audio" class="space-y-2">
    <h2 class="text-5xl audio">Audio</h2>

    <div>
      <h3>Amateur Musician</h3>
      <p class="parentheses">2010 - current</p>
      <p>Guitar, synths, harmonica, Ardour.</p>
    </div>

    <div>
      <h3><a href="https://youtu.be/uCf3EeQ1Htc">Videographer</a></h3>
      <p class="parentheses">2015 - 2020</p>
      <p>
        Corporate advertising, educational courses, music videos, voiceover
        recording.
      </p>
    </div>
  </div>

  <div id="about" class="space-y-2">
    <h2 class="text-4xl pb-1 about">About</h2>

    <p>I live in South Africa. 🇿🇦</p>

    <p>
      When I started using the internet, it took ~20 minutes to download an mp3.
      I have spent many hours contemplating audio bitrates and download sizes.
      💿
    </p>

    <p>
      Pocket Casts stats:
      <br />listened to podcasts for <strong>164 days, 15 hours</strong>. ⌛
      <br />(That's quite a lot.)
    </p>

    <p id="buzzwords">
      I use modern IDEs
      <span class="parentheses"> (VSCode, NeoVim) </span>

      that have all the bells and whistles
      <span class="parentheses"> (ESLint, Prettier, TypeScript) </span>

      & run on Linux
      <span class="parentheses"> (Arch, Ubuntu, Docker Compose) </span>

      to build apps using JavaScript frameworks
      <span class="parentheses"> (Node, Svelte, SvelteKit, Vue, Nuxt) </span>

      & CSS frameworks
      <span class="parentheses"> (Tailwind CSS, PostCSS, SCSS) </span>

      with CI/CD
      <span class="parentheses"> (Git, GitHub Actions) </span>

      to bundle
      <span class="parentheses"> (Vite, ESBuild, webpack) </span>

      & deploy
      <span class="parentheses"> (Digitalocean, Netlify, JAMstack) </span>
      pretty websites.
    </p>
  </div>
</div>

<style>
  /* set h2 fonts & animations */
  @import url("https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Playfair+Display:wght@600&display=swap&text=AudioAbout");

  .code {
    font-family: monospace;
    font-weight: 700;
    animation-name: slide;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .audio {
    font-family: "Fleur De Leah", cursive;
    animation-name: pulse;
    animation-duration: 10s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .about {
    font-family: "Playfair Display", serif;
    animation-name: wiggle;
    animation-duration: 10s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(-10%);
    }

    10% {
      opacity: 1;
      transform: translateX(0%);
    }

    90% {
      opacity: 1;
      transform: translateX(0%);
    }

    100% {
      opacity: 0;
      transform: translateX(10%);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    5% {
      transform: scale(1.1);
    }

    10% {
      transform: scale(1);
    }

    90% {
      transform: scale(1);
    }

    95% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }

    4% {
      transform: rotate(-3deg);
    }

    8% {
      transform: rotate(3deg);
    }

    10% {
      transform: rotate(0deg);
    }

    90% {
      transform: rotate(0deg);
    }

    92% {
      transform: rotate(-3deg);
    }

    96% {
      transform: rotate(3deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
</style>
