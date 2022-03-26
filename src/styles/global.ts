import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    /*======== Colors ========*/
    --title-clr: hsl(221, 25%, 24%);
    --text-highlighted-clr: hsl(235, 100%, 85%);
    --red-clr: hsl(350, 79%, 58%);
    --green-clr: hsl(108, 68%, 50%);
    --blue-clr: hsl(235, 69%, 61%);
    --dark-blue-clr: hsl(235, 44%, 50%);
    --blue-twitter: hsl(198, 75%, 52%);

    --neutral-clr: hsl(0, 0%, 100%);
    --bg-clr: hsl(220, 13%, 95%);
    --gray-line-clr: hsl(225, 6%, 87%);
    --text-clr: hsl(0, 0%, 40%);
    --light-gray: hsl(220, 4%, 85%);

    /*======== Font Size ========*/
    --counter-font-size: 7.5rem; //120px
    --counter-font-size-alt: 6.5rem; // 104px
    --bigger-font-size: 1.5rem; // 24px
    --big-font-size: 1.25rem; // 20px
    --normal-font-size: 1rem; // 16px
    --small-font-size: 1.125rem; // 18px
    --smaller-font-size: 0.875rem; // 14px
  }

  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--bg-clr);
    color: var(--text-clr);
    -webkit-font-smoothing: antialiased;
  }

  /*==== RESET =========================*/
  img {
    width: 100%;
    height: auto;
  }

  a { 
    display: inline-block;
    text-decoration: none;
  }

  body, 
  input, 
  textarea, 
  button {
    font: 400 var(--normal-font-size) 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`