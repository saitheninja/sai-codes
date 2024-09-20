<script lang="ts">
  import ArticleBase from "$lib/ArticleBase.svelte";

  const titleHeading = "On CSS";
  const titleSubheading = "I have *opinions*.";
  const datePublished = "2022-02-21";
  const dateUpdated = "2024-09-20";
</script>

<ArticleBase
  {titleHeading}
  {titleSubheading}
  {datePublished}
  {dateUpdated}
>
  <section class="space-y-4">
    <h2
      id="in-general"
      class="heading-size-2"
    >
      In General
    </h2>

    <p>
      "pixel perfect" is dumb. Web pages are stretchy. Set the min and max, and
      let the browser work it out.
    </p>

    <p>Margins collapse. Padding adds.</p>

    <p>Design layouts from smallest screen to biggest screen.</p>

    <p>
      Get feedback as fast as possible, so you can fix bugs before things are
      built on top of it. I like to build things directly in the browser so I
      can immediately see where ideas don't work. (Especially fancy layering
      things, like the <a
        href="https://github.com/saitheninja/sai-codes/blob/main/src/lib/Header.svelte"
        >header</a
      > of this site.)
    </p>
  </section>

  <section class="space-y-4">
    <h2
      id="tailwind"
      class="heading-size-2"
    >
      Tailwind
    </h2>

    <p>
      It's fast to play with designs, and you know you aren't messing up the
      rest of the site by changing global CSS, because it is just combinations
      of isolated utility classes.
    </p>

    <p>
      Tailwind has <a
        href="https://tailwindcss.com/docs/hover-focus-and-other-states#media-and-feature-queries"
        target="_blank">useful media queries</a
      >.
    </p>

    <p>
      Build everything in one page and then abstract into components once the
      patterns become obvious.
    </p>

    <p>
      Use margin for fine-tuning specific content, like text or logos. First use
      <code>gap</code>, <code>space-x</code>, etc.
    </p>

    <p>
      <code>@apply</code> to use Tailwind classes in <code>.css</code> files.
    </p>

    <p>Coloured shadows: they are pretty cool.</p>
  </section>
</ArticleBase>
