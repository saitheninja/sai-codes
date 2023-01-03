<header class="sticky top-0 z-10 grid grid-cols-1 grid-rows-1 print:hidden">
  <div class="waves-mask col-span-full row-span-full h-full" />

  <nav class="z-20 col-span-full row-span-full p-4">
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
  class="hidden"
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
    <!-- <feDisplacementMap
      in2="wavesTurbulence"
      in="SourceGraphic"
      scale="20"
      xChannelSelector="R"
      yChannelSelector="G"
    /> -->
  </filter>
</svg>
