namespace MaterialPage {
    export class Button extends MaterialElement {
        private focusPrevented: boolean;
        click = (e: MouseEvent) => {
            if (this.el.classList.contains("focus"))
                this.el.classList.remove("focus");

            let x = e.clientX;
            let y = e.clientY;

            let buttonCoords = this.el.getBoundingClientRect();
            x -= buttonCoords.left;
            y -= buttonCoords.top;

            this.animateStart = -1;
            window.requestAnimationFrame(this.animateBackground.bind(this, x, y));

            this.preventFocus();
        };

        constructor(domEl: HTMLElement) {
            super(domEl);

            this.el.addEventListener("focus", this.focus);
            this.el.addEventListener("blur", this.blur);
            this.el.addEventListener("mousedown", this.click);
        }
        focus = () => {
            if (!this.el.classList.contains("flat"))
                return;

            if (this.focusPrevented) {
                this.focusPrevented = false;
                return;
            }

            this.el.classList.add("focus");
        };
        blur = () => {
            if (!this.el.classList.contains("flat"))
                return;

            this.focusPrevented = false;
            this.el.classList.remove("focus");
        };
        animateBackground = (x, y, time) => {
            if (!this.animateStart || this.animateStart == -1)
                this.animateStart = time;

            let progress = time - this.animateStart;
            let percent = progress / 200;

            let color = null;

            let opacity = 0.4 - (0.4 * percent);

            if (document.body.classList.contains("theme-dark")) {
                let bgColor = getComputedStyle(this.el)["background-color"];
                color = App.getThemeFromColor(bgColor);

                if (color == null || bgColor == "rgb(224, 224, 224)") {
                    color = "rgba(0, 0, 0, " + opacity + ")";
                } else {
                    color = Color.colors[color + "-700"];

                    opacity = 1 - percent;
                    color = App.toRgba(color, opacity);
                }
            } else {
                color = Button.pressColor();
                color = "rgba(" + color + ", " + color + ", " + color + ", " + opacity + ")";
            }

            let size = (percent * 120) + 60;

            let backgroundStr: string = "radial-gradient(circle farthest-side at ";
            backgroundStr += "left " + x + "px top " + y + "px,";
            backgroundStr += color + " " + " 0%, ";
            backgroundStr += color + " " + size + "%, ";
            backgroundStr += "transparent " + size + "%)";

            this.el.style.backgroundImage = backgroundStr;

            if (progress < 200) {
                window.requestAnimationFrame(this.animateBackground.bind(this, x, y));
            } else {
                this.el.style.backgroundImage = "unset";
            }
        };

        preventFocus = () => {
            this.focusPrevented = true;
        };
        private animateStart: number = -1;

        static pressColor(): any {
            return document.body.classList.contains("theme-light") ?
                   153 :
                   document.body.classList.contains("theme-dark") ?
                   254 :
                   153;
        }

        static getSelectors(): Array<string> {
            return [".button"];
        }
    }
}