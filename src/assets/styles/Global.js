import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  box-sizing: border-box;
  background-color: black;
  color: rgb(72 219 251);
  font-family: 'Press Start 2P', cursive, sans-serif;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
//   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
//   sans-serif;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
  
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

ul {
  padding: 0;
}
li {
  list-style: none;
}
img {
  display: block;
}
`;

export default GlobalStyles;
