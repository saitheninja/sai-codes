<script lang="ts">
  import ResumeEntry from "$lib/ResumeEntry.svelte";

  let workDev = {
    hText: "Web Developer",
    subhLink: {
      href: "/garden",
      title: "my code garden",
      text: "SaiTheNinja Studio",
    },
    yearsStart: "2020",
    yearsEnd: "present",
    tools: [
      "SvelteKit",
      "TypeScript",

      "Tailwind",

      "Postgres",

      "Docker",
      "Nix",
      "Linux",
    ],
  };
  let workCCrew = {
    hText: "Marketing Manager",
    subhLink: {
      href: "https://creativecrew.co.za/",
      rel: "noreferrer external",
      title: "Creative Crew website",
      text: "Creative Crew",
    },
    yearsStart: "2019",
    yearsEnd: "2020",
    tools: [
      "Adobe Suite",

      "HTML",
      "CSS",
      "JavaScript",

      "PHP",
      "WordPress",

      "MySQL",

      "Linux",
    ],
  };
  let workPhoto = {
    hText: "Photographer & Videographer",
    subhLink: {
      href: "https://saitheninja.com",
      rel: "noreferrer external",
      title: "my photography portfolio site",
      text: "SaiTheNinja Photography",
    },
    yearsStart: "2015",
    yearsEnd: "2019",
    tools: ["Adobe Suite", "DaVinci Resolve", "Darktable", "Linux"],
  };

  let artPhoto = {
    hText: "Photography",
    yearsStart: "2013",
    yearsEnd: "present",
  };
  let artGames = {
    hText: "Video Games",
    yearsStart: "2019",
    yearsEnd: "present",
  };

  let educationUni = {
    hText: "BSc (Eng) Mech Eng",
    subhText: "University of Cape Town",
    yearsStart: "2012",
    yearsEnd: "2015",
  };
</script>

<svelte:head>
  <title>sai.codes a resume</title>
</svelte:head>

<section
  id="name"
  class="mb-10"
>
  <h1 class="heading-size-1 font-sans">
    <a
      href="/resume"
      title="my resume"
      class="underline-offset-8"
    >
      Saien Govender
    </a>
  </h1>

  <div class="text-minor mt-4 grid max-w-max grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      id="about"
      class="flex max-w-max flex-col"
    >
      <span class="space-x-1">
        <span class="not-italic">🧔🏾</span>
        <span>he/him</span>
      </span>

      <span class="space-x-1">
        <span class="not-italic">📚</span>
        <span>full-stack web developer</span>
      </span>

      <span class="space-x-1">
        <span class="not-italic">🐧</span>
        <span>open source enthusiast</span>
      </span>
    </div>

    <div
      id="contact"
      class="flex max-w-max flex-col"
    >
      <span class="space-x-1">
        <span class="not-italic">🌍</span>
        <span
          ><a
            href="/"
            title="I code things"
          >
            sai.codes
          </a></span
        >
      </span>

      <span class="space-x-1">
        <span class="not-italic">✉️</span>
        <span
          ><a
            href="mailto:sai@saitheninja.com"
            title="send an email"
          >
            sai@saitheninja.com
          </a></span
        >
      </span>

      <span class="space-x-1">
        <span class="not-italic">🇿🇦</span>
        <span>Johannesburg, South Africa</span>
      </span>
    </div>
  </div>
</section>

<section
  id="work"
  class="mb-12 space-y-6"
>
  <h2 class="work font-mono text-5xl font-bold">Work</h2>

  <ResumeEntry {...workDev}>
    <div slot="description">
      <p>
        Development & management of e-commerce sites. Major projects include:
      </p>

      <ul class="list-disc pl-4">
        <li>
          <a
            href="https://sanskara.co.za/store/build-planner/"
            title="Sanskara wedding planner"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            An app for planning traditional weddings
          </a>.
        </li>
      </ul>

      <p class="mt-1">
        Look at my open source contributions on
        <a
          href="https://github.com/saitheninja/"
          title="my GitHub profile"
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
      <p>Whatever was needed at the time. Major projects include:</p>

      <ul class="list-disc pl-4">
        <li>
          Development & management of online Continuous Professional Development
          platform for the Health Professions Council of South Africa.
        </li>

        <li>
          Management of on-site workstations, digital assets & networking.
        </li>
      </ul>
    </div>
  </ResumeEntry>

  <ResumeEntry {...workPhoto}>
    <div slot="description">
      <p>
        Photography, videography & audio production. Major projects include:
      </p>

      <ul class="list-disc pl-4">
        <li>
          Producing marketing videos for the University of Cape Town
          International Academic Programmes Office.
        </li>

        <li>Teaching youth development courses for the City of Cape Town.</li>

        <li>Photography for PyConZA.</li>
      </ul>
    </div>
  </ResumeEntry>
</section>

<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2">
  <section
    id="art"
    class="space-y-6"
  >
    <h2 class="heading-size-2 art">Art</h2>

    <ResumeEntry {...artPhoto}>
      <div slot="description">
        <p>
          Look at
          <a
            href="https://saitheninja.com"
            title="my photography portfolio site"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            my portfolio
          </a>.
        </p>
      </div>
    </ResumeEntry>

    <ResumeEntry {...artGames}>
      <div slot="description">
        <p>
          <a
            href="https://saitheninja.itch.io/"
            title="my video games"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            Play some games
          </a>, and browse
          <a
            href="https://github.com/saitheninja/Shenanijam-2019"
            title="GitHub repo for a game"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            the code
          </a>.
        </p>
      </div>
    </ResumeEntry>
  </section>

  <section
    id="education"
    class="sm:mx-auto max-w-max space-y-6"
  >
    <h2 class="heading-size-2 education">Education</h2>

    <ResumeEntry {...educationUni}>
      <div slot="description">
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Rhodes_Must_Fall"
            title="#RhodesMustFall protests"
            target="_blank"
            rel="noreferrer external"
            class="-mr-1"
          >
            I dropped out
          </a>.
        </p>
      </div>
    </ResumeEntry>
  </section>
</div>

<style lang="postcss">
  /* custom fonts & animations */

  @import url("https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Playfair+Display:wght@600&display=swap&text=ArtEducation");

  :root {
    --anim-duration: 10s;
  }

  /* make animations move around correct point */
  h2 {
    @apply max-w-max;
  }

  .work {
    animation-name: slide-right;
    animation-duration: var(--anim-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .art {
    font-family: "Fleur De Leah", cursive;
    font-weight: 400;
    font-size: 3.5rem;
    animation-name: wiggle;
    animation-duration: var(--anim-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .education {
    font-family: "Playfair Display", serif;
    font-weight: 400;
    font-size: 2.5rem;
    animation-name: pulse;
    animation-duration: var(--anim-duration);
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }
</style>
