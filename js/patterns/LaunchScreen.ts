namespace MaterialPage {
    export class LaunchScreen extends MaterialPattern {
        private static screens: Array<LaunchScreen>;

        constructor (screen: Element) {
            super(new Map<string, Element>([["screen", screen]]));

            LaunchScreen.screens.push(this);
        }

        hide() {
            this.elements.get("screen").classList.add("hidden");
        }

        static hideAll() {
            LaunchScreen.screens.forEach(function(screen){screen.hide()});
        }
    }
}
