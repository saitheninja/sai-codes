<script lang="ts">
  export interface ResumeEntryData {
    hText: string;
    subhLink?: {
      href: string;
      rel?: string;
      title: string;
      text: string;
    };
    subhText?: string;
    dateStart: string;
    dateEnd: string;
    tools?: string[];
  }

  interface Props extends ResumeEntryData {
    description?: import("svelte").Snippet;
  }

  let {
    hText = "",
    subhLink = {
      href: "",
      title: "",
      text: "",
    },
    subhText = "",
    dateStart = "",
    dateEnd = "",
    tools = [],
    description,
  }: Props = $props();
</script>

<div>
  <div
    class={[
      "mb-0.5 grid grid-cols-1 sm:gap-1",
      tools.length > 0 ? "sm:grid-cols-2" : "",
    ]}
  >
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
            {subhLink.text}
          </a>
        {:else if subhText}
          {subhText}
        {/if}
      </p>

      <p class="text-minor">
        {dateStart} - {dateEnd}
      </p>
    </hgroup>

    {#if tools.length > 0}
      <ul
        class="flex max-h-max flex-row flex-wrap justify-end gap-x-2 pt-1.5 sm:my-0"
      >
        {#each tools as tool}
          <li class="max-h-max">
            <code class="text-xs">{tool}</code>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div>
    {@render description?.()}
  </div>
</div>
