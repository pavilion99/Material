namespace MaterialPage {
    export class ImageFade extends MaterialElement{
        constructor(domEl: HTMLElement) {
            super(domEl);
        }

        setUnready = () => {
            this.el.classList.add("unready");
        };

        fade = () => {
            this.el.classList.remove("unready");
        };

        static getSelectors(): Array<string> {
            return ["img.fade"];
        }
    }
}