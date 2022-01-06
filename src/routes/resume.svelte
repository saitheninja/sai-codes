<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<div class="space-y-10">
  <h1 class="font-bold text-6xl">Saien Govender</h1>

  <div id="work" class="space-y-2">
    <h2 class="text-4xl work">Work</h2>

    <div>
      <h3>
        <a href="https://sanskara.co.za" target="_blank">
          Freelance Web Developer
        </a>
      </h3>

      <p class="parentheses">2020 - current</p>

      <p>Svelte, with the most up-to-date tools and practices.</p>
    </div>

    <div>
      <h3>
        <a href="https://creativecrew.co.za/" target="_blank">
          Marketing Agency: Creative Crew
        </a>
      </h3>

      <p class="parentheses">2019 - 2020</p>

      <p>
        Project management. Administering client websites. Providing technical
        support. Developing educational material. Camera operator. Video
        production. Audio engineer. Salesman. Design. IT and networking. Any
        other odd jobs.
      </p>
    </div>

    <div>
      <h3>
        <a href="https://saitheninja.com" target="_blank">
          Freelance Media Production
        </a>
      </h3>

      <p class="parentheses">2015 - 2019</p>

      <p>
        Photography, videography & audio for weddings, engagements, graduations,
        birthdays, corporate events, advertising, educational courses, music
        videos, podcasts, voiceovers, etc.
      </p>
    </div>
  </div>

  <div id="art" class="space-y-2">
    <h2 class="text-5xl art">Art</h2>

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
      <h3>Music</h3>

      <p class="parentheses">2010 - current</p>

      <p>Guitar, piano, synths, harmonica.</p>
    </div>
  </div>

  <div id="about" class="space-y-2">
    <h2 class="text-4xl pb-1 about">About</h2>

    <p>🇿🇦</p>

    <p id="buzzwords">
      I use modern IDEs
      <span class="parentheses"> (VSCode, NeoVim) </span>

      that have all the bells and whistles
      <span class="parentheses"> (ESLint, Prettier) </span>

      & run on Linux
      <span class="parentheses"> (Ubuntu, Arch, Manjaro, Endeavour ) </span>

      to write apps in HTML, CSS
      <span class="parentheses"> (Tailwind CSS, PostCSS, SCSS) </span>

      & JavaScript
      <span class="parentheses"> (TypeScript, Node, Svelte, SvelteKit) </span>

      with CI/CD pipelines
      <span class="parentheses"> (Git, GitHub Actions) </span>

      to bundle
      <span class="parentheses"> (Vite, Rollup, ESBuild, webpack) </span>

      & deploy
      <span class="parentheses">
        (Docker Compose, Digitalocean, Netlify, JAMstack)
      </span>

      pretty websites.
    </p>
  </div>
</div>

<style>
  /* set h2 fonts & animations */
  @import url("https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Playfair+Display:wght@600&display=swap&text=WorkArtAbout");

  .parentheses {
    @apply text-gray-300 italic text-sm;
  }

  .work {
    font-family: monospace;
    font-weight: 700;
    animation-name: slide;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .art {
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
