<header class="sticky top-0 z-10 p-4 text-gray-300 print:hidden">
  <div class="water-jpg">
    <nav>
      <a
        href="/"
        class="font-mono text-4xl font-bold text-white underline-offset-4"
      >
        sai.codes
      </a>

      <div class="space-x-2">
        <a href="/resume">resume</a>
        <a href="/garden">garden</a>
        <a href="/contact">contact</a>
      </div>
    </nav>
  </div>
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
      numOctaves="4"
      baseFrequency="0.02 0.06"
    />

    <animate
      xlink:href="#wavesTurbulence"
      attributeName="baseFrequency"
      dur="60s"
      keyTimes="0; 0.5; 1"
      values="0.02 0.06; 0.02 0.18; 0.02 0.06"
      repeatCount="indefinite"
    />

    <feDisplacementMap
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
