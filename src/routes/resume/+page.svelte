<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<div class="space-y-10">
  <section id="name">
    <h1>
      <a
        href="/resume"
        title="my resume page"
        class="underline-offset-8"
      >
        Saien Govender
      </a>
    </h1>

    <p class="text-minor pt-2">
      Full-stack web developer focused on good design.
    </p>
  </section>

  <section
    id="work"
    class="space-y-4"
  >
    <h2 class="work">Work</h2>

    <div>
      <h3>Freelance Web Developer</h3>
      <p class="text-minor">2020 - current</p>

      <div class="py-1">
        <p>
          Look at
          <a
            href="https://sanskara.co.za"
            title="a client website"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            a client's website
          </a>.
        </p>

        <p>
          Also, look at
          <a
            href="https://github.com/saitheninja/"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            my GitHub profile
          </a>.
        </p>
      </div>
    </div>

    <div>
      <h3>
        <a
          href="https://creativecrew.co.za/"
          target="_blank"
          rel="noreferrer external"
          class="-mr-1"
        >
          Creative Crew
        </a>
        : Marketing Manager
      </h3>

      <p class="text-minor">2019 - 2020</p>

      <div class="py-1">
        <p>Anything that was needed at the time.</p>

        <p class="pt-1 italic">
          Responsibilities included: project management, content development,
          audio & video production, sales, website design, server
          administration, technical support.
        </p>
      </div>
    </div>

    <div>
      <h3>
        <a
          href="https://saitheninja.com"
          target="_blank"
          rel="noreferrer external"
          class="-mr-1"
        >
          Saitheninja Photography
        </a>
        : Owner
      </h3>

      <p class="text-minor">2015 - current</p>

      <div class="py-1">
        <p>Photography, videography & audio production.</p>

        <p class="pt-1 italic">
          Previous events include: birthdays, graduations, engagements,
          weddings, music videos, podcasts, training courses, conferences.
        </p>
      </div>
    </div>
  </section>

  <section
    id="art"
    class="space-y-4"
  >
    <h2 class="art text-5xl">Art</h2>

    <div>
      <h3>Photography</h3>

      <p class="text-minor">2013 - current</p>

      <p class="py-1">
        I'm pretty good. Check out my
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
          title="photography website"
          target="_blank"
          rel="noreferrer external"
          class="-mr-1"
        >
          portfolio
        </a>.
      </p>
    </div>

    <div>
      <h3>Video Games</h3>

      <p class="text-minor">2019 - current</p>

      <p class="py-1">
        I like to make games. Play some games I've made on
        <a
          href="https://saitheninja.itch.io/"
          target="_blank"
          rel="noreferrer external"
          class="-mr-1"
        >
          my itch.io page
        </a>, and look at the code on
        <a
          href="https://github.com/saitheninja/"
          target="_blank"
          rel="noreferrer external"
          class="-mr-1"
        >
          GitHub
        </a>.
      </p>
    </div>
  </section>

  <section
    id="about"
    class="space-y-4"
  >
    <h2 class="about">About</h2>

    <p>I live in Johannesburg, South Africa. 🇿🇦</p>

    <p>
      I enjoy making websites that are intuitive to use, robust, and easy to
      maintain.
    </p>

    <p id="buzzwords">
      I use modern IDEs
      <span class="text-minor">(VSCode, NeoVim)</span>

      that have all the bells and whistles
      <span class="text-minor">(ESLint, Prettier, Stylelint)</span>

      & run on Linux
      <span class="text-minor">(Ubuntu, Arch, Nix)</span>

      to write apps in HTML, CSS
      <span class="text-minor">(Tailwind CSS, PostCSS, SCSS)</span>

      & JavaScript
      <span class="text-minor">(TypeScript, Node, Svelte, SvelteKit)</span>

      with SCM & CI/CD
      <span class="text-minor">(Git, GitHub Actions)</span>

      to bundle
      <span class="text-minor">(Vite, Rollup, ESBuild)</span>

      & deploy
      <span class="text-minor">
        (Docker, DigitalOcean, Netlify, JAMstack)
      </span>

      good websites.
    </p>
  </section>
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
