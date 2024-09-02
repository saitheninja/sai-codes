<script lang="ts">
  export let subhLink: {
    href: string;
    rel?: string;
    title: string;
    text: string;
  } = {
    href: "",
    title: "",
    text: "",
  };
  export let hText: string = "";
  export let subhText: string = "";
  export let yearsStart: string = "";
  export let yearsEnd: string = "";
  export let tools: string[] = [];
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
    <slot name="description" />
  </div>
</div>
