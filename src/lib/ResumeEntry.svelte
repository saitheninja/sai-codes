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

<div class="space-y-1">
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
      class="-ml-1 flex flex-row flex-wrap text-sm"
    >
      {#each tools as tool}
        <li class="tools">{tool}</li>
      {/each}
    </ul>
  {/if}

  <slot name="description" />
</div>

<style lang="postcss">
  .tools {
    @apply mb-1 mr-2 bg-gray-700 px-1 print:bg-gray-200;

    print-color-adjust: exact;
  }
</style>
