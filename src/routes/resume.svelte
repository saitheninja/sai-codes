<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<div class="space-y-10">
  <div class="w-full">
    <h1 class="text-6xl pb-1">
      <a href="/resume">Saien Govender</a>
    </h1>

    <p class="text-gray-300 print:text-gray-600">
      Full-stack developer with a frontend focus.
    </p>
  </div>

  <div id="work" class="space-y-4">
    <h2 class="work">Work</h2>

    <div>
      <h3>
        <a href="https://sanskara.co.za" target="_blank">
          Freelance Web Developer
        </a>
      </h3>

      <p class="parentheses">2020 - current</p>

      <p>
        SvelteKit sites, focused on keeping up with modern design, tools and
        practices.
      </p>
    </div>

    <div>
      <h3>
        <a href="https://creativecrew.co.za/" target="_blank">
          Creative Crew: Marketing Manager
        </a>
      </h3>

      <p class="parentheses">2019 - 2020</p>

      <p>Responsibilities included:</p>
      project management, educational content development, video production, audio
      production, design, website administration, technical support, sales.
    </div>

    <div>
      <h3>
        <a href="https://saitheninja.com" target="_blank">
          Saitheninja Photography: Owner
        </a>
      </h3>

      <p class="parentheses">2015 - 2019</p>

      <p>
        Photography, videography & audio production for events. Previous events
        include: graduations, birthdays, corporate events, advertising,
        engagements, weddings, educational courses, music videos, podcasts.
      </p>
    </div>
  </div>

  <div id="art" class="space-y-4">
    <h2 class="text-5xl art">Art</h2>

    <div>
      <h3>Music</h3>

      <p class="parentheses">2010 - current</p>

      <p>Guitar, harmonica and piano.</p>
    </div>

    <div>
      <h3>
        <a href="https://www.instagram.com/saitheninja/" target="_blank">
          Photography
        </a>
      </h3>

      <p class="parentheses">2013 - current</p>

      <p>
        Check out my
        <a href="https://www.instagram.com/saitheninja/" target="_blank">
          Instagram.
        </a>
      </p>
    </div>

    <div>
      <h3>
        <a href="https://saitheninja.itch.io/spacejanitor" target="_blank">
          Video Game: Space Janitor
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
  </div>

  <div id="about" class="space-y-4">
    <h2 class="about">About</h2>

    <p>I am located in Johannesburg, South Africa. 🇿🇦</p>

    <p>
      Through many years of experimenting with computers, I've become an expert
      troubleshooter.
    </p>

    <p id="web-buzzwords">
      I use modern IDEs
      <span class="parentheses">(VSCode, NeoVim)</span>

      that have all the bells and whistles
      <span class="parentheses">(ESLint, Stylelint, Prettier)</span>

      & run on Linux
      <span class="parentheses">(Ubuntu, Arch)</span>

      to write apps in HTML, CSS
      <span class="parentheses">(Tailwind CSS, PostCSS, SCSS)</span>

      & JavaScript
      <span class="parentheses">(TypeScript, Node, Svelte, SvelteKit)</span>

      with CI/CD pipelines
      <span class="parentheses">(Git, GitHub Actions)</span>

      to bundle
      <span class="parentheses">(Vite, Rollup, ESBuild)</span>

      & deploy
      <span class="parentheses">
        (Docker Compose, DigitalOcean, Netlify, JAMstack)
      </span>

      good-looking websites.
    </p>
  </div>
</div>

<style>
  /* set h2 fonts & animations */
  @import url("https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Playfair+Display:wght@600&display=swap&text=WorkArtAbout");

  h2 {
    @apply max-w-max font-medium;
  }

  .parentheses {
    @apply text-gray-300 print:text-gray-600 italic text-sm;
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
