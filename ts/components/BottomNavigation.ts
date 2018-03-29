namespace MaterialPage {
    export class BottomNavigation extends MaterialElement {
        private static oldScrollTop: number = -1;
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

            this.backgroundAnimateStart = -1;

            window.requestAnimationFrame(this.animateBackground);
        };
        animateBackground = (time) => {
            if (!this.backgroundAnimateStart || this.backgroundAnimateStart == -1)
                this.backgroundAnimateStart = time;

            let progress = time - this.backgroundAnimateStart;

            let percent = (100 * progress) / 150;
            this.el.style.backgroundImage = "radial-gradient(circle farthest-side at left " + this.backgroundStartCoordinates.x + "px top " +
                this.backgroundStartCoordinates.y + "px, " + this.newBackgroundColor + " 0%, " + this.newBackgroundColor + " " + percent + "%, transparent " + percent + "%)";

            if (progress < 150)
                window.requestAnimationFrame(this.animateBackground);
            else {
                this.el.style.backgroundColor = this.newBackgroundColor;
                this.el.style.backgroundImage = "unset";
            }
        };
        private backgroundStartCoordinates = {"x": -1, "y": -1};
        private oldBackgroundColor;
        private newBackgroundColor;
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
        private backgroundAnimateStart: number = -1;

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