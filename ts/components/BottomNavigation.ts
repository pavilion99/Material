namespace MaterialPage {
    export class BottomNavigation extends MaterialElement {
        private static oldScrollTop: number = -1;
        scrollFade = (): boolean => {
            return this.el.classList.contains("scroll-fade");
        };
        scrollToggle = () => {
            if (window.innerWidth >= 960) {
                this.el.classList.remove("offscreen");
                return;
            }

            if (!this.scrollFade())
                return;

            let top = window.scrollY;
            let down = top > BottomNavigation.oldScrollTop;

            if (down) {
                this.el.classList.add("offscreen");
            } else {
                this.el.classList.remove("offscreen");
            }

            BottomNavigation.oldScrollTop = top;
        };
        toggleActive = (e) => {
            let link = e.currentTarget;

            if (link.nodeName !== "A")
                return;

            if (link.classList.contains("active")) {
                App.scrollWindow(0, 0);
                return;
            }

            let links = this.el.children;

            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove("active");
            }

            link.classList.add("active");

            if (!(<HTMLElement>link).dataset.hasOwnProperty("color"))
                return;

            let newColor = null;
            if (Color.colors.hasOwnProperty((<HTMLElement>link).dataset["color"])) {
                newColor = Color.colors[(<HTMLElement>link).dataset["color"]];
            } else {
                newColor = (<HTMLElement>link).dataset["color"];
            }

            this.newBackgroundColor = newColor;
            this.oldBackgroundColor = getComputedStyle(this.el).backgroundColor;
            let x = e.clientX;
            let y = e.clientY;

            let rect = this.el.getBoundingClientRect();

            this.backgroundStartCoordinates.x = x - rect.left;
            this.backgroundStartCoordinates.y = y - rect.top;

            this.cycle = 0;

            this.backgroundInterval = window.setInterval(this.animateBackground, 4);
        };
        animateBackground = () => {
            this.cycle++;

            if (this.cycle > this.totalCycles) {
                window.clearInterval(this.backgroundInterval);
                this.el.style.cssText += ";background-color: " + this.newBackgroundColor + " !important;";
                this.el.style.backgroundImage = "unset";
                return;
            }

            let percent = this.cycle / this.totalCycles;
            percent *= 100;
            this.el.style.backgroundImage = "radial-gradient(circle farthest-side at left " + this.backgroundStartCoordinates.x + "px top " +
                this.backgroundStartCoordinates.y + "px, " + this.newBackgroundColor + " 0%, " + this.newBackgroundColor + " " + percent + "%, transparent " + percent + "%)";
        };
        private backgroundStartCoordinates = {"x": -1, "y": -1};
        private backgroundInterval = -1;
        private oldBackgroundColor;
        private newBackgroundColor;
        private cycle = -1;
        private totalCycles = 50;

        constructor(domEl: HTMLElement) {
            super(domEl);

            let links = this.el.children;
            for (let i = 0; i < links.length; i++) {
                (<HTMLElement>links[i]).addEventListener("click", this.toggleActive, true);
            }

            window.addEventListener("scroll", this.scrollToggle);
        }

        static getSelectors(): Array<string> {
            return ["nav.nav-bottom"];
        }
    }
}