<script lang="ts">
  export let hLink: {
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
  export let years: string = "";
  export let tools: string[] = [];
</script>

<div class="space-y-2">
  <h3 class="heading-size-3">
    {#if hLink.href}
      <a
        href={hLink.href}
        title={hLink.title}
        rel={hLink.rel}
        target="_blank"
      >
        {hLink.text}
      </a>
    {/if}

    {hText}
  </h3>

  <div>
    {#if subhText}
      <p class="italic">{subhText}</p>
    {/if}

    <p class="text-minor">{years}</p>
  </div>

  {#if tools.length > 0}
    <ul
      id="tools"
      class="-ml-1 flex flex-row flex-wrap text-sm"
    >
      {#each tools as tool}
        <li class="my-1 mr-2">
          <code>{tool}</code>
        </li>
      {/each}
    </ul>
  {/if}

  <slot name="description" />
</div>
