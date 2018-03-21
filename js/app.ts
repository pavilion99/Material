/// <reference path="dependencies.ts" />

namespace MaterialPage {
    export class App {
        public static scrollTopOld: number = 0;
        public elements: Array<MaterialElement>;

        constructor() {
            this.addGlobalListeners();
        }

        init() {
            this.loadMaterialElements();
        }

        preInit() {
            this.initImages();
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

            this.fadeImages();
            LaunchScreen.hideAll();
        }

        addGlobalListeners() {
            window.addEventListener("scroll", this.processScroll);
            window.addEventListener("load", this.init);
            window.addEventListener("DOMContentLoaded", this.preInit);
        }

        processScroll() {
            for (const element of this.elements) {
                if (element instanceof BottomNavigation) {
                    element.scrollToggle();
                }
            }

            App.scrollTopOld = document.body.scrollTop;
        }

        initImages() {
            for (const element of this.elements) {
                if (element instanceof ImageFade) {
                    element.setUnready();
                }
            }
        }

        fadeImages() {
            for (const element of this.elements) {
                if (element instanceof ImageFade) {
                    element.fade();
                }
            }
        }

        static getClearfix() {
            let clearfix = document.createElement("SPAN");
            clearfix.classList.add("clearfix");

            return clearfix;
        }
    }
}