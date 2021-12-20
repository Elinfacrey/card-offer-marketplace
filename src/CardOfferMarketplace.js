import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardOfferMarketplace-styles.js';

import "@bbva-web-components/bbva-list-offer/bbva-list-offer.js";
import  "@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js";
import "@bbva-web-components/bbva-button-default/bbva-button-default.js";
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-offer-marketplace></card-offer-marketplace>
```

##styling-doc

@customElement card-offer-marketplace
*/
export class CardOfferMarketplace extends LitElement {
  static get is() {
    return 'card-offer-marketplace';
  }

  // Declare properties
  static get properties() {
    return {
    
      items:{type:Array},
      nombre:{type:String},
      imagen:{type:String},
      cantidad:{type:Number}
     
      
    };
  }

  // Initialize properties
  constructor() {
    super();
   
    this.items = [];
    this.nombre = "";
    this.imagen = "";
    this.cantidad ;
    
  
  }

  static get styles() {
  
    return [
      styles,
      getComponentSharedStyles('card-offer-marketplace-shared-styles')
      
    ];
    
  }

  Continuar(event) {
    this.dispatchEvent(new CustomEvent('continue-clicked', { bubbles: true, composed: true}));
    console.log("Probando evento continuar",event)
  }

      
    
 

    
  

 


  // Define a template
  render() {
    
    return html`
      <div class="card-offer-list">
      ${this.items.map((i) => html `
     
      <bbva-web-card-product variant="horizontal"  image="${i.imagen}" heading="${i.nombre}" preheading="Nuevo" button-text="Comprar" subheading="cantidad : ${i.cantidad}"  link-text="Envìo gratis" @button-click=${this.Continuar}>
      </bbva-web-card-product>
     
      <br>
      <br>
      <br>
      `)} 
    
      </div>
    
    
    
    
    
    `;
  }
}
