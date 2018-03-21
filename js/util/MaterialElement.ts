namespace MaterialPage {
    export abstract class MaterialElement {
        constructor(private domEl: Element) {

        }

        static getSelectors(): Array<string> {
            return null;
        }
    }
}
