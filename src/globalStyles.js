import { createGlobalStyle } from 'styled-components';
import Roboto from './fonts/Roboto/Roboto-Regular.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Roboto;
  src: url(${Roboto});
}
body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
  }
  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
  }
  :root {
    --white: #fff;
    --blue-text-start-page: #5835E5;
    --blue: #5946D2;
    --light-red: #F85977;
    --light-gray: #1C1B1F61;
    --active-radio-buttons-text: #160067;
    --light-purple: #E5DFF9;
    --radio-buttons-border: #A5A0AB;
    --radio-buttons-text: #A5A0AC;
    --gray: #1C1B1F99;
    --background-modal-input: #FAF9FB;
    --divider-gray: #1C1B1F1F;
    --purple: #B0A2F2;
    --search-gray: #1C1B1F14;
    --add-todo-button-color: #1C1B1F29;
    --border-input: rgba(28, 27, 31, 0.38);
    --border-input-dark: rgba(230, 225, 229, 0.38);
    --red: red;
    --dark-gray: #E6E1E514;
    --black: #201F24;
    --purple-dark-theme: #9373FF;
    --white-dark-theme: #E6E1E5;
    --gray-dark-theme: #E6E1E599;
    --divider-dark-theme: #E6E1E51F;
    --transparent-white: rgba(255,255,255,0.38);
    --transparent-black: rgba(230, 225, 229, 0.12);
    --dark-blue: #544794;
    --transparent-gray: rgba(230, 225, 229, 0.38);
    --search-panel-dark: #252429;
    --modal-input-dark: #49454F;
    --light-red-dark-theme: #D9415E;
    --radio-button-active-text-dark: #E5DEFF;
    --radio-button-text-dark: #CAC4D0;
    --radio-button-border-dark: #79747E;
    --radio-button-active-background: #474459;
  }
`;
 
export default GlobalStyle;