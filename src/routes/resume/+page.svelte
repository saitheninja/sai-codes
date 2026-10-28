<script lang="ts">
  import { resolve } from "$app/paths";

  import ResumeEntry from "#lib/ResumeEntry.svelte";
  import type { ResumeEntryData } from "#lib/ResumeEntry.svelte";

  const toolsFrontEnd = [
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "SvelteKit",
    "PHP",
    "WordPress",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SCSS",
    "Playwright",
    "Adobe Suite",
    "Figma",
  ];
  const toolsBackEnd = [
    "Node.js",
    "Express",
    "RESTful APIs",
    "WebSockets",
    "Postman",
    "MySQL",
    "Redis",
    "MongoDB",
  ];
  const toolsDevOps = [
    "ESLint",
    "Prettier",
    "Biome",
    "PM2",
    "Docker",
    "Nix",
    "Git",
    "CI/CD (GitHub Actions)",
    "Bitbucket",
    "Jira",
    "DigitalOcean",
    "Linux",
  ];

  const workBullTech: ResumeEntryData = {
    jobTitle: "Full-Stack Developer",
    companyLink: {
      href: "https://github.com/saitheninja/sai-codes",
      rel: "noreferrer external",
      title: "ExAhTech website",
      text: "ExAhTech (formerly BullTech)",
    },
    dateStart: "Jan 2025",
    dateEnd: "present",
  };
  const workDev: ResumeEntryData = {
    jobTitle: "Full-Stack Developer",
    companyLink: {
      href: "https://github.com/saitheninja/sai-codes",
      title: "my code playground",
      text: "SaiTheNinja Studio",
    },
    dateStart: "Nov 2020",
    dateEnd: "Dec 2024",
  };
  const workCCrew: ResumeEntryData = {
    jobTitle: "Marketing Manager",
    companyLink: {
      href: "https://creativecrew.co.za/",
      rel: "noreferrer external",
      title: "Creative Crew website",
      text: "Creative Crew",
    },
    dateStart: "Jul 2019",
    dateEnd: " Oct 2020",
  };

  const artPhoto: ResumeEntryData = {
    companyText: "Photography",
    dateStart: "2013",
    dateEnd: "present",
  };
  const artGames: ResumeEntryData = {
    companyText: "Video Games",
    dateStart: "2019",
    dateEnd: "present",
  };

  const educationUni: ResumeEntryData = {
    jobTitle: "BSc (Eng) Mech Eng",
    companyText: "University of Cape Town",
    dateStart: "2012",
    dateEnd: "2015",
  };
</script>

<svelte:head>
  <title>sai_codes a resume</title>
</svelte:head>

<section id="intro">
  <h1 class="heading-size-1">
    <a
      href={resolve("/resume")}
      title="Sai's resume."
      class="underline-offset-8"
    >
      Saien Govender
    </a>
  </h1>

  <div class="mt-4 space-y-2">
    <p class="heading-size-3 space-x-1">Full-Stack Developer</p>

    <div
      id="contact"
      class="flex flex-col gap-x-4 sm:flex-row"
    >
      <span class="space-x-0.5">
        <span>🇿🇦</span>
        <span>Johannesburg, South Africa</span>
      </span>

      <span class="space-x-0.5">
        <span>✉️</span>
        <span>
          <a
            href="mailto:sai@saitheninja.com"
            title="send an email"
          >
            sai@saitheninja.com
          </a>
        </span>
      </span>

      <span class="space-x-0.5">
        <span>🧑🏾‍💻</span>
        <span>
          <a
            href="https://github.com/saitheninja"
            title="Sai's GitHub profile."
            target="_blank"
            rel="noreferrer external"
          >
            GitHub
          </a>
        </span>
      </span>

      <span class="space-x-0.5">
        <span>🖇️</span>
        <span>
          <a
            href="https://github.com/saitheninja"
            title="Sai's LinkedIn profile."
            target="_blank"
            rel="noreferrer external"
          >
            LinkedIn
          </a>
        </span>
      </span>
    </div>

    <p>
      Adaptable and dependable Full-Stack Developer with over 6 years of
      experience, specialising in the Node.js ecosystem. Proven track record of
      owning projects from initial requirements to production deployment.
      Considerate of wholistic business impact.
    </p>
  </div>
