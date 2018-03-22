namespace MaterialPage {
    export class ExpansionPanel extends MaterialElement{
        private primary: Element;
        private secondary: Element;
        private container: Element;

        constructor(domEl: HTMLElement) {
            super(domEl);

            let el = this.el;

            let primary = this.el.querySelector("div.summary.primary");
            let secondary = this.el.querySelector("div.summary.secondary");
            let container = this.el.querySelector("div.content-container");
            let summary = this.el.querySelector("div.summary-container");

            this.primary = primary;
            this.secondary = secondary;
            this.container = container;

            primary.textContent = primary["dataset"]["closedText"];
            secondary.textContent = secondary["dataset"]["closedText"];

            let expandIcon = this.el.querySelector("div.expand-icon");

            if (expandIcon == null) {
                let expand = document.createElement("DIV");
                expand.classList.add("expand-icon");

                let icon = document.createElement("SPAN");
                icon.classList.add("material-icons");
                icon.textContent = "expand_more";

                expand.appendChild(icon);

                summary.appendChild(expand);

                expandIcon = expand;
            }

            expandIcon.addEventListener("click", this.togglePanel);

            let actions = this.el.querySelector("div.actions");

            let close = actions.querySelector("button[data-action='close']");
            if (close != null) {
                close.addEventListener("click", this.togglePanel);
            }
        }

        updateContent = () => {
            let open = this.el.classList.contains("open");

            if (open) {
                this.primary.textContent = this.primary["dataset"]["openText"];
                this.secondary.textContent = this.secondary["dataset"]["openText"];
            } else {
                this.primary.textContent = this.primary["dataset"]["closedText"];
                this.secondary.textContent = this.secondary["dataset"]["closedText"];
            }
        };

        togglePanel = () => {
            this.el.classList.toggle("open");

            if (this.el.classList.contains("open"))
                (<HTMLElement>this.container).style.height = this.container.scrollHeight + "px";
            else
                (<HTMLElement>this.container).style.height = "0";
            this.updateContent();
        };

        static getSelectors(): Array<string> {
            return ["div.expansion-panel"];
        }
    }
}