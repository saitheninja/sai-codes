<header class="sticky top-0 z-10 grid grid-cols-1 print:hidden">
  <div class="waves-mask col-span-full row-span-full" />

  <a
    class="skip-to-content-link"
    href="#main"
  >
    skip to main content
  </a>

  <nav class="header-text-shadow z-20 col-span-full row-span-full p-4">
    <a
      href="/"
      class="font-mono text-4xl font-bold underline-offset-4"
    >
      sai.codes
    </a>

    <div class="text-color-secondary space-x-2">
      <a href="/resume">resume</a>
      <a href="/garden">garden</a>
      <a href="/contact">contact</a>
    </div>
  </nav>
</header>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-0 w-0"
>
  <!-- https://redstapler.co/realistic-water-effect-svg-turbulence-filter/ -->
  <filter id="wavesFilter">
    <feTurbulence
      id="wavesTurbulence"
      stitchTiles="noStitch"
      type="turbulence"
      seed="200"
      numOctaves="2"
      baseFrequency="0.02 0.06"
    />

    <animate
      xlink:href="#wavesTurbulence"
      attributeName="baseFrequency"
      dur="60s"
      keyTimes="0; 0.5; 1"
      values="0.04 0.18; 0.02 0.06; 0.04 0.18"
      repeatCount="indefinite"
    />

    <feDisplacementMap
      in2="wavesTurbulence"
      in="SourceGraphic"
      scale="20"
    />
  </filter>
</svg>