</section>

<!-- <section -->
<!--   id="cover-letter" -->
<!--   class="hidden space-y-2" -->
<!-- > -->
<!--   <p>25 June 2024</p> -->
<!---->
<!--   <p>Dear Hiring Manager,</p> -->
<!---->
<!--   <section id="letter-intro"></section> -->
<!---->
<!--   <section id="letter-body-1"></section> -->
<!---->
<!--   <section id="letter-body-2"></section> -->
<!---->
<!--   <section id="letter-body-3"></section> -->
<!---->
<!--   <section id="letter-body-4"></section> -->
<!---->
<!--   <section -->
<!--     id="letter-outro" -->
<!--     class="mb-2" -->
<!--   ></section> -->
<!---->
<!--   <section id="letter-signoff"> -->
<!--     <p>Sincerely,</p> -->
<!--     <p>Sai</p> -->
<!--   </section> -->
<!-- </section> -->

<section class="mt-6">
  <h2 class="heading-size-2 mb-2">Core Tech</h2>

  <div class="space-y-2">
    <div>
      <h3 class="heading-size-4">Front-End</h3>

      <ul class="mt-1 flex flex-row flex-wrap gap-x-2 gap-y-0.5">
        {#each toolsFrontEnd as tool}
          <li>
            <code>{tool}</code>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <h3 class="heading-size-4">Back-End & Databases</h3>

      <span>
        <ul class="mt-1 flex flex-row flex-wrap gap-x-2 gap-y-0.5">
          {#each toolsBackEnd as tool}
            <li>
              <code>{tool}</code>
            </li>
          {/each}
        </ul>
      </span>
    </div>

    <div>
      <h3 class="heading-size-4">DevOps & Tools</h3>

      <span>
        <ul class="mt-1 flex flex-row flex-wrap gap-x-2 gap-y-0.5">
          {#each toolsDevOps as tool}
            <li>
              <code>{tool}</code>
            </li>
          {/each}
        </ul>
      </span>
    </div>
  </div>
</section>

<section
  id="work"
  class="mt-8 space-y-6"
>
  <h2 class="work-heading heading-size-2 -mb-3 font-mono">Work</h2>

  <ResumeEntry {...workBullTech}>
    {#snippet description()}
      <div>
        <p>Development for the telephony industry.</p>

        <ul class="list-disc pl-5">
          <li>
            Implemented file-sharing by AI bot. The AI can determine if it has
            any files relevant to a customer's conversation and share the file
            automatically.
          </li>

          <li>Implemented AI integration for Speech-To-Text.</li>

          <!-- <li>Develop platforms used in 27 countries across 5 continents.</li> -->
          <!-- <li>Manage databases that handle 1 million+ new records per day.</li> -->
        </ul>
      </div>
    {/snippet}
  </ResumeEntry>

  <ResumeEntry {...workDev}>
    {#snippet description()}
      <div>
        <p>Development & management of e-commerce websites.</p>

        <ul class="list-disc pl-5">
          <li>
            Integrated local payment providers to accept credit card payments.
          </li>

          <li>
            <a
              href="https://sanskara.co.za/store/build-planner/"
              title="Sanskara wedding planner."
              target="_blank"
              rel="noreferrer external"
            >
              Developed an app to plan traditional Indian weddings
            </a>. Full mobile support. Installable as a Progressive Web App, for
            push notifications. Free-form whiteboard with image upload. Cloud
            sync across desktop and mobile. 10+ weddings successfully planned.
          </li>
        </ul>
      </div>
    {/snippet}
  </ResumeEntry>

  <ResumeEntry {...workCCrew}>
    {#snippet description()}
      <div>
        <p>Learn any new technology needed to handle customer requests.</p>

        <ul class="list-disc pl-5">
          <li>
            Developed an online education platform for the Health Professions
            Council of South Africa. 200+ doctors earned 600+ Continuing
            Education Units in the first 3 months.
          </li>
        </ul>
      </div>
    {/snippet}
  </ResumeEntry>
</section>

<section
  id="key-projects"
  class="mt-8 space-y-4"
>
  <h2 class="heading-size-2">Key Projects</h2>

  <div>
    <h3 class="heading-size-3">Refactor BullTech Development Practices</h3>

    <ul class="mt-2 list-disc pl-5">
      <li>Introduced TypeScript to the other devs.</li>
      <li>Added linting and formatting to all active projects.</li>
      <li>
        Created Git repositories and documentation for multiple older codebases.
      </li>
      <li>
        Found and fixed 100s of bugs, increased stability and accelerated
        development speed.
      </li>
    </ul>
  </div>
</section>

<section
  id="art"
  class="mt-8 space-y-4"
>
  <h2 class="heading-size-2 art-heading font-normal">Art</h2>

  <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
    <ResumeEntry {...artGames}>
      {#snippet description()}
        <div>
          <p>
            <a
              href="https://saitheninja.itch.io/"
              title="My video games."
              target="_blank"
              rel="noreferrer external"
            >
              Play some games
            </a>, and browse
            <a
              href="https://github.com/saitheninja/Shenanijam-2019"
              title="GitHub repo for Space Janitor game."
              target="_blank"
              rel="noreferrer external"
            >
              the code
            </a>.
          </p>
        </div>
      {/snippet}
    </ResumeEntry>

    <ResumeEntry {...artPhoto}>
      {#snippet description()}
        <div>
          <p>
            Look at
            <a
              href="https://saitheninja.com"
              title="My photography portfolio site."
              target="_blank"
              rel="noreferrer external"
            >
              my portfolio
            </a>.
          </p>
        </div>
      {/snippet}
    </ResumeEntry>
  </div>
</section>

<section
  id="education"
  class="mt-8 space-y-6"
>
  <h2 class="heading-size-2 education-heading -mb-3 font-normal">Education</h2>

  <ResumeEntry {...educationUni}>
    {#snippet description()}
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Rhodes_Must_Fall"
            title="#RhodesMustFall protests."
            target="_blank"
            rel="noreferrer external"
            class="no-underline"
          >
            I dropped out
          </a>.
        </p>
      </div>
    {/snippet}
  </ResumeEntry>
</section>

<style lang="postcss">
  /* custom fonts & animations */

  @font-face {
    font-display: swap;
    font-family: "Fleur De Leah";
    font-style: normal;
    font-weight: 400;
    size-adjust: 125%;
    src:
      local("Fleur De Leah"),
      url("/font-fleur-de-leah/fleur-de-leah-latin-400-normal.woff2")
        format(woff2),
      url("/font-fleur-de-leah/fleur-de-leah-latin-400-normal.woff")
        format(woff),
      url("/font-fleur-de-leah/fleur-de-leah-latin-400-normal.ttf") format(ttf);
    /* "Art", 41=A, 72=r, 74=t */
    unicode-range: U+0041, U+0072, U+0074;
  }

  @font-face {
    font-display: swap;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    src:
      local("Playfair Display"),
      url("/font-playfair-display/playfair-display-latin-400-normal.woff2")
        format(woff2),
      url("/font-playfair-display/playfair-display-latin-400-normal.woff")
        format(woff),
      url("/font-playfair-display/playfair-display-latin-400-normal.ttf")
        format(ttf);
    /* "Education", 41=E, 64=d, 75=u, 63=c, 61=a, 74=t, 69=i, 6F=o, =n */
    unicode-range:
      U+0045, U+0064, U+0075, U+0063, U+0061, U+0074, U+0069, U+006F, U+006E;
  }

  :root {
    --anim-duration: 10s;
  }

  /* make animations move around correct point */
  h2 {
    @apply max-w-max;
  }

  .work-heading {
    animation-name: slide-right;
    animation-duration: var(--anim-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .art-heading {
    font-family: "Fleur De Leah", cursive;

    animation-name: wiggle;
    animation-duration: var(--anim-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .education-heading {
    font-family: "Playfair Display", serif;

    animation-name: pulse;
    animation-duration: var(--anim-duration);
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }
</style>
