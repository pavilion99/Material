/// <reference path="../util/MaterialElement.ts" />
/// <reference path="../util/MaterialListener.ts" />

namespace MaterialPage {
    export class TextField extends MaterialElement implements MaterialListener {
        constructor(domEl: Element) {
            super(domEl);
        }

        onEvent(evt: CustomEvent) {
            switch (evt.type) {

            }
        }

        static getSelectors(): Array<string> {
            return ["input[type='text']"];
        }
    }
}