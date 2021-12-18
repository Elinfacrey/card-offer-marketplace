/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.nombreProducto {
  color: #333;
  font-size: 20px;
  margin-block-start: 0.83em;
}

.precio {
  color: #333;
  font-size: 24px;
  font-weight: 400;
}

.envio {
  color: #00a650;
  font-size: 14px;
}
`;