<script lang="ts">
  export let headingLink: {
    href: string;
    rel?: string;
    title: string;
    text: string;
  } = {
    href: "",
    title: "",
    text: "",
  };
  export let headingText: string = "";
  export let years: string = "";
  export let tools: string[] = [];
</script>

<div>
  <h3>
    {#if headingLink.href}
      <a
        href={headingLink.href}
        title={headingLink.title}
        rel={headingLink.rel}
        target="_blank"
        class="-mr-1"
      >
        {headingLink.text}
      </a>
    {/if}

    {headingText}
  </h3>

  {#if tools.length > 0}
    <ul
      id="tools"
      class="mt-2 flex flex-row flex-wrap text-sm"
    >
      {#each tools as tool}
        <li class="mb-1 mr-2 bg-gray-700 px-1">{tool}</li>
      {/each}
    </ul>
  {/if}

  <p class="text-minor mb-1">{years}</p>

  <slot name="description" />
</div>
