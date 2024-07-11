import { html, LitElement, render } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';
import { getRandomMeal } from '../../components/poke-list-dm';
import '../../components/lista-pokemon-ui';
import '@material/web/dialog/dialog';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {

  static get properties() {
    return {
      listPokemon: { type: Array },
      cardPokemon: { type: String },
      dialog: { type: String}
    };
  }

  // static get styles(){
  //   return [styles,css``]
  // }

  constructor(){
    super();
    this.listPokemon = [];
    this.cardPokemon = '';
    this.dialog = 'open';
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
        <lista-pokemon-ui nombre='${item.name}' imagenPokemon='${item.sprites.front_default}'  @click="${() => this._openDialog()}"></lista-pokemon-ui>
      `)}
    `;
  }

  _openDialog(){
    console.log('lala')
    closeButton.addEventListener('click', async () => {
      await dialog.open();
    });

  }

  render() {
    return html`
   <md-dialog  >
    <div>nombre:</div>
    <div>tipo:</div>
    <div>habilidad:</div>
    <div slot="actions">
      <md-text-button form="form-id" value="cancel" >Cancel</md-text-button>
      <md-text-button form="form-id" value="ok">Ok</md-text-button>
    </div>
  </md-dialog>
    <div id="lista">
    ${this._buildList}
    </div>
  
    `;
  }

}
