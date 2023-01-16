import { afterAll, afterEach, describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/svelte";

import Footer from "$lib/Footer.svelte";

// jsdom  Error: Not implemented: window.scrollTo
// https://www.raulmelo.dev/blog/fixing-not-implemented-x-on-jest-jsdom-for-component-unit-tests
// https://jestjs.io/docs/mock-functions
// https://vitest.dev/api/#vi-clearallmocks clear mock history, but not reset its implementation
// https://vitest.dev/api/#vi-resetallmocks clear mock history and reset its implementation to an empty function (will return undefined)
// https://vitest.dev/api/#vi-restoreallmocks clear mock history and reset its implementation to the original
// https://vitest.dev/guide/mocking.html#cheat-sheet
const Mock = vi.fn();
window.scrollTo = Mock;
// vi.stubGlobal("window.scrollTo", Mock);
// window.scrollTo = (x, y) => {
//   document.documentElement.scrollTop = y;
// };
afterEach(() => {
  vi.clearAllMocks();
});
afterAll(() => {
  vi.restoreAllMocks();
  // vi.unstubAllGlobals();
});

describe("Scroll to top arrow behaviour", () => {
  test("should render the component", () => {
    const { container } = render(Footer);
    expect(container).toBeTruthy();
  });

  test.todo("is hidden when page is at the top", () => {
    // expect(1 + 2).toBe(3);
    // expect()
  });

  test.todo("show button when scrolled below offset", () => {
    // expect()
  });

  test.todo("hide button when scrolled above offset", () => {
    // expect()
  });

  test.todo("scrolls to top when button is pressed", () => {
    // expect()
  });
});
