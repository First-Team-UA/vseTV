
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #6B09E8;        /* Фіолетовий */
    --color-secondary: #7E5EFF;      /* Ліловий */
    --color-tertiary: #110178;       /* Темно-фіолетовий */
    --color-quaternary: #6C6BA1;     /* Світло-фіолетовий */
    --color-overlay: rgba(126, 94, 255, 0.30);  /* Фонове перекриття */
    --color-bg-light: rgba(255, 255, 255, 0.60);  /* Світлий фон */
    --color-text-light: #AFB0D0;     /* Світло-сірий текст */
    --color-text-dark: #110178;      /* Темно-фіолетовий текст */
    --color-text-white: #FFFFFF;     /* Білий текст */
    --color-orange: #FF8500;         /* Помаранчевий */
    --shadow-light: 0px 4px 20px 0px rgba(65, 20, 158, 0.10);  /* Світла тінь */
    --border-radius: 40px;           /* Радіус границь */
    --font-roboto: 'Roboto', sans-serif;
    --font-red-hat: 'Red Hat Display', sans-serif;
    --font-size-12: 12px;
    --font-size-14: 14px;
    --font-size-16: 16px;
    --font-size-18: 18px;
    --font-size-24: 24px;
  }

  body {
    background-color: var(--color-bg-light);
    color: var(--color-text-white);
    font-family: var(--font-roboto);
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-roboto);
    color: var(--color-text-white);
  }

  .red-hat-display {
    font-family: var(--font-red-hat);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyles;
