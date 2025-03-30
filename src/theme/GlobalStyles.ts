import { createGlobalStyle } from "styled-components";
import "typeface-roboto";
import "typeface-playfair-display";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif !important;
  }
  .icon:not(.social) {
    font-family: 'Icons' !important;
  }
  .social {
    font-family: 'brand-icons' !important;
  }
  .pfd {
    font-family: 'Playfair Display', sans-serif !important;
  }
  .blue-text {
    color: #003CB0;
  }
  .white-text {
    color: white;
  }
  .ui {
    &.card {
      box-shadow: 0px 0px 10px #D1D8E6;
    }
  }
  .mobile-hidden {
    @media all and (max-width: 1199px) {
      display: none !important;
    }
  }
  .mobile-visible {
    @media all and (max-width: 1198px) {
      display: block !important;
    }
  }
`;
