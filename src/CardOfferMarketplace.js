import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardOfferMarketplace-styles.js';

import "@bbva-web-components/bbva-list-offer/bbva-list-offer.js";
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
      name: { type: String, },
      cards:{type:Array,atribute:'list-cards'},
      envio:{type:String},
      soles:{type:String}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
    this.envio = "Envìo gratis ";
    this.cards = [];
    this.soles = "S/"

    
  }

  static get styles() {
  
    return [
      styles,
      getComponentSharedStyles('card-offer-marketplace-shared-styles')
      
    ];
    
  }

  async firstUpdated() {
    await this.updateComplete;
    
    let cardOffer = this.shadowRoot.querySelectorAll('bbva-list-offer').setAttribute('style','display:none');
    console.log("lista cardoffer",cardOffer);

    this.cardOffer.map(i =>{
      i.shadowRoot.querySelector('bbva-badge-feedback')
          .setAttribute('style','display:none');
    })
  //   this.cardOffer.map(i => {
  //    i.shadowRoot.querySelector('bbva-badge-feedback').setAttribute('style','display:none');
  //  })
    
    
   // for (var i=0,max = cardOffer.length;i<max;i++){
   //   cardOffer.shadowRoot.querySelector('bbva-badge-feedback').setAttribute('style','display:none');
   // }
   // console.log("mnax",max);

      
    
    let badge = cardOffer.shadowRoot.querySelector('bbva-badge-feedback').setAttribute('style','display:none');
    console.log("probando badge",badge);
    


    let bbvafb = cardOffer.shadowRoot.querySelector('bbva-badge-feedback').setAttribute('styel','widht:0px');
    console.log("bbva badge",bbvafb);
    
    let cardfb = bbvafb.shadowRoot.querySelector('rating-container').innerHTML="";
    console.log("bbva cardfb",cardfb);
 
   
    //cardOffer.shadowRoot.querySelector('.header-content').innerHTML = "";
    //console.log('Header without outer', cardOffer.shadowRoot.querySelector('.header-content'));
  }

 


  // Define a template
  render() {
    
    return html`
    <div class=list-card>
    ${this.cards.map((i) => html`
    <bbva-list-offer class ="cardOffer" header-text="" link-text="" image-url="${i.imagen}" image-alt="${i.imagen}">

    <span slot="text">
      <div class="card-offer-marketplace">
      <h2  class="nombreProducto">${i.nombre}</h2>
      <p class="precio">${this.soles}${i.precio}</p>
      <p class="envio">${this.envio}</p>
      
      </div>
  
    </span>
  </bbva-list-offer>
  <br>
      
    `)}
    </div>
    
    
    
    
    `;
  }
}
