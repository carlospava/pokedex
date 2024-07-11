import { LitElement,css, html } from 'lit';


class ListaPokemonUi  extends LitElement {

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
        <div id="listapokemoncheckbox">
        </div>
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

customElements.define('lista-pokemon-ui', ListaPokemonUi);