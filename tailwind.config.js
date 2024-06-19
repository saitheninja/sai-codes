/** @type {import('tailwindcss').Config}*/

import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      mono: [ "Cascadia Code", ...fontFamily.mono ],
      sans: [ "Work Sans", ...fontFamily.sans ],
      serif: [ "Yrsa", ...fontFamily.serif ],
    },

    extend: {},
  },

  plugins: [],
};

