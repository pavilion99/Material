namespace MaterialPage {
    export abstract class MaterialElement {
        protected static elements: Map<HTMLElement, MaterialElement> = new Map<HTMLElement, MaterialElement>();

        constructor(protected el: HTMLElement) {
            MaterialElement.elements.set(this.el, this);
        }

        static getSelectors(): Array<string> {
            return null;
        }
    }
}
