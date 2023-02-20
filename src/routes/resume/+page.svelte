<script lang="ts">
  import ResumeEntry from "$lib/ResumeEntry.svelte";

  let workDev = {
    heading: {
      href: "/",
      hrefTitle: "my code garden",
      companyName: "Freelance Web Developer",
    },
    years: "2020 - current",
    tools: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "PostCSS",
      "SCSS",

      "JavaScript",
      "TypeScript",
      "Node",
      "Svelte",
      "SvelteKit",

      "Git",
      "GitHub Actions",
      "Linux",
      "Docker",
      "JAMstack",
    ],
  };
  let workCCrew = {
    heading: {
      href: "https://creativecrew.co.za/",
      hrefRel: "noreferrer external",
      hrefTitle: "Creative Crew website",
      companyName: "Creative Crew",
      jobTitle: "Marketing Manager",
    },
    years: "2019 - 2020",
    tools: [
      "WordPress",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Linux",

      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
    ],
  };
  let workPhoto = {
    heading: {
      href: "https://saitheninja.com",
      hrefRel: "noreferrer external",
      hrefTitle: "my photography portfolio site",
      companyName: "Saitheninja Photography",
    },
    years: "2015 - current",
    tools: [
      "Linux",

      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
    ],
  };
</script>

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

    <ResumeEntry entry={workDev}>
      <div slot="description">
        <p>
          Look at
          <a
            href="https://sanskara.co.za"
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
    </ResumeEntry>

    <ResumeEntry entry={workCCrew}>
      <div slot="description">
        <p>Anything that was needed at the time.</p>

        <p class="italic">
          Responsibilities included: website design & development, server
          administration, technical support, content development, audio & video
          production, sales.
        </p>
      </div>
    </ResumeEntry>

    <ResumeEntry entry={workPhoto}>
      <div slot="description">
        <p>Photography, videography & audio production.</p>

        <p class="pt-1 italic">
          Previous events include: birthdays, graduations, engagements,
          weddings, podcasts, music videos, training courses, conferences.
        </p>
      </div>
    </ResumeEntry>
  </section>

  <section
    id="art"
    class="space-y-4"
  >
    <h2 class="art">Art</h2>

    <div>
      <h3>Photography</h3>

      <p class="text-minor">2013 - current</p>

      <p class="py-1">
        Check out my
        <a
          href="https://saitheninja.com"
          title="my photography portfolio site"
          target="_blank"
          rel="noreferrer external"
        >
          portfolio
        </a>
        or my
        <a
          href="https://www.instagram.com/saitheninja/"
          title="my instagram page"
          target="_blank"
          rel="noreferrer external"
          class="-mr-1"
        >
          Instagram
        </a>.
      </p>
    </div>

    <div>
      <h3>Video Games</h3>

      <p class="text-minor">2019 - current</p>

      <div class="py-1">
        <p>
          Play some of my games on
          <a
            href="https://saitheninja.itch.io/"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            my itch.io page
          </a>.
        </p>

        <p>
          Look at the code on
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
      <span class="text-minor">(Docker, DigitalOcean, Netlify, JAMstack)</span>

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

  .work {
    font-family: monospace;
    font-weight: 700;
    font-size: 2.5rem;
    animation-name: slide-right;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .art {
    font-family: "Fleur De Leah", cursive;
    font-size: 3rem;
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
