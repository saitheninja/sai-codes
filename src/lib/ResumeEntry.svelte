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
  <hgroup>
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
      {/if}

      {#if subhText}
        {subhText},
      {/if}

      {yearsStart}-{yearsEnd}
    </p>
  </hgroup>

  {#if tools.length > 0}
    <ul class="my-3 flex flex-row flex-wrap text-sm">
      {#each tools as tool}
        <li class="my-1 mr-2">
          <code>{tool}</code>
        </li>
      {/each}
    </ul>
  {/if}

  <div class="mt-1">
    <slot name="description" />
  </div>
</div>
