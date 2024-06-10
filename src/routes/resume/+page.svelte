<script lang="ts">
  import ResumeEntry from "$lib/ResumeEntry.svelte";

  let workDev = {
    hLink: {
      href: "/",
      title: "my code garden",
      text: "SaiTheNinja Studio",
    },
    subhText: "Freelancer",
    years: "2020 - current",
    tools: [
      "HTML",
      "CSS",
      "Tailwind",

      "JavaScript",
      "TypeScript",
      "SvelteKit",

      "Playwright",

      "Postgres",

      "Git",
      "Linux",
      "Docker",
      "Nix",
    ],
  };
  let workCCrew = {
    hLink: {
      href: "https://creativecrew.co.za/",
      rel: "noreferrer external",
      title: "Creative Crew website",
      text: "Creative Crew",
    },
    subhText: "Marketing Manager",
    years: "2019 - 2020",
    tools: [
      "HTML",
      "CSS",

      "PHP",
      "WordPress",

      "JavaScript",

      "Linux",

      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
    ],
  };
  let workPhoto = {
    hLink: {
      href: "https://saitheninja.com",
      rel: "noreferrer external",
      title: "my photography portfolio site",
      text: "SaiTheNinja Photography",
    },
    subhText: "Freelancer",
    years: "2015 - 2019",
    tools: [
      "Linux",

      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
    ],
  };

  let artPhoto = {
    hText: "Photography",
    years: "2013 - current",
  };
  let artGames = {
    hText: "Video Games",
    years: "2019 - current",
  };

  let educationUni = {
    hLink: {
      href: "https://en.wikipedia.org/wiki/Rhodes_Must_Fall",
      rel: "noreferrer external",
      title: "#RhodesMustFall protests",
      text: "University of Cape Town",
    },
    subhText: "BSc (Eng) Mechanical Engineering",
    years: "2012 - 2015",
  };
</script>

<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<div class="space-y-12">
  <section id="name">
    <h1 class="heading-size-1 name">
      <a
        href="/resume"
        title="my resume"
        class="underline-offset-8"
      >
        Saien Govender
      </a>
    </h1>

    <div
      id="contact"
      class="text-minor my-2 space-x-2"
    >
      <span><a href="/">sai.codes</a></span>
      <span><a href="mailto:sai@saitheninja.com">sai@saitheninja.com</a></span>
    </div>

    <div class="mt-2 text-sm">
      <div class="mb-1 space-x-2">
        <span>Full-stack developer 📚</span>
        <span>Expert troubleshooter 🎯</span>
        <span>Open source enthusiast 🐧</span>
      </div>
    </div>

    <div class="text-sm">
      <span>Johannesburg, South Africa 🇿🇦</span>
    </div>
  </section>

  <section
    id="work"
    class="space-y-6"
  >
    <h2 class="heading-size-2 work">Work</h2>

    <ResumeEntry {...workDev}>
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

    <ResumeEntry {...workCCrew}>
      <div slot="description">
        <p>Anything that was needed at the time.</p>

        <p class="pt-1 italic">
          Responsibilities included: website design & development, server
          administration, technical support, content development, audio & video
          production, sales.
        </p>
      </div>
    </ResumeEntry>

    <ResumeEntry {...workPhoto}>
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
    class="space-y-6"
  >
    <h2 class="heading-size-2 art">Art</h2>

    <ResumeEntry {...artPhoto}>
      <div slot="description">
        <p>
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
    </ResumeEntry>

    <ResumeEntry {...artGames}>
      <div slot="description">
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
    </ResumeEntry>
  </section>

  <section
    id="education"
    class="space-y-6"
  >
    <h2 class="heading-size-2 education">Education</h2>

    <ResumeEntry {...educationUni}>
      <div slot="description">
        <p>I dropped out.</p>
      </div>
    </ResumeEntry>
  </section>
</div>

<style lang="postcss">
  /* custom fonts & animations */

  @import url("https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Playfair+Display:wght@600&display=swap&text=WorkArtEducation");

  :root {
    --animDuration: 10s;
  }

  h2 {
    @apply max-w-max font-medium;
  }

  .work {
    font-family: monospace;
    font-weight: 700;
    font-size: 2.5rem;
    animation-name: slide-right;
    animation-duration: var(--animDuration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .art {
    font-family: "Fleur De Leah", cursive;
    font-size: 3rem;
    animation-name: wiggle;
    animation-duration: var(--animDuration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .education {
    font-family: "Playfair Display", serif;
    font-size: 2.25rem;
    animation-name: pulse;
    animation-duration: var(--animDuration);
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
