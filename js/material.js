var MaterialPage;
(function (MaterialPage) {
    class MaterialElement {
        constructor(el) {
            this.el = el;
        }
        static getSelectors() {
            return null;
        }
    }
    MaterialPage.MaterialElement = MaterialElement;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class MaterialPattern {
        constructor(elements) {
            this.elements = elements;
        }
        static getSelectors() {
            return null;
        }
    }
    MaterialPage.MaterialPattern = MaterialPattern;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class BottomNavigation extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.scrollToggle = () => {
                if (!this.scrollFade)
                    return;
                document.body.scrollTop > MaterialPage.App.scrollTopOld
                    ? this.el.classList.add("offscreen")
                    : this.el.classList.remove("offscreen");
            };
            this.scrollFade = this.el.classList.contains("scroll-fade");
        }
        static getSelectors() {
            return ["nav.nav-bottom"];
        }
    }
    MaterialPage.BottomNavigation = BottomNavigation;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class ExpansionPanel extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.updateContent = () => {
                let open = this.el.classList.contains("open");
                if (open) {
                    this.primary.textContent = this.primary["dataset"]["openText"];
                    this.secondary.textContent = this.secondary["dataset"]["openText"];
                }
                else {
                    this.primary.textContent = this.primary["dataset"]["closedText"];
                    this.secondary.textContent = this.secondary["dataset"]["closedText"];
                }
            };
            this.togglePanel = () => {
                this.el.classList.toggle("open");
                this.updateContent();
            };
            this.closePanel = () => {
                this.el.classList.remove("open");
                this.updateContent();
            };
            let el = this.el;
            let primary = this.el.querySelector("div.summary.primary");
            let secondary = this.el.querySelector("div.summary.secondary");
            let container = this.el.querySelector("div.content-container");
            this.primary = primary;
            this.secondary = secondary;
            this.container = container;
            primary.textContent = primary["dataset"]["closedText"];
            secondary.textContent = secondary["dataset"]["closedText"];
            let expandIcon = this.el.querySelector("div.expand-icon");
            if (expandIcon == null) {
                let expand = document.createElement("DIV");
                expand.classList.add("expand-icon");
                let icon = document.createElement("SPAN");
                icon.classList.add("material-icons");
                icon.textContent = "expand_more";
                expand.appendChild(icon);
                el.insertBefore(expand, container);
                expandIcon = expand;
            }
            expandIcon.addEventListener("click", this.togglePanel);
            let actions = this.el.querySelector("div.actions");
            let clearfix = MaterialPage.App.getClearfix();
            container.appendChild(clearfix.cloneNode());
            let close = actions.querySelector("button[data-action='close']");
            if (close != null) {
                close.addEventListener("click", this.closePanel);
            }
            actions.appendChild(clearfix);
        }
        static getSelectors() {
            return ["div.expansion-panel"];
        }
    }
    MaterialPage.ExpansionPanel = ExpansionPanel;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class FloatingActionButton extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.backgroundRadius = 0;
            this.interval = -1;
            this.speedDialToggle = () => {
                //TODO: Make the speed-dial function work properly
                let el = this.el;
                let icon = el.children[0];
                if (el.classList.contains("selected")) {
                    window.setTimeout(function () {
                        icon.style.opacity = "0.4";
                        icon.style.transform = "rotate(-45deg)";
                        window.setTimeout(function () {
                            icon.style.transition = "transform 0s, rotate 0s";
                            window.setTimeout(function () {
                                icon.style.transform = "rotate(45deg)";
                                icon.textContent = el.dataset["icon"];
                                window.setTimeout(function () {
                                    el.classList.remove("selected");
                                    icon.style.transition = "transform 0.15s, rotate 0.15s";
                                    icon.style.transform = "unset";
                                    icon.style.opacity = "unset";
                                }, 20);
                            }, 10);
                        }, 100);
                    }, 10);
                }
                else {
                    icon.classList.add("selected");
                    window.setTimeout(function () {
                        icon.textContent = "close";
                        icon.style.transition = "transform 0s, rotate 0s";
                        window.setTimeout(function () {
                            icon.style.transform = "rotate(-45deg)";
                            window.setTimeout(function () {
                                icon.style.transition = "transform 0.15s, opacity 0.15s";
                                window.setTimeout(function () {
                                    icon.style.opacity = "1.0";
                                    icon.style.transform = "rotate(0deg)";
                                }, 20);
                            }, 10);
                        }, 20);
                    }, 150);
                }
                el.classList.toggle("selected");
            };
            this.colorApply = () => {
                // TODO: fade FAB color on click
                if (this.interval != -1)
                    window.clearInterval(this.interval);
                this.interval = window.setInterval(this.backgroundGrow, 10);
            };
            this.colorRemove = () => {
                if (this.interval != -1)
                    window.clearInterval(this.interval);
                this.interval = window.setInterval(this.backgroundShrink, 10);
            };
            this.backgroundGrow = () => {
                if (this.backgroundRadius >= 150) {
                    window.clearInterval(this.interval);
                    this.interval = -1;
                    return;
                }
                let k = 0.001 * this.backgroundRadius;
                this.el.style.backgroundImage = "radial-gradient(circle at center, rgba(0, 0, 0, " + k + "), rgba(0, 0, 0, " + k + ")";
                this.backgroundRadius += FloatingActionButton.multiplier;
            };
            this.backgroundShrink = () => {
                if (this.backgroundRadius <= 0) {
                    window.clearInterval(this.interval);
                    this.interval = -1;
                    return;
                }
                let k = 0.001 * this.backgroundRadius;
                this.el.style.backgroundImage = "radial-gradient(circle at center, rgba(0, 0, 0, " + k + "), rgba(0, 0, 0, " + k + ")";
                this.backgroundRadius += FloatingActionButton.multiplier;
            };
            let element = this.el;
            let top = parseInt(element["dataset"]["y"]);
            let left = parseInt(element["dataset"]["x"]);
            if (top < 16) {
                if (element.id !== null) {
                    console.warn("Your floating action button with id " + element.id + " does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-y' attribute to resolve this.");
                }
                else {
                    console.warn("One of your floating action buttons does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-y' attribute to resolve this.");
                }
            }
            if (left < 16) {
                if (element.id !== null) {
                    console.warn("Your floating action button with id " + element.id + " does not conform to material design guidelines. Floating action buttons should be at least 16px from all screen edges. Fix your floating action button's 'data-x' attribute to resolve this.");
                }
                else {
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
            if (document.body.querySelectorAll("div.launch-screen").length > 0) {
                element.classList.add("delay");
            }
            element.addEventListener("mouseover", this.colorApply, true);
            element.addEventListener("focus", this.colorApply, true);
            element.addEventListener("mouseout", this.colorRemove, true);
            element.addEventListener("blur", this.colorRemove, true);
        }
        static getSelectors() {
            return ["button.fab"];
        }
    }
    FloatingActionButton.multiplier = 10;
    MaterialPage.FloatingActionButton = FloatingActionButton;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class ImageFade extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.setUnready = () => {
                this.el.classList.add("unready");
            };
            this.fade = () => {
                this.el.classList.remove("unready");
            };
        }
        static getSelectors() {
            return ["img.fade"];
        }
    }
    MaterialPage.ImageFade = ImageFade;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class Picker extends MaterialPage.MaterialElement {
        // TODO: Figure out picker behavior
        static getSelectors() {
            return null;
        }
    }
    MaterialPage.Picker = Picker;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class Progress extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.update = () => {
                let progress = this.el;
                switch (this.type) {
                    case "circular": {
                        let circle = document.getElementById(this.el.id + "-bar");
                        let percent = (parseFloat(progress["dataset"].value) / parseFloat(progress["dataset"]["max"]));
                        let str = percent * Math.PI * 2 * 20;
                        let dash = (1.0 - percent) * Math.PI * 2 * 20;
                        circle.style.strokeDasharray = str + ", " + dash;
                        break;
                    }
                    default: {
                        let bar = document.getElementById(this.el.id + "-bar");
                        let perc = (parseFloat(progress["dataset"].value) / parseFloat(progress["dataset"]["max"])) * 100.0;
                        bar.style.width = perc + "%";
                        break;
                    }
                }
            };
            this.set = (value) => {
                if (parseFloat(this.el["dataset"].value) >= value)
                    return;
                this.el["dataset"].value = value.toString();
                this.update();
            };
            this.type = this.el["dataset"].type == "circular" ? "circular" : "linear";
            let type = this.el["dataset"].type;
            let value = this.el.hasAttribute("value");
            let ns = "http://www.w3.org/2000/svg";
            if (value) {
                switch (type) {
                    case "circular": {
                        // Determinate spinner
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.classList.add("circular");
                        container.id = this.el.id;
                        let rotate = document.createElementNS(ns, "svg");
                        rotate.classList.add("determinate-spinner");
                        rotate.setAttribute("width", "50");
                        rotate.setAttribute("height", "50");
                        let circle = document.createElementNS(ns, "circle");
                        circle.id = this.el.id + "-bar";
                        circle.setAttribute("cx", "25");
                        circle.setAttribute("cy", "25");
                        circle.setAttribute("r", "20");
                        rotate.appendChild(circle);
                        container.appendChild(rotate);
                        container.dataset.value = this.el.value.toString();
                        container.dataset["max"] = this.el.getAttribute("max");
                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);
                        window.setTimeout(this.update, 50);
                        break;
                    }
                    default: {
                        // Determinate linear
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.id = this.el.id;
                        let bar1 = document.createElement("DIV");
                        bar1.classList.add("determinate-bar");
                        container.appendChild(bar1);
                        bar1.id = this.el.id + "-bar";
                        container.dataset.value = this.el.value.toString();
                        container.dataset["max"] = this.el.getAttribute("max");
                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);
                        window.setTimeout(this.update, 50);
                        break;
                    }
                }
            }
            else {
                switch (type) {
                    case "circular": {
                        // Indeterminate spinner
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.classList.add("circular");
                        container.id = this.el.id;
                        let rotate = document.createElementNS(ns, "svg");
                        rotate.classList.add("indeterminate-spinner");
                        rotate.setAttribute("width", "50");
                        rotate.setAttribute("height", "50");
                        let circle = document.createElementNS(ns, "circle");
                        circle.setAttribute("cx", "25");
                        circle.setAttribute("cy", "25");
                        circle.setAttribute("r", "20");
                        rotate.appendChild(circle);
                        container.appendChild(rotate);
                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);
                        break;
                    }
                    default: {
                        // Indeterminate linear
                        let container = document.createElement("DIV");
                        container.classList.add("progress-container");
                        container.id = this.el.id;
                        let bar1 = document.createElement("DIV");
                        bar1.classList.add("indeterminate-bar");
                        let bar2 = document.createElement("DIV");
                        bar2.classList.add("indeterminate-bar");
                        container.appendChild(bar1);
                        container.appendChild(bar2);
                        this.el.parentNode.insertBefore(container, this.el);
                        this.el.parentNode.removeChild(this.el);
                        break;
                    }
                }
            }
        }
        static getSelectors() {
            return ["progress[data-type]"];
        }
    }
    MaterialPage.Progress = Progress;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class Snackbar {
        constructor(text, button) {
            this.text = text;
            this.button = button;
            if (!Snackbar.isRunning()) {
                Snackbar.running = true;
                Snackbar.run();
                Snackbar.timeout = window.setInterval(Snackbar.run, 5600);
            }
            Snackbar.snackbars.push(this);
        }
        static run() {
            if (Snackbar.snackbars.length == 0) {
                Snackbar.running = false;
                Snackbar.timeout = null;
                return;
            }
            let nextBar = Snackbar.snackbars.shift();
            let bar = document.createElement("DIV");
            bar.classList.add("snackbar");
            bar.classList.add("ready");
            let t = document.createElement("P");
            t.classList.add("snackbar-text");
            t.textContent = nextBar.text;
            bar.appendChild(t);
            if (nextBar.button) {
                let sep = document.createElement("SPAN");
                sep.classList.add("separator");
                bar.appendChild(sep);
                let action = document.createElement("P");
                action.classList.add("snackbar-text");
                action.classList.add("action");
                action.classList.add("text-" + nextBar.button["color"]);
                action.addEventListener("click", nextBar.button["callback"]);
                action.textContent = nextBar.button["text"];
                bar.appendChild(action);
                let cfix = document.createElement("DIV");
                cfix.classList.add("clearfix");
                bar.appendChild(cfix);
            }
            document.body.appendChild(bar);
            let bottomNav = document.body.querySelectorAll("nav.nav-bottom").length != 0;
            if (bottomNav) {
                bar.classList.add("nav-bottom");
            }
            window.setTimeout(function () {
                bar.classList.remove("ready");
            }, 10);
            window.setTimeout(function () {
                bar.classList.add("done");
            }, 200 + 5000);
            window.setTimeout(function () {
                bar.parentNode.removeChild(bar);
            }, 200 + 5000 + 200);
        }
        static isRunning() {
            return Snackbar.running;
        }
    }
    MaterialPage.Snackbar = Snackbar;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class TextField extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.change = () => {
                let label = this.el.querySelector("span.text-field-label");
                let hr = this.el.querySelector("hr.text-field-separator");
                let field = this.el.querySelector("input[type='text']");
                if (document.activeElement === field) {
                    if (!label.classList.contains("active"))
                        label.classList.add("active");
                }
                else {
                    let isError = false;
                    if (typeof window[this.el["dataset"]["errorTest"]] === "function")
                        isError = window[this.el["dataset"]["errorTest"]](this.el.value);
                    let errorColor = "red";
                    if (this.el["dataset"]["errorColor"])
                        errorColor = this.el["dataset"]["errorColor"];
                    let clazz = "text-" + errorColor + "-500";
                    let clazz2 = "border-" + errorColor + "-500";
                    if (isError) {
                        hr.classList.add(clazz2);
                        label.classList.add(clazz);
                    }
                    else {
                        hr.classList.remove(clazz2);
                        label.classList.remove(clazz);
                    }
                    if (this.el.value === "") {
                        if (label.classList.contains("active"))
                            label.classList.remove("active");
                    }
                    else {
                        if (!label.classList.contains("active"))
                            label.classList.add("active");
                    }
                }
            };
            let textField = document.createElement("div");
            textField.classList.add("text-field");
            this.el = textField;
            let label = document.createElement("span");
            label.classList.add("text-field-label");
            label.textContent = domEl.getAttribute("placeholder");
            let input = document.createElement("input");
            for (let i = 0; i < domEl.attributes.length; i++) {
                input.setAttribute(domEl.attributes[i].nodeName, domEl.attributes[i].nodeValue);
            }
            input.addEventListener("focus", this.change);
            input.addEventListener("blur", this.change);
            input.setAttribute("placeholder", "");
            for (let x in domEl["dataset"]) {
                if (!domEl["dataset"].hasOwnProperty(x))
                    continue;
                input["dataset"][x] = domEl["dataset"][x];
            }
            let hr = document.createElement("hr");
            hr.classList.add("text-field-separator");
            textField.appendChild(label);
            textField.appendChild(input);
            textField.appendChild(hr);
            domEl.parentNode.insertBefore(textField, domEl);
            domEl.parentNode.removeChild(domEl);
        }
        static getSelectors() {
            return ["input[type='text']:not(.native)"];
        }
    }
    MaterialPage.TextField = TextField;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class LaunchScreen extends MaterialPage.MaterialPattern {
        constructor(screen) {
            super(new Map([["screen", screen]]));
            this.hide = () => {
                this.elements.get("screen").classList.add("hidden");
            };
            LaunchScreen.screens.push(this);
        }
        static hideAll() {
            LaunchScreen.screens.forEach(function (screen) { screen.hide(); });
        }
        static getSelectors() {
            return ["div.launch-screen"];
        }
    }
    LaunchScreen.screens = [];
    MaterialPage.LaunchScreen = LaunchScreen;
})(MaterialPage || (MaterialPage = {}));
/// <reference path="components/MaterialElement.ts" />
/// <reference path="patterns/MaterialPattern.ts" />
/// <reference path="components/BottomNavigation.ts" />
/// <reference path="components/ExpansionPanel.ts" />
/// <reference path="components/FloatingActionButton.ts" />
/// <reference path="components/ImageFade.ts" />
/// <reference path="components/Picker.ts" />
/// <reference path="components/Progress.ts" />
/// <reference path="components/Snackbar.ts" />
/// <reference path="components/TextField.ts" />
/// <reference path="patterns/LaunchScreen.ts" /> 
/// <reference path="dependencies.ts" />
var MaterialPage;
(function (MaterialPage) {
    class App {
        constructor() {
            this.elements = [];
            this.patterns = [];
            this.init = () => {
                this.loadMaterialElements();
            };
            this.preInit = () => {
                const imageFadeSelectors = MaterialPage.ImageFade.getSelectors();
                for (const selector of imageFadeSelectors) {
                    let elements = document.querySelectorAll(selector);
                    for (const element of elements) {
                        let imageFade = new MaterialPage.ImageFade(element);
                        this.elements.push(imageFade);
                    }
                }
                this.initImages();
                this.loadPatterns();
            };
            this.initImages = () => {
                console.log(this);
                console.log(this.elements);
                for (const element of this.elements) {
                    if (element instanceof MaterialPage.ImageFade) {
                        element.setUnready();
                    }
                }
            };
            this.addGlobalListeners();
        }
        loadPatterns() {
            let launchScreenSelectors = MaterialPage.LaunchScreen.getSelectors();
            for (const selector of launchScreenSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let launchScreen = new MaterialPage.LaunchScreen(element);
                    this.patterns.push(launchScreen);
                }
            }
        }
        loadMaterialElements() {
            // Text Fields
            const textFieldSelectors = MaterialPage.TextField.getSelectors();
            for (const selector of textFieldSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let textField = new MaterialPage.TextField(element);
                    this.elements.push(textField);
                }
            }
            // Expansion Panels
            const expansionPanelSelectors = MaterialPage.ExpansionPanel.getSelectors();
            for (const selector of expansionPanelSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let expansionPanel = new MaterialPage.ExpansionPanel(element);
                    this.elements.push(expansionPanel);
                }
            }
            // Progress Elements
            const progressSelectors = MaterialPage.Progress.getSelectors();
            for (const selector of progressSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let progress = new MaterialPage.Progress(element);
                    this.elements.push(progress);
                }
            }
            // Floating Action Buttons
            const fabSelectors = MaterialPage.FloatingActionButton.getSelectors();
            for (const selector of fabSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let floatingActionButton = new MaterialPage.FloatingActionButton(element);
                    this.elements.push(floatingActionButton);
                }
            }
            this.fadeImages();
            MaterialPage.LaunchScreen.hideAll();
        }
        addGlobalListeners() {
            window.addEventListener("scroll", this.processScroll);
            window.addEventListener("load", this.init);
            window.addEventListener("DOMContentLoaded", this.preInit);
        }
        processScroll() {
            for (const element of this.elements) {
                if (element instanceof MaterialPage.BottomNavigation) {
                    element.scrollToggle();
                }
            }
            App.scrollTopOld = document.body.scrollTop;
        }
        fadeImages() {
            for (const element of this.elements) {
                if (element instanceof MaterialPage.ImageFade) {
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
    App.scrollTopOld = 0;
    MaterialPage.App = App;
})(MaterialPage || (MaterialPage = {}));
app = new MaterialPage.App();
//# sourceMappingURL=material.js.map