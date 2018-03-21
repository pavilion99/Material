namespace MaterialPage {
    export abstract class MaterialElement {
        constructor(protected el: HTMLElement) {

        }

        static getSelectors(): Array<string> {
            return null;
        }
    }
}
