<script lang="ts">
  import { resolve } from "$app/paths";

  import ResumeEntry from "#lib/ResumeEntry.svelte";
  import type { ResumeEntryData } from "#lib/ResumeEntry.svelte";

  let workBullTech: ResumeEntryData = {
    hText: "Full-Stack Developer",
    subhLink: {
      href: "https://github.com/saitheninja/sai-codes",
      rel: "noreferrer external",
      title: "ExAhTech website",
      text: "ExAhTech (formerly BullTech)",
    },
    dateStart: "Jan 2025",
    dateEnd: "present",
    tools: [
      "TypeScript",
      "Node.js",

      "React",
      "NextJS",

      "Angular",

      "PHP",

      "Tailwind",

      "Express",
      "WebSocket",

      "MySQL",
      "MongoDB",

      "Git",

      "Linux",
    ],
  };
  let workDev: ResumeEntryData = {
    hText: "Full-Stack Developer",
    subhLink: {
      href: "https://github.com/saitheninja/sai-codes",
      title: "my code playground",
      text: "SaiTheNinja Studio",
    },
    dateStart: "Nov 2020",
    dateEnd: "Dec 2024",
    tools: [
      "TypeScript",
      "Node.js",

      "SvelteKit",

      "Tailwind",

      "PostgreSQL",

      "Playwright",

      "Docker",
      "Nix",

      "Git",

      "Linux",

      "Adobe Suite",
    ],
  };
  let workCCrew: ResumeEntryData = {
    hText: "Marketing Manager",
    subhLink: {
      href: "https://creativecrew.co.za/",
      rel: "noreferrer external",
      title: "Creative Crew website",
      text: "Creative Crew",
    },
    dateStart: "Jul 2019",
    dateEnd: " Oct 2020",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",

      "PHP",
      "WordPress",

      "MySQL",

      "Docker",

      "Git",

      "Linux",

      "Adobe Suite",
    ],
  };
  // let workPhoto: ResumeEntryData = {
  //   hText: "Photographer & Videographer",
  //   subhLink: {
  //     href: "https://saitheninja.com",
  //     rel: "noreferrer external",
  //     title: "my photography portfolio site",
  //     text: "SaiTheNinja Photography",
  //   },
  //   dateStart: "2015",
  //   dateEnd: "2019",
  //   tools: ["Adobe Suite", "Darktable", "DaVinci Resolve", "Linux"],
  // };

  let artPhoto: ResumeEntryData = {
    hText: "Photography",
    dateStart: "2013",
    dateEnd: "present",
  };
  let artGames: ResumeEntryData = {
    hText: "Video Games",
    dateStart: "2019",
    dateEnd: "present",
  };

  let educationUni: ResumeEntryData = {
    hText: "BSc (Eng) Mech Eng",
    subhText: "University of Cape Town",
    dateStart: "2012",
    dateEnd: "2015",
  };
</script>

<svelte:head>
  <title>sai_codes a resume</title>
</svelte:head>

<section
  id="name"
  class="mb-7 max-w-max"
>
  <h1 class="heading-size-1 font-mono decoration-double">
    <a
      href={resolve("/resume")}
      title="Sai's resume"
      class="underline-offset-8"
    >
      Saien Govender
    </a>
  </h1>

  <div class="text-minor mt-4 flex flex-col justify-between gap-3 sm:flex-row">
    <div
      id="about"
      class="max-w-max"
    >
      <p class="space-x-1">
        <span class="not-italic">📚</span>
        <span>Full-Stack Developer</span>
      </p>

      <p class="space-x-1">
        <span class="not-italic">🇿🇦</span>
        <span>Johannesburg, South Africa</span>
      </p>

      <p class="space-x-1">
        <span class="not-italic">🧔🏾</span>
        <span>he/him</span>
      </p>
    </div>

    <div
      id="contact"
      class="max-w-max"
    >
      <p class="space-x-1">
        <span class="not-italic">✉️</span>
        <span>
          <a
            href="mailto:sai@saitheninja.com"
            title="send an email"
          >
            sai@saitheninja.com
          </a>
        </span>
      </p>

      <p class="space-x-1">
        <span class="not-italic">🧑🏾‍💻</span>
        <span>
          <a
            href="https://github.com/saitheninja"
            title="my github profile"
            target="_blank"
            rel="noreferrer external"
          >
            github.com/saitheninja
          </a>
        </span>
      </p>
    </div>
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

<section
  id="work"
  class="space-y-6"
>
  <h2 class="work-heading heading-size-2 -mb-3 font-mono">Work</h2>

  <ResumeEntry {...workBullTech}>
    {#snippet description()}
      <div>
        <p>Development for the telephony industry.</p>

        <ul class="list-disc pl-5">
          <li>
            Development on platforms used in 27 countries across 5 continents.
          </li>
          <li>Manage databases that handle 1 million+ new records per day.</li>
        </ul>
      </div>
    {/snippet}
  </ResumeEntry>

  <ResumeEntry {...workDev}>
    {#snippet description()}
      <div>
        <p>Development & management of e-commerce websites.</p>

        <ul class="list-disc pl-5">
          <li>Integrated local payment providers.</li>

          <li>
            <a
              href="https://sanskara.co.za/store/build-planner/"
              title="Sanskara wedding planner."
              target="_blank"
              rel="noreferrer external"
            >
              Developed an app for planning traditional weddings
            </a>.
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
            Education Units.
          </li>
        </ul>
      </div>
    {/snippet}
  </ResumeEntry>

  <!-- <ResumeEntry {...workPhoto}> -->
  <!--   {#snippet description()} -->
  <!--     <div> -->
  <!--       <p> -->
  <!--         Photography, videography & audio production. Major projects include: -->
  <!--       </p> -->
  <!---->
  <!--       <ul class="list-disc pl-5"> -->
  <!--         <li>Photography for PyConZA 2017, with 300+ attendees.</li> -->
  <!---->
  <!--         <li> -->
  <!--           Teaching classes for the City of Cape Town's Youth Development -->
  <!--           Programme, with ~20 students a class. -->
  <!--         </li> -->
  <!---->
  <!--         <li> -->
  <!--           Multi-day shoots of marketing photos & videos for the University -->
  <!--           of Cape Town International Academic Programmes Office. -->
  <!--         </li> -->
  <!--       </ul> -->
  <!--     </div> -->
  <!--   {/snippet} -->
  <!-- </ResumeEntry> -->
</section>

<div class="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2">
  <section
    id="art"
    class="space-y-6"
  >
    <h2 class="heading-size-2 art-heading -mb-3 font-normal">Art</h2>

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
              Play games
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
  </section>

  <section
    id="education"
    class="space-y-6"
  >
    <h2 class="heading-size-2 education-heading -mb-3 font-normal">
      Education
    </h2>

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
</div>

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
