<script lang="ts">
  export let entry: {
    heading: {
      href: string;
      hrefRel?: string;
      hrefTitle: string;
      companyName: string;
      jobTitle?: string;
    };
    years: string;
    tools: string[];
  };

  $: ({ heading, years, tools } = entry);
</script>

<div class="space-y-1">
  <h3>
    <a
      href={heading.href}
      title={heading.hrefTitle}
      rel={heading.hrefRel}
      target="_blank"
      class="-mr-1"
    >
      {heading.companyName}
    </a>

    {#if heading.jobTitle}
      : {heading.jobTitle}
    {/if}
  </h3>

  <p class="text-minor">{years}</p>

  <ul
    id="tools"
    class="flex flex-row flex-wrap font-mono text-sm"
  >
    {#each tools as tool}
      <li class="mb-1 mr-2 bg-gray-700 px-1">{tool}</li>
    {/each}
  </ul>

  <slot name="description" />
</div>
