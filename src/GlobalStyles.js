import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   ${reset}
   *{
      box-sizing:border-box;
      color:#fff;
      text-decoration: none;
   }




`;

export default GlobalStyles;
