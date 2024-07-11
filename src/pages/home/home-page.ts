import { html, LitElement, render } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';
import { getRandomMeal } from '../../components/poke-list-dm';
import '../../components/lista-pokemon-ui';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {

  static get properties() {
    return {
      listPokemon: { type: Array },
      cardPokemon: { type: String },
    };
  }

  // static get styles(){
  //   return [styles,css``]
  // }

  constructor(){
    super();
    this.listPokemon = [];
    this.cardPokemon = '';
  }
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }
  async firstUpdated(props: any) {
    super.firstUpdated?.(props);
      this.listPokemon = await getRandomMeal();
  }

  get _buildList() {
    return html`
      ${this.listPokemon.map(item => html`
        <lista-pokemon-ui nombre='${item.name}' imagenPokemon='${item.sprites.front_default}'></lista-pokemon-ui>
      `)}
    `;
  }

  render() {
    return html`
    ${this._buildList}
    `;
  }
}
