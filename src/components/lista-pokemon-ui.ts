import { LitElement,css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './lista-pokemon-ui.css';

@customElement('lista-pokemon-ui')
class ListaPokemonUi  extends LitElement {

  static styles = styles;
  static get properties() {
    return {
      nombre: { type: String },
      imagenPokemon :{type: String},
    };
  }

  // static get styles(){
  //   return [styles,css``]
  // }

  constructor(){
    super();
    this.nombre = '';
    this.imagenPokemon ='';
    

  }

  render() {
    console.log('prueba')
    return html`
   
      <div id="listapokemon">
        <div id="listapokemonimg">
          <img alt="pokemon" src=${this.imagenPokemon }>
        </div>
        <div id="listapokemoncontenido">
          <ul>
            <li><a>Nombre: ${this.nombre} </a></li>
          </ul>
        </div>
      </div>
      
    
    `;
  }

  
  // handleClick(){
  //   const event=new CustomEvent('pokemon-seleccionado-batalla',{
  //       detail:{
  //           nombre:this.nombre,
  //           url:this.urlpokemon,
  //           poder:this.ataque,
  //           hp:this.vida,
  //       },
  //       bubble:true,
  //       composed:true,
  //   });
  //   this.dispatchEvent(event);
  // }

}

//customElements.define('lista-pokemon-ui', ListaPokemonUi);