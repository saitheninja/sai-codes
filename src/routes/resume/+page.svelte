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
      "Node",

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
  class="mb-6 max-w-max"
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
            href="/"
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
  class="my-8 space-y-2"
>
  <p>21 June 2024</p>

  <p>Dear Hiring Manager,</p>

  <section id="letter-intro">
    <p>I am applying for the Web Developer role at Canonical.</p>

    <p>
      In 2002 the Shuttleworth Foundation launched an educational TV show called

      <a
        href="https://www.shuttleworthfoundation.org/projects/hip2b%C2%B2"
        title="HIP2B² Shuttleworth Foundation"
        target="_blank"
        rel="noreferrer external"
      >
        HIP2B²
      </a>
      (Hip to be Square), which I used to watch religiously. In 2005 I was 11 years
      old when I won a subscription to Popular Mechanics Magazine from the show.
      In 2018 I started running Ubuntu servers in production, and switched to using
      Linux full-time on my main machine.
    </p>

    <p>
      As you can see, Mark Shuttleworth has been helping me out for more than 20
      years. Now that I have the skills, I would appreciate the opportunity to
      contribute to the mission of great open-source software that helps people.
    </p>
  </section>

  <section id="letter-body">
    <p>
      I am neurodivergent, so I know what it's like to need help. Also, I have
      volunteered at many philanthropic organisations in life, so I know what it
      means to help people. Blockchain and AI companies aren't helping people.
      Ubuntu and Canonical are helping people. I know this is true because they
      have helped me.
    </p>

    <p>
      My neurodivergence means that I need a few accommodations. With those
      accommodations I can be extremely effective. My family did not believe
      that I needed any accommodations. My high school refused to make any
      accommodations. My university lecturers were actively offended by requests
      for accommodation. Previous work places allowed me accommodations at
      first, and then took them away. Open source is the space that allows
      people like me the flexibility they need to be productive.
    </p>
  </section>

  <section
    id="letter-outro"
    class="mb-2"
  >
    <p>
      Do you want to talk about web tech? JavaScript or TypeScript or Python or
      Ruby or Flutter or Elm or Gleam? React or Angular or Vue or Svelte? Node
      or Deno or Bun? Unit testing or integration testing or end-to-end testing?
      Jest or Vitest or Cypress or Playwright? Chrome (and Chromium) or Firefox
      or Safari? Docker or Nix? Emacs or (Neo)Vim or VSCode (and VSCodium)?
    </p>

    <p>
      Do you want to talk about desktop environments? GNOME or Plasma or XFCE or
      Cosmic? Floating windows or tiling? The successes of Pipewire and the
      failures of Wayland?
    </p>

    <p>
      Do you want to talk about lower level programming languages? Functional or
      imperative? Memory being garbage collected or manually managed? LISP-like
      or ALGOL-like? C or C++ or Rust or Zig?
    </p>

    <p>
      Do you want to talk about hardware? Build a desktop or buy a laptop? Embed
      an Arduino or a Raspberry Pi? x86 or ARM or RISC-V? Apple or Framework?
    </p>

    <p>
      Do you want to talk about governance and sustainability? The importance of
      transparency? Projects being run by a BDFL (Benevolent Dictator For Life)
      or a non-profit foundation? The classic open source dilemma of doing what
      you love versus needing money to live?
    </p>

    <p>
      I hope it is evident that I am a huge nerd. I will gladly learn whatever
      technology is needed for the job, and I could talk for days about the
      ideas and the execution of technical projects.
    </p>
  </section>

  <section id="letter-signoff">
    <p>Sincerely,</p>
    <p>Sai</p>
  </section>
</section>

<section
  id="work"
  class="mb-8 space-y-6"
>
  <h2 class="work heading-size-2 -mb-3 font-mono">Work</h2>

  <ResumeEntry {...workDev}>
    <div slot="description">
      <p>
        Development & management of e-commerce websites. Major projects include:
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
    class="max-w-max space-y-6 sm:mx-auto"
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
