<script lang="ts">
  export let level: number;
  export let title: string;

  function titleToID(title: string): string {
    const removedWhitespace = title.trim();
    const replacedSpacesWithDashes = removedWhitespace.replaceAll(" ", "-");
    const lowercased = replacedSpacesWithDashes.toLowerCase();

    return lowercased;
  }
</script>

{#if !title}
  <h2 class="heading-size-2">TITLE MISSING</h2>
{:else if !level}
  <h2 class="heading-size-2">LEVEL MISSING</h2>
{:else if level < 2 || level > 6}
  <h2 class="heading-size-2">LEVEL NOT IN ALLOWED RANGE 2-6</h2>
{:else}
  {@const id = titleToID(title)}

  {#if level === 2}
    <h2
      {id}
      class="heading-size-2"
    >
      <a href="#{id}">{title}</a>
    </h2>
  {:else if level === 3}
    <h3
      {id}
      class="heading-size-3"
    >
      <a href="#{id}">{title}</a>
    </h3>
  {:else if level === 4}
    <h4
      {id}
      class="heading-size-4"
    >
      <a href="#{id}">{title}</a>
    </h4>
  {:else if level === 5}
    <h5
      {id}
      class="heading-size-5"
    >
      <a href="#{id}">{title}</a>
    </h5>
  {:else if level === 6}
    <h6
      {id}
      class="heading-size-6"
    >
      <a href="#{id}">{title}</a>
    </h6>
  {/if}
{/if}
