import { test, expect } from "@playwright/experimental-ct-svelte";
import Footer from "../src/lib/Footer.svelte";

test.use({ viewport: { width: 1280, height: 720 } });

test("should mount and render", async ({ mount }) => {
  const component = await mount(Footer);
  await expect(component).toHaveId("footer");
});

test.describe.fixme("to implement", () => {
  test("arrow should be hidden before offset", async ({ mount }) => {
    const component = await mount(Footer);
    const arrow = page.locator("#scroll-to-top");
    await expect(arrow).toBeHidden();
  });

  // test("arrow should show after scroll past offset", async ({ mount }) => {
  //   const component = await mount(Footer);
  //   await expect(component).toHaveId("footer");
  // });

  // test("should scroll to top when clicked", async ({ mount }) => {
  //   const component = await mount(Footer);
  //   const arrow = component.getByTitle("scroll to top");
  //   await expect(arrow).toHaveTitle("scroll to top");
  //   await component.click();
  // });

  // test("should be hidden after scrolled to top", async ({ mount }) => {
  //   const component = await mount(Footer);
  //   await component.click();
  // });
});
