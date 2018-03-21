var MaterialPage;
(function (MaterialPage) {
    class MaterialElement {
        constructor(domEl) {
            this.domEl = domEl;
        }
        static getSelectors() {
            return null;
        }
    }
    MaterialPage.MaterialElement = MaterialElement;
})(MaterialPage || (MaterialPage = {}));
/// <reference path="../util/MaterialElement.ts" />
/// <reference path="../util/MaterialListener.ts" />
var MaterialPage;
(function (MaterialPage) {
    class TextField extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
        }
        onEvent(evt) {
            switch (evt.type) {
            }
        }
        static getSelectors() {
            return ["input[type='text']"];
        }
    }
    MaterialPage.TextField = TextField;
})(MaterialPage || (MaterialPage = {}));
/// <reference path="components/TextField.ts" />
var MaterialPage;
(function (MaterialPage) {
    class App {
        constructor() {
            // Text Fields
            const textFieldSelectors = MaterialPage.TextField.getSelectors();
            for (const selector in textFieldSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let textField = new MaterialPage.TextField(element);
                }
            }
        }
    }
})(MaterialPage || (MaterialPage = {}));
//# sourceMappingURL=material.js.map