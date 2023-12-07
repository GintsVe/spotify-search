import { createGlobalStyle } from "styled-components";
import fontsCss from "./fonts.module.css";

export const GlobalStyles = createGlobalStyle`
 ${fontsCss}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.manrope}, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.background} 60%,
    ${({ theme }) => theme.colors.tertiary} 100%
  );
  line-height: 1;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}

button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

li {
  list-style-type: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}
`;
