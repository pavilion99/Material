namespace MaterialPage {
    export class Progress extends MaterialElement {
        private type: string;

        constructor(domEl: HTMLElement) {
            super(domEl);

            this.type = this.el["dataset"].type == "circular" ? "circular" : "linear";
            let type = this.el["dataset"].type;
            let value = this.el.hasAttribute("value");

            let ns = "http://www.w3.org/2000/svg";

            if (value) {
                switch (type) {
                    case "circular": {
                        // Determinate spinner
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.classList.add("circular");
                        container.id = this.el.id;

                        let rotate = document.createElementNS(ns, "svg");
                        rotate.classList.add("determinate-spinner");
                        rotate.setAttribute("width", "50");
                        rotate.setAttribute("height", "50");

                        let circle = document.createElementNS(ns, "circle");
                        circle.id = this.el.id + "-bar";
                        circle.setAttribute("cx", "25");
                        circle.setAttribute("cy", "25");
                        circle.setAttribute("r", "20");

                        rotate.appendChild(circle);

                        container.appendChild(rotate);

                        container.dataset.value = (<HTMLProgressElement>this.el).value.toString();
                        container.dataset["max"] = this.el.getAttribute("max");

                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);

                        window.setTimeout(this.update, 50);
                        break;
                    }
                    default: {
                        // Determinate linear
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.id = this.el.id;

                        let bar1 = document.createElement("DIV");
                        bar1.classList.add("determinate-bar");

                        container.appendChild(bar1);

                        bar1.id = this.el.id + "-bar";

                        container.dataset.value = (<HTMLProgressElement>this.el).value.toString();
                        container.dataset["max"] = this.el.getAttribute("max");

                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);

                        window.setTimeout(this.update, 50);
                        break;
                    }
                }
            } else {
                switch (type) {
                    case "circular": {
                        // Indeterminate spinner
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.classList.add("circular");
                        container.id = this.el.id;

                        let rotate = document.createElementNS(ns, "svg");
                        rotate.classList.add("indeterminate-spinner");
                        rotate.setAttribute("width", "50");
                        rotate.setAttribute("height", "50");

                        let circle = document.createElementNS(ns, "circle");
                        circle.setAttribute("cx", "25");
                        circle.setAttribute("cy", "25");
                        circle.setAttribute("r", "20");

                        rotate.appendChild(circle);

                        container.appendChild(rotate);

                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);
                        break;
                    }
                    default: {
                        // Indeterminate linear
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.id = this.el.id;

                        let bar1 = document.createElement("DIV");
                        bar1.classList.add("indeterminate-bar");
                        let bar2 = document.createElement("DIV");
                        bar2.classList.add("indeterminate-bar");

                        container.appendChild(bar1);
                        container.appendChild(bar2);

                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);
                        break;
                    }
                }
            }
        }

        update = () => {
            let progress = this.el;

            switch (this.type) {
                case "circular": {
                    let circle = document.getElementById(this.el.id + "-bar");
                    let percent = (parseFloat(progress["dataset"].value) / parseFloat(progress["dataset"]["max"]));
                    let str = percent * Math.PI * 2 * 20;
                    let dash = (1.0 - percent) * Math.PI * 2 * 20;

                    circle.style.strokeDasharray = str + ", " + dash;
                    break;
                }
                default: {
                    let bar = document.getElementById(this.el.id + "-bar");
                    let perc = (parseFloat(progress["dataset"].value) / parseFloat(progress["dataset"]["max"])) * 100.0;

                    bar.style.width = perc + "%";
                    break;
                }
            }
        };

        // TODO: Make this usable somehow?
        // noinspection ALL
        set = (value: number) => {
            if (parseFloat(this.el["dataset"].value) >= value)
                return;

            this.el["dataset"].value = value.toString();
            this.update();
        };

        static getSelectors(): Array<string> {
            return ["progress[data-type]"];
        }
    }
}