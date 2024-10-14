import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // works in dev, but doesn't work with prerendered pages
  // https://kit.svelte.dev/docs/hooks
  // "Requests for static assets — which includes pages that were already prerendered — are not handled by SvelteKit."
  response.headers.append("X-Clacks-Overhead", "GNU Terry Pratchett");

  return response;
};
