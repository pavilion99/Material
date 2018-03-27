/// <reference path="Dependencies.ts" />

namespace MaterialPage {
    export class App {
        private static currentScrollCycle: number = -1;
        private static scrollTimeout = -1;
        public elements: Array<MaterialElement> = [];
        public patterns: Array<MaterialPattern> = [];

        constructor() {
            this.addGlobalListeners();
        }

        init = () => {
            this.loadMaterialElements();
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

            App.currentScrollCycle = 0;

            App.scrollTimeout = window.setInterval(App.scroll.bind(window, curX, curY, toX, toY, 15));
        };

        static bezier(p0, p1, p2, p3, t): number {
            return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * t * t * p2 + Math.pow(t, 3) * p3;
        }

        private static scroll(startX: number, startY: number, endX: number, endY: number, total: number) {
            App.currentScrollCycle++;

            if (App.currentScrollCycle > total) {
                window.clearInterval(App.scrollTimeout);
                App.scrollTimeout = -1;
                App.currentScrollCycle = -1;
                return;
            }

            let t = App.currentScrollCycle / total;

            let scrollX = App.bezier(startX, 0.4 * startX, 0.2 * startX, endX, t);
            let scrollY = App.bezier(startY, 0.4 * startY, 0.2 * startY, endY, t);

            window.scrollTo(scrollX, scrollY);
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

            this.fadeImages();
            LaunchScreen.hideAll();

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
        }
    }
}

declare var app;
app = new MaterialPage.App();