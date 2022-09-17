import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  main {
    display: block;
  }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible;
  }
  
  a {
    background-color: transparent;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0;
  }
  
  button,
  input { 
    overflow: visible;
  }
  
  button,
  select { 
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  textarea {
    overflow: auto;
  }
  
  [hidden] {
    display: none;
  }

  *,
  *:after,
  *:before {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  	text-decoration: none;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
  	margin: 0;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  	font-size: 100%;
  	list-style-type: none;
    font-family:${({ theme }) => theme.fontFamily.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
  }
`
