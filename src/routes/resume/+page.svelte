<script lang="ts">
  import ResumeEntry from "$lib/ResumeEntry.svelte";

  let workDev = {
    hText: "Web Developer",
    subhLink: {
      href: "https://github.com/saitheninja/sai.codes/tree/main/src/routes/garden",
      title: "my code garden",
      text: "SaiTheNinja Studio",
    },
    yearsStart: "2020",
    yearsEnd: "present",
    tools: [
      "TypeScript",
      "Node",
      "SvelteKit",

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
    tools: ["Adobe Suite", "Darktable", "DaVinci Resolve", "Linux"],
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
  class="mb-6 max-w-max"
>
  <h1 class="heading-size-1 font-sans">
    <a
      href="https://github.com/saitheninja/sai.codes/tree/main/src/routes/resume"
      title="my resume"
      class="underline-offset-8"
    >
      Saien Govender
    </a>
  </h1>

  <div
    class="text-minor mt-4 grid max-w-max grid-cols-1 gap-3 sm:mt-3 sm:grid-cols-2"
  >
    <div
      id="contact"
      class="flex flex-col"
    >
      <span class="space-x-1">
        <span class="not-italic">🌍</span>
        <span>
          <a
            href="https://github.com/saitheninja/sai.codes"
            title="I code things"
          >
            sai.codes
          </a>
        </span>
      </span>

      <span class="space-x-1">
        <span class="not-italic">✉️</span>
        <span>
          <a
            href="mailto:sai@saitheninja.com"
            title="send an email"
          >
            sai@saitheninja.com
          </a>
        </span>
      </span>

      <span class="space-x-1">
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
      </span>
    </div>

    <div
      id="about"
      class="flex flex-col"
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
        <span class="not-italic">🇿🇦</span>
        <span>Johannesburg, South Africa</span>
      </span>
    </div>
  </div>
</section>

<section
  id="cover-letter"
  class="hidden space-y-2"
>
  <p>25 June 2024</p>

  <p>Dear Hiring Manager,</p>

  <section id="letter-intro"></section>

  <section id="letter-body-1"></section>

  <section id="letter-body-2"></section>

  <section id="letter-body-3"></section>

  <section id="letter-body-3"></section>

  <section
    id="letter-outro"
    class="mb-2"
  ></section>

  <section id="letter-signoff">
    <p>Sincerely,</p>
    <p>Sai</p>
  </section>
</section>

<div class="">
  <section
    id="work"
    class="mb-8 space-y-6"
  >
    <h2 class="work heading-size-2 -mb-3 font-mono">Work</h2>

    <ResumeEntry {...workDev}>
      <div slot="description">
        <p>
          Development & management of e-commerce websites. Major projects
          include:
        </p>

        <ul class="list-disc pl-5">
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
      </div>
    </ResumeEntry>

    <ResumeEntry {...workCCrew}>
      <div slot="description">
        <p>Whatever was needed at the time. Major projects include:</p>

        <ul class="list-disc pl-5">
          <li>
            Developing an online platform for Continuous Professional
            Development for the Health Professions Council of South Africa, with
            200+ users.
          </li>

          <li>
            Management of on-site workstations, a digital assets server &
            networking.
          </li>
        </ul>
      </div>
    </ResumeEntry>

    <ResumeEntry {...workPhoto}>
      <div slot="description">
        <p>
          Photography, videography & audio production. Major projects include:
        </p>

        <ul class="list-disc pl-5">
          <li>Photography for PyConZA 2017, with 300+ attendees.</li>

          <li>
            Teaching classes for the City of Cape Town's Youth Development
            Programme, with ~20 students a class.
          </li>

          <!-- <li>
            Multi-day shoots of marketing photos & videos for the
            University of Cape Town International Academic Programmes Office.
          </li> -->
        </ul>
      </div>
    </ResumeEntry>
  </section>

  <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2">
    <section
      id="art"
      class="space-y-6"
    >
      <h2 class="heading-size-2 art -mb-3 font-normal">Art</h2>

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
      class="ml-5 space-y-6"
    >
      <h2 class="heading-size-2 education -mb-3 font-normal">Education</h2>

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
    unicode-range: U+0045, U+0064, U+0075, U+0063, U+0061, U+0074, U+0069,
      U+006F, U+006E;
  }

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

    animation-name: wiggle;
    animation-duration: var(--anim-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .education {
    font-family: "Playfair Display", serif;

    animation-name: pulse;
    animation-duration: var(--anim-duration);
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
  }
</style>
