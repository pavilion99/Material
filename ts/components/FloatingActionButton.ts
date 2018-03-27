namespace MaterialPage {
    export class FloatingActionButton extends MaterialElement {
        private backgroundRadius: number = 0;
        private interval: number = -1;
        private static multiplier: number = 10;

        constructor(domEl: HTMLElement) {
            super(domEl);

            let element = this.el;

            let top = parseInt(element["dataset"]["y"]);
            let left = parseInt(element["dataset"]["x"]);

            if (top < 16) {
                if (element.id !== null) {
                    console.warn("Your floating action button with id " + element.id  + " does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-y' attribute to resolve this.");
                } else {
                    console.warn("One of your floating action buttons does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-y' attribute to resolve this.");
                }
            }

            if (left < 16) {
                if (element.id !== null) {
                    console.warn("Your floating action button with id " + element.id  + " does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-x' attribute to resolve this.");
                } else {
                    console.warn("One of your floating action buttons does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-x' attribute to resolve this.");
                }
            }

            element.style.top = top + "px";
            element.style.left = left + "px";

            let icon = element["dataset"]["icon"];
            let iconSpan = document.createElement("SPAN");
            iconSpan.classList.add("material-icons");
            iconSpan.textContent = icon;

            /*var options = element.children;
            for (var i = 0; i < options; i++) {
                var el = options[i];

                var optionIconName = el["dataset"]["icon"];
                var optionIcon = document.createElement("SPAN");
                optionIcon.classList.add("material-icons");
                optionIcon.textContent = optionIconName;

                el.appendChild(optionIcon);
            }*/

            element.appendChild(iconSpan);

            let id = element.id;
            let options = document.querySelectorAll("[data-fab=" + id + "]");

            for (let i = 0; i < options.length; i++) {
                // TODO: Animate these damn options
                //noinspection JSUnusedLocalSymbols
                let el = options[i];
            }

            if (element.classList.contains("speed-dial")) {
                element.addEventListener("mousedown", this.speedDialToggle, true);
            }

            element.style.transform = "scale(1)";

            if(document.body.querySelectorAll("div.launch-screen").length > 0) {
                element.classList.add("delay");
            }

            element.addEventListener("mouseover", this.colorApply, true);
            element.addEventListener("focus", this.colorApply, true);
            element.addEventListener("mouseout", this.colorRemove, true);
            element.addEventListener("blur", this.colorRemove, true);
        }

        speedDialToggle = () => {
            //TODO: Make the speed-dial function work properly

            let el = this.el;
            let icon = <HTMLElement>el.children[0];

            if (el.classList.contains("selected")) {
                window.setTimeout(
                    function() {
                        icon.style.opacity = "0.4";
                        icon.style.transform = "rotate(-45deg)";

                        window.setTimeout(
                            function() {
                                icon.style.transition = "transform 0s, rotate 0s";

                                window.setTimeout(
                                    function() {
                                        icon.style.transform = "rotate(45deg)";
                                        icon.textContent = el.dataset["icon"];

                                        window.setTimeout(
                                            function() {
                                                el.classList.remove("selected");
                                                icon.style.transition = "transform 0.15s, rotate 0.15s";

                                                icon.style.transform = "unset";
                                                icon.style.opacity = "unset";
                                            },
                                            20
                                        );
                                    },
                                    10
                                );
                            },
                            100
                        );
                    }
                    ,10
                );
            } else {
                icon.classList.add("selected");

                window.setTimeout(
                    function() {
                        icon.textContent = "close";
                        icon.style.transition = "transform 0s, rotate 0s";

                        window.setTimeout(
                            function() {
                                icon.style.transform = "rotate(-45deg)";

                                window.setTimeout(
                                    function() {
                                        icon.style.transition = "transform 0.15s, opacity 0.15s";

                                        window.setTimeout(
                                            function() {
                                                icon.style.opacity = "1.0";
                                                icon.style.transform = "rotate(0deg)";
                                            },
                                            20
                                        );
                                    },
                                    10
                                );
                            },
                            20
                        );
                    },
                    150
                );
            }

            el.classList.toggle("selected");
        };

        colorApply = () => {
            // TODO: fade FAB color on click
            if (this.interval != -1)
                window.clearInterval(this.interval);

            this.interval = window.setInterval(this.backgroundGrow, 10);
        };

        colorRemove = () => {
            if (this.interval != -1)
                window.clearInterval(this.interval);

            this.interval = window.setInterval(this.backgroundShrink, 10);
        };

        backgroundGrow = () => {
            if (this.backgroundRadius >= 150) {
                window.clearInterval(this.interval);
                this.interval = -1;
                return;
            }

            let k = 0.001 * this.backgroundRadius;

            this.el.style.backgroundImage = "radial-gradient(circle at center, rgba(0, 0, 0, " + k + "), rgba(0, 0, 0, " + k + ")";

            this.backgroundRadius += FloatingActionButton.multiplier;
        };

        backgroundShrink = () => {
            if (this.backgroundRadius <= 0) {
                window.clearInterval(this.interval);
                this.interval = -1;
                return;
            }

            let k = 0.001 * this.backgroundRadius;

            this.el.style.backgroundImage = "radial-gradient(circle at center, rgba(0, 0, 0, " + k + "), rgba(0, 0, 0, " + k + ")";

            this.backgroundRadius += FloatingActionButton.multiplier;
        };

        static getSelectors(): Array<string> {
            return ["button.fab"];
        }
    }
}