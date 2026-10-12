<script lang="ts">
  interface Props {
    level: number;
    title: string;
  }

  let { level, title }: Props = $props();

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

  <svelte:element
    this={"h" + level}
    {id}
    class={"heading-size-" + level}
  >
    <a href="#{id}">{title}</a>
  </svelte:element>
{/if}
