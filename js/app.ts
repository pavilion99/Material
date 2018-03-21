/// <reference path="components/TextField.ts" />
namespace MaterialPage {
    class App {
        public elements: Array<MaterialElement>;

        constructor() {
            // Text Fields
            const textFieldSelectors: Array<String> = TextField.getSelectors();
            for (const selector in textFieldSelectors) {
                let elements: NodeListOf<Element> = document.querySelectorAll(selector);

                for (const element of elements) {
                    let textField: TextField = new TextField(element);
                }
            }
        }
    }
}