namespace MaterialPage {
    export class Card extends MaterialElement {
        expand = () => {
            this.el.classList.toggle("expanded");

            if (this.el.classList.contains("expanded")) {
                let ht = this.supportingText.scrollHeight;
                this.supportingText.style.height = ht + "px";
            } else {
                this.supportingText.style.height = "0";
            }
        };
        private supportingText: HTMLElement;

        constructor(domEl: HTMLElement) {
            super(domEl);

            if (this.el.querySelector(".media") != null) {
                let mediaBlock = this.el.querySelector(".media");

                let width = this.el.offsetWidth;
                let height = width * (9 / 16);

                (<HTMLElement>mediaBlock).style.height = height + "px";
            }

            let supportingText = this.el.querySelector("div.supporting-text");
            let expand = this.el.querySelector(".button[data-action='expand']");

            if (supportingText != null && expand != null) {
                this.supportingText = <HTMLElement>supportingText;
                expand.addEventListener("click", this.expand);
            }
        }

        static getSelectors(): Array<string> {
            return [".card"];
        }
    }
}