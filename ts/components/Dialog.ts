namespace MaterialPage {
    export class Dialog extends MaterialElement {
        closeShade = (e) => {
            if (e.target !== this.el)
                return;

            this.el.classList.remove("active");
            window.setTimeout(() => {this.el.style.visibility = "hidden";}, 200);
        };
        toggle = () => {
            this.el.classList.toggle("active");

            if (!this.el.classList.contains("active")) {
                window.setTimeout(() => {this.el.style.visibility = "hidden";}, 200);
            } else {
                this.el.style.visibility = "visible";
            }
        };
        private dialogEl: Element;

        constructor(domEl: HTMLElement) {
            super(domEl);

            this.dialogEl = domEl;
            this.el = domEl.parentElement;

            let toggles = document.querySelectorAll("[data-toggle='dialog'][data-target='" + this.dialogEl.id + "']");
            for (const toggle of toggles)
                toggle.addEventListener("click", this.toggle, true);

            this.el.addEventListener("click", this.closeShade, true);
            this.el.style.display = "block";
        }

        static getSelectors(): Array<string> {
            return ["div.dialog"];
        }
    }
}