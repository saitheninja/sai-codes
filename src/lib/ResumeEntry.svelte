<script lang="ts">
  export interface ResumeEntryData {
    jobTitle?: string;
    companyLink?: {
      href: string;
      rel?: string;
      title: string;
      text: string;
    };
    companyText?: string;
    dateStart: string;
    dateEnd: string;
  }

  interface Props extends ResumeEntryData {
    description?: import("svelte").Snippet;
  }

  let {
    jobTitle = "",
    companyLink = {
      href: "",
      title: "",
      text: "",
    },
    companyText = "",
    dateStart = "",
    dateEnd = "",
    description,
  }: Props = $props();
</script>

<div>
  <div>
    <hgroup class="mb-1 flex flex-col sm:flex-row sm:justify-between">
      <h3 class="heading-size-3">
        {#if companyLink.href}
          <a
            href={companyLink.href}
            title={companyLink.title}
            rel={companyLink.rel}
            target="_blank"
          >
            {companyLink.text}
          </a>
        {:else if companyText}
          {companyText}
        {/if}
      </h3>

      <div class="text-minor mt-auto max-h-max">
        {#if jobTitle}
          <span>
            {jobTitle},
          </span>
        {/if}

        <span>
          {dateStart} - {dateEnd}
        </span>
      </div>
    </hgroup>
  </div>

  <div>
    {@render description?.()}
  </div>
</div>
