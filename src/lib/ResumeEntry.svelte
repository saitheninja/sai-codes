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

<div>
  <h3 class="mb-2">
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

  <ul
    id="tools"
    class="flex flex-row flex-wrap text-sm"
  >
    {#each tools as tool}
      <li class="mb-1 mr-2 bg-gray-700 px-1">{tool}</li>
    {/each}
  </ul>

  <p class="text-minor mb-1">{years}</p>

  <slot name="description" />
</div>
