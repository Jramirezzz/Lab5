import Card, {Attribute} from "../components/card/card";
import { getCharacter } from "../store/actions";
import { addObserved,appState,dispatch } from "../store/index";

class board extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        addObserved(this)
    }
    async connectedCallback(){
        const action = await getCharacter();
        dispatch(action)
    }

    render(){
        appState.character.forEach((data:any) => {
            const Card = this.ownerDocument.createElement("my-card") as Card;
            Card.setAttribute(Attribute.name, data.name);
            Card.setAttribute(Attribute.gender, data.gender);
            this.shadowRoot?.appendChild(Card)
        })
    }
}

customElements.define("app-board", board)