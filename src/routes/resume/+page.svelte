<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<div class="space-y-10">
  <div id="name">
    <h1>
      <a
        href="/resume"
        class="underline-offset-8"
      >
        Saien Govender
      </a>
    </h1>

    <p class="text-minor pt-2">
      Full-stack web developer focused on usability and good design.
    </p>
  </div>

  <div
    id="work"
    class="space-y-4"
  >
    <h2 class="work">Work</h2>

    <div>
      <h3>
        <a
          href="https://sanskara.co.za"
          target="_blank"
          rel="noreferrer external"
        >
          Freelance Web Developer
        </a>
      </h3>

      <p class="text-minor">2020 - current</p>

      <p>SvelteKit sites, focused on usability and good design practices.</p>
    </div>

    <div>
      <h3>
        <a
          href="https://creativecrew.co.za/"
          target="_blank"
          rel="noreferrer external"
        >
          Creative Crew: Marketing Manager
        </a>
      </h3>

      <p class="text-minor">2019 - 2020</p>

      <p>
        Responsibilities included: project management, content development,
        audio & video production, design, website administration, technical
        support, sales.
      </p>
    </div>

    <div>
      <h3>
        <a
          href="https://saitheninja.com"
          target="_blank"
          rel="noreferrer external"
        >
          Saitheninja Photography: Owner
        </a>
      </h3>

      <p class="text-minor">2015 - current</p>

      <p>
        Photography, videography & audio production. Previous events include:
        graduations, birthdays, corporate events, advertising, engagements,
        weddings, educational courses, music videos, podcasts.
      </p>
    </div>
  </div>

  <div
    id="art"
    class="space-y-4"
  >
    <h2 class="art text-5xl">Art</h2>

    <div>
      <h3>Music</h3>

      <p class="text-minor">2010 - current</p>

      <p>
        I'm not good, but I do like to jam out on my trumpet, guitar and piano.
      </p>
    </div>

    <div>
      <h3>Photography</h3>

      <p class="text-minor">2013 - current</p>

      <p>
        I'm pretty good at taking photos. Check out my
        <a
          href="https://www.instagram.com/saitheninja/"
          target="_blank"
          rel="noreferrer external"
        >
          Instagram
        </a>
        or my
        <a
          href="https://saitheninja.com"
          target="_blank"
          rel="noreferrer external"
        >
          website.
        </a>
      </p>
    </div>

    <div>
      <h3>Video Games</h3>

      <p class="text-minor">2019 - current</p>

      <p>
        I like to make games with the
        <a
          href="https://www.godotengine.org"
          target="_blank"
          rel="noreferrer external"
        >
          Godot engine.
        </a>
        Play some games I've made on
        <a
          href="https://saitheninja.itch.io/"
          target="_blank"
          rel="noreferrer external"
        >
          my itch.io page.
        </a>
      </p>
    </div>
  </div>

  <div
    id="about"
    class="space-y-4"
  >
    <h2 class="about">About</h2>

    <p>I live in Johannesburg, South Africa. 🇿🇦</p>

    <p>
      Through many years of experimenting with technology, I've become an expert
      troubleshooter.
    </p>

    <p id="web-buzzwords">
      I use modern IDEs
      <span class="text-minor">(VSCode, NeoVim)</span>

      that have all the bells and whistles
      <span class="text-minor">(ESLint, Stylelint, Prettier)</span>

      & run on Linux
      <span class="text-minor">(Ubuntu, Arch)</span>

      to write apps in HTML, CSS
      <span class="text-minor">(Tailwind CSS, PostCSS, SCSS)</span>

      & JavaScript
      <span class="text-minor">(TypeScript, Node, Svelte, SvelteKit)</span>

      with CI/CD pipelines
      <span class="text-minor">(Git, GitHub Actions)</span>

      to bundle
      <span class="text-minor">(Vite, Rollup, ESBuild)</span>

      & deploy
      <span class="text-minor">
        (Docker, DigitalOcean, Netlify, JAMstack)
      </span>

      good-looking websites.
    </p>
  </div>
</div>

<style lang="postcss">
  /* custom fonts & animations */
  @import url("https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Playfair+Display:wght@600&display=swap&text=WorkArtAbout");

  h2 {
    @apply max-w-max font-medium;
  }

  h3 {
    @apply mb-1;
  }

  .work {
    font-family: monospace;
    font-weight: 700;
    animation-name: slide-right;
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

  @keyframes slide-right {
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
