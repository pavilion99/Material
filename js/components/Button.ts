namespace MaterialPage {
    export class Button extends MaterialElement {
        private focusPrevented: boolean;

        constructor(domEl: HTMLElement) {
            super(domEl);

            this.el.addEventListener("focus", this.focus);
            this.el.addEventListener("blur", this.blur);
            this.el.addEventListener("mousedown", this.click);
        }

        click = () => {
            if (this.el.classList.contains("focus"))
                this.el.classList.remove("focus");

            this.el.classList.add("active");

            window.setTimeout(() => {
                this.el.classList.remove("active");
            }, 200);

            this.preventFocus();
        };

        focus = () => {
            if (this.focusPrevented) {
                console.log("Focus prevented");
                this.focusPrevented = false;
                return;
            }

            this.el.classList.add("focus");
        };

        blur = () => {
            this.focusPrevented = false;
            this.el.classList.remove("focus");
        };

        preventFocus = () => {
            this.focusPrevented = true;
        };

        static getSelectors(): Array<string> {
            return ["button",".button","input[type='button']","input[type='submit']"];
        }
    }
}