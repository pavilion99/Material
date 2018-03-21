namespace MaterialPage {
    export class BottomNavigation extends MaterialElement {
        private scrollFade: boolean;

        constructor(domEl: HTMLElement) {
            super(domEl);

            this.scrollFade = this.el.classList.contains("scroll-fade");
        }

        static getSelectors(): Array<string> {
            return ["nav.nav-bottom"];
        }

        scrollToggle = () => {
            if (!this.scrollFade)
                return;

            document.body.scrollTop > App.scrollTopOld
                ? this.el.classList.add("offscreen")
                : this.el.classList.remove("offscreen");
        };
    }
}