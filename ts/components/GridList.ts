namespace MaterialPage {
    export class GridList extends MaterialElement {
        resize = () => {
            let canFit = this.calcCanFit();

            if (canFit === this.currentCanFit)
                return;

            this.currentCanFit = canFit;

            let old = this.el.querySelectorAll("div.grid-list-item.filler");
            for (let element of old) {
                element.parentElement.removeChild(element);
            }

            let children = this.el.childElementCount;
            let extrasNeeded = children % canFit;

            if (extrasNeeded !== 0)
                extrasNeeded = canFit - extrasNeeded;

            for (let i: number = 0; i < extrasNeeded; i++) {
                let filler = document.createElement("DIV");
                filler.classList.add("grid-list-item");
                filler.classList.add("filler");

                this.el.appendChild(filler);
            }
        };
        calcCanFit = () => {
            let itemWidth = null;

            if (this.el.dataset.hasOwnProperty("contentWidth"))
                itemWidth = parseInt(this.el.dataset["contentWidth"]);
            else
                itemWidth = 200;

            itemWidth += 4;

            return Math.floor(this.el.offsetWidth / itemWidth);
        };
        private currentCanFit: number;

        constructor(domEl: HTMLElement) {
            super(domEl);
            window.addEventListener("resize", this.resize);

            this.currentCanFit = -1;
        }

        static getSelectors(): Array<string> {
            return ["div.grid-list"];
        }
    }
}