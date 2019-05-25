namespace MaterialPage {
    export class NavigationDrawer extends MaterialPattern {
        close = (e) => {
            if (e != null && e.target !== this.parent)
                return;

            this.parent.style.visibility = "visible";
            this.parent.classList.remove("open");

            window.setTimeout(() => {this.parent.style.visibility = ""}, 200);
        };
        toggle = () => {
            if (this.parent.classList.contains("permanent") && window.innerWidth >= 1024)
                return;

            if (this.parent.classList.contains("open"))
                this.close(null);
            else {
                this.parent.classList.add("open");
            }
        };
        private parent: HTMLElement;

        constructor(domEl: HTMLElement) {
            super(new Map<string, Element>([["drawer", domEl]]));

            this.parent = this.elements.get("drawer").parentElement;

            let openers = document.querySelectorAll("[data-action='toggle'], nav.app-bar button.nav-icon");
            for (const opener of openers) {
                opener.addEventListener("click", this.toggle);
            }

            this.parent.addEventListener("click", this.close, true);
        }

        static getSelectors(): Array<string> {
            return ["nav.nav-drawer"];
        }
    }
}