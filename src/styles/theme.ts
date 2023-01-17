import { DefaultTheme } from "styled-components";

const device = {
  mobile: `screen and (max-width: 720px)`,
  tablet: `screen and (max-width: 1024px)`,
  laptop: `screen and (max-width: 1440px)`,
};

export const theme: DefaultTheme = {
  background: {
    basic: "#112D4E",
    point: "#364F6B",
  },
  text: {
    basic: "#F6F6F6",
  },
  device,
};
