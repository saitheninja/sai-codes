<script lang="ts">
  interface Props {
    subhLink?: {
      href: string;
      rel?: string;
      title: string;
      text: string;
    };
    hText?: string;
    subhText?: string;
    yearsStart?: string;
    yearsEnd?: string;
    tools?: string[];
    description?: import("svelte").Snippet;
  }

  let {
    subhLink = {
      href: "",
      title: "",
      text: "",
    },
    hText = "",
    subhText = "",
    yearsStart = "",
    yearsEnd = "",
    tools = [],
    description,
  }: Props = $props();
</script>

<div>
  <hgroup class="mb-1">
    <h3 class="heading-size-3">
      {hText}
    </h3>

    <p class="text-minor">
      {#if subhLink.href}
        <a
          href={subhLink.href}
          title={subhLink.title}
          rel={subhLink.rel}
          target="_blank"
        >
          {subhLink.text},
        </a>
      {:else if subhText}
        {subhText},
      {/if}

      {yearsStart}-{yearsEnd}
    </p>
  </hgroup>

  {#if tools.length > 0}
    <ul class="mb-1 mt-3 flex flex-row flex-wrap gap-x-2 gap-y-1 text-sm">
      {#each tools as tool}
        <li>
          <code>{tool}</code>
        </li>
      {/each}
    </ul>
  {/if}

  <div>
    {@render description?.()}
  </div>
</div>
