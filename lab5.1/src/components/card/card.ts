import style from "./styles.css"

export enum Attribute {
    "name" = "name",
    "gender" = "gender",

}
 
class Card extends HTMLElement {
    name?: string;
    gender?: string;


    static get observedAttributes() {
        const ats: Record<Attribute, null> = {
            gender: null,
            name: null,
        };
        return Object.keys(ats);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``
                this.shadowRoot.innerHTML += `
                <section class = "secC">
                <h1>Name: ${this.name}</h1>
                <p>Gender: ${this.gender}</p>
                </section>
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = style;
                this.shadowRoot?.appendChild(css);
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
