namespace MaterialPage {
    export abstract class MaterialPattern {
        constructor(protected elements: Map<string, Element>) {}

        static getSelectors(): Array<string> {
            return null;
        }
    }
}