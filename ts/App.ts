/// <reference path="Dependencies.ts" />

namespace MaterialPage {
    export class App {
        public elements: Array<MaterialElement> = [];
        public patterns: Array<MaterialPattern> = [];
        private static scrollStartTimestamp: number = -1;

        constructor() {
            this.addGlobalListeners();
        }

        init = () => {

            this.fadeImages();
            window.setTimeout(LaunchScreen.hideAll, 5600);
        };

        preInit = () => {
            const imageFadeSelectors: Array<string> = ImageFade.getSelectors();
            for (const selector of imageFadeSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let imageFade: ImageFade = new ImageFade(<HTMLElement>element);
                    this.elements.push(imageFade);
                }
            }

            this.loadMaterialElements();
            this.initImages();
            this.loadPatterns();
        };

        loadPatterns() {
            let launchScreenSelectors: Array<string> = LaunchScreen.getSelectors();
            for (const selector of launchScreenSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let launchScreen: LaunchScreen = new LaunchScreen(element);
                    this.patterns.push(launchScreen);
                }
            }

            let navDrawerSelectors: Array<string> = NavigationDrawer.getSelectors();
            for (const selector of navDrawerSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let navDrawer: NavigationDrawer = new NavigationDrawer(<HTMLElement>element);
                    this.patterns.push(navDrawer);
                }
            }
        }

        initImages = () => {
            for (const element of this.elements) {
                if (element instanceof ImageFade) {
                    element.setUnready();
                }
            }
        };

        static scrollWindow(toX: number, toY: number) {
            let curX = window.scrollX;
            let curY = window.scrollY;

            App.scrollStartTimestamp = -1;

            window.requestAnimationFrame(App.scroll.bind(window, curX, curY, toX, toY));
        };

        static bezier(p0, p1, p2, p3, t): number {
            return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * t * t * p2 + Math.pow(t, 3) * p3;
        }

        static getThemeFromColor(color: string) {
            if (color.indexOf("rgb") !== -1) {
                color = color.replace("rgb(", "");
                color = color.replace(")", "");

                let colors = color.split(",");
                let hex = "#";
                for (let rgbComp in colors) {
                    if (colors.hasOwnProperty(rgbComp)) {
                        let comp = parseInt(colors[rgbComp]);
                        hex += comp.toString(16).toUpperCase();
                    }
                }

                color = hex;
            }

            for (const materialColor in Color.colors) {
                if (Color.colors.hasOwnProperty(materialColor)) {
                    if (Color.colors[materialColor] == color) {
                        return materialColor.split("-")[0];
                    }
                }
            }

            return null;
        }

        addGlobalListeners() {
            window.addEventListener("load", this.init);
            window.addEventListener("DOMContentLoaded", this.preInit);
        }

        fadeImages() {
            for (const element of this.elements) {
                if (element instanceof ImageFade) {
                    element.fade();
                }
            }
        }

        // noinspection ALL
        static toRgb(hex: string) {
            hex = hex.replace("#", "");

            const r = parseInt(hex.substr(0, 2), 16).toString();
            const g = parseInt(hex.substr(2, 2), 16).toString();
            const b = parseInt(hex.substr(4, 2), 16).toString();

            return "rgb(" + r + ", " + g + ", " + b + ")";
        }

        static toRgba(hex: string, opacity: number) {
            hex = hex.replace("#", "");

            const r = parseInt(hex.substr(0, 2), 16).toString();
            const g = parseInt(hex.substr(2, 2), 16).toString();
            const b = parseInt(hex.substr(4, 2), 16).toString();

            return "rgba(" + r + ", " + g + ", " + b + ", " + opacity.toString() + ")";
        }

        private static scroll(startX: number, startY: number, endX: number, endY: number, time: number) {
            if (!App.scrollStartTimestamp || App.scrollStartTimestamp == -1)
                App.scrollStartTimestamp = time;

            let progress = time - App.scrollStartTimestamp;

            let t = progress / 150;

            let scrollX = App.bezier(startX, 0.4 * startX, 0.2 * startX, endX, t);
            let scrollY = App.bezier(startY, 0.4 * startY, 0.2 * startY, endY, t);

            window.scrollTo(scrollX, scrollY);

            if (progress < 150) {
                window.requestAnimationFrame(App.scroll.bind(window, startX, startY, endX, endY));
            }
        }

        loadMaterialElements() {
            // Text Fields
            const textFieldSelectors: Array<string> = TextField.getSelectors();
            for (const selector of textFieldSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let textField: TextField = new TextField(<HTMLElement>element);
                    this.elements.push(textField);
                }
            }

            // Expansion Panels
            const expansionPanelSelectors: Array<string> = ExpansionPanel.getSelectors();
            for (const selector of expansionPanelSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let expansionPanel: ExpansionPanel = new ExpansionPanel(<HTMLElement>element);
                    this.elements.push(expansionPanel);
                }
            }

            // Progress Elements
            const progressSelectors: Array<string> = Progress.getSelectors();
            for (const selector of progressSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let progress: Progress = new Progress(<HTMLElement>element);
                    this.elements.push(progress);
                }
            }

            // Floating Action Buttons
            const fabSelectors: Array<string> = FloatingActionButton.getSelectors();
            for (const selector of fabSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let floatingActionButton: FloatingActionButton = new FloatingActionButton(<HTMLElement>element);
                    this.elements.push(floatingActionButton);
                }
            }

            // Buttons
            const buttonSelectors: Array<string> = Button.getSelectors();
            for (const selector of buttonSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let button: Button = new Button(<HTMLElement>element);
                    this.elements.push(button);
                }
            }

            // Dialogs
            const dialogSelectors: Array<string> = Dialog.getSelectors();
            for (const selector of dialogSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let dialog: Dialog = new Dialog(<HTMLElement>element);
                    this.elements.push(dialog);
                }
            }

            // Grid Lists
            const gridListSelectors: Array<string> = GridList.getSelectors();
            for (const selector of gridListSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let gridList: GridList = new GridList(<HTMLElement>element);
                    gridList.resize();
                    this.elements.push(gridList);
                }
            }

            // Bottom Navigation
            const bottomNavSelectors: Array<string> = BottomNavigation.getSelectors();
            for (const selector of bottomNavSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let bottomNav: BottomNavigation = new BottomNavigation(<HTMLElement>element);
                    this.elements.push(bottomNav);
                }
            }

            // Cards
            const cardSelectors: Array<string> = Card.getSelectors();
            for (const selector of cardSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let card: Card = new Card(<HTMLElement>element);
                    this.elements.push(card);
                }
            }
        }
    }
}

declare var app;
app = new MaterialPage.App();