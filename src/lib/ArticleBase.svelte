<script lang="ts">
  import { onMount } from "svelte";

  export let titleHeading = "";
  export let titleSubheading = "";

  let articleEl: HTMLElement;
  let headings2: Element[] = [];

  onMount(() => {
    headings2 = Array.from(articleEl.querySelectorAll("h2"));
  });
</script>

<svelte:head>
  <title>{titleHeading}</title>
</svelte:head>

<hgroup class="mb-10">
  <h1 class="heading-size-1 mb-2 leading-tight">{titleHeading}</h1>

  <p class="italic">
    {titleSubheading}
  </p>
</hgroup>
<hr />

<section class="mb-10 space-y-4">
  <h2
    id="table-of-contents"
    class="heading-size-2"
  >
    Table of Contents
  </h2>

  <div class="space-y-1">
    <ol class="list-disc pl-6">
      {#each headings2 as heading2}
        <li>
          <a href="#{heading2.id}">{heading2.textContent}</a>
        </li>

        {@const headings3 = heading2.parentElement
          ? heading2.parentElement.querySelectorAll("h3")
          : []}

        {#if headings3.length > 0}
          <ol class="list-disc pl-6">
            {#each headings3 as heading3}
              <li>
                <a href="#{heading3.id}">{heading3.textContent}</a>
              </li>

              {@const headings4 = heading3.parentElement
                ? heading3.parentElement.querySelectorAll("h4")
                : []}

              {#if headings4.length > 0}
                <ol class="list-disc pl-6">
                  {#each headings4 as heading4}
                    <li>
                      <a href="#{heading4.id}">{heading4.textContent}</a>
                    </li>

                    {@const headings5 = heading4.parentElement
                      ? heading4.parentElement.querySelectorAll("h5")
                      : []}

                    {#if headings5.length > 0}
                      <ol class="list-disc pl-6">
                        {#each headings5 as heading5}
                          <li>
                            <a href="#{heading5.id}">{heading5.textContent}</a>
                          </li>

                          {@const headings6 = heading5.parentElement
                            ? heading5.parentElement.querySelectorAll("h6")
                            : []}

                          {#if headings6.length > 0}
                            <ol class="list-disc pl-6">
                              {#each headings6 as heading6}
                                <li>
                                  <a href="#{heading6.id}">
                                    {heading6.textContent}</a
                                  >
                                </li>
                              {/each}
                            </ol>
                          {/if}
                        {/each}
                      </ol>
                    {/if}
                  {/each}
                </ol>
              {/if}
            {/each}
          </ol>
        {/if}
      {/each}
    </ol>
  </div>
</section>
<hr />

<article
  bind:this={articleEl}
  class="space-y-10"
>
  <slot />
</article>
