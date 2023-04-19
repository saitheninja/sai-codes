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

<div>
  <h3>
    {#if hLink.href}
      <a
        href={hLink.href}
        title={hLink.title}
        rel={hLink.rel}
        target="_blank"
        class="-mr-1"
      >
        {hLink.text}
      </a>
    {/if}

    {hText}
  </h3>

  {#if subhText}
    <p class="italic">{subhText}</p>
  {/if}

  <p class="text-minor mb-1">{years}</p>

  {#if tools.length > 0}
    <ul
      id="tools"
      class="my-2 -ml-1 flex flex-row flex-wrap text-sm"
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
