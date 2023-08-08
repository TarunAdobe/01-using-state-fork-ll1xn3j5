import { html } from "lit-html";
import { component, useState } from "haunted";
import {
  LitElement,
  TemplateResult,
  css,
} from "lit";
import "@spectrum-web-components/card/sp-card.js";
import '@spectrum-web-components/grid/sp-grid.js';

const renderItem = (
    item,
    index,
    selected
) => {
    return html`
        <sp-card
            toggles
            variant="quiet"
            heading="Card Heading ${item.id}"
            subheading="JPG Photo"
            style="contain: strict; padding: 1px;"
            value="card-${item.id}"
            .selected=${selected}
            key=${index}
        >
            <img    
                alt=""
                slot="preview"
                src="https://picsum.photos/id/${item.id}/200/300"
                decoding="async"
            />
            <div slot="description">10/15/18</div>
            <div slot="footer">Footer</div>
        </sp-card>
    `;
};

function generateItems(count) {
    const items = [];
    while (count) {
        count -= 1;
        items.unshift({ id: count });
    }
    return items;
}


function UsingState(){
  const [items, setItems] = useState(generateItems(10));
  const [s, setS] = useState("some placeholder");

  const handleChange = () => {
      console.log("handling some change bruh", items)
      let tempItems = items;
      tempItems = tempItems.slice(0, tempItems.length-1);
      setItems([...tempItems])
      setS("some other Placemahdofj")
  };

  return html`
        <sp-grid
            @change=${handleChange}
            .items=${[...items]}
            .focusableSelector=${'sp-card'}
            .renderItem=${renderItem}
    >
    </sp-grid>
    <input placeholder=${s}/>
  `;
}

customElements.define("using-state", component(UsingState));
