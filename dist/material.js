var MaterialPage;
(function (MaterialPage) {
    class MaterialElement {
        constructor(el) {
            this.el = el;
            MaterialElement.elements.set(this.el, this);
        }
        static getSelectors() {
            return null;
        }
    }
    MaterialElement.elements = new Map();
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
    class Color {
    }
    Color.colors = {
        "red-50": "#FFEBEE",
        "red-100": "#FFCDD2",
        "red-200": "#EF9A9A",
        "red-300": "#E57373",
        "red-400": "#EF5350",
        "red-500": "#F44336",
        "red-600": "#E53935",
        "red-700": "#D32F2F",
        "red-800": "#C62828",
        "red-900": "#B71C1C",
        "red-a-100": "#FF8A80",
        "red-a-200": "#FF5252",
        "red-a-400": "#FF1744",
        "red-a-700": "#D50000",
        // Pink
        "pink-50": "#FCE4EC",
        "pink-100": "#F8BBD0",
        "pink-200": "#F48FB1",
        "pink-300": "#F06292",
        "pink-400": "#EC407A",
        "pink-500": "#E91E63",
        "pink-600": "#D81B60",
        "pink-700": "#C2185B",
        "pink-800": "#AD1457",
        "pink-900": "#880E4F",
        "pink-a-100": "#FF80AB",
        "pink-a-200": "#FF4081",
        "pink-a-400": "#F50057",
        "pink-a-700": "#C51162",
        // Purple
        "purple-50": "#F3E5F5",
        "purple-100": "#E1BEE7",
        "purple-200": "#CE93D8",
        "purple-300": "#B168C8",
        "purple-400": "#AB47BC",
        "purple-500": "#9C27B0",
        "purple-600": "#8E24AA",
        "purple-700": "#7B1FA2",
        "purple-800": "#6A1B9A",
        "purple-900": "#4A148C",
        "purple-a-100": "#EA80FC",
        "purple-a-200": "#E040FB",
        "purple-a-400": "#D500F9",
        "purple-a-700": "#AA00FF",
        // Deep Purple
        "deep-purple-50": "#EDE7F6",
        "deep-purple-100": "#D1C4E9",
        "deep-purple-200": "#B39DDB",
        "deep-purple-300": "#9575CD",
        "deep-purple-400": "#7E57C2",
        "deep-purple-500": "#673AB7",
        "deep-purple-600": "#5E35B1",
        "deep-purple-700": "#512DA8",
        "deep-purple-800": "#4527A0",
        "deep-purple-900": "#311B92",
        "deep-purple-a-100": "#B388FF",
        "deep-purple-a-200": "#7C4DFF",
        "deep-purple-a-400": "#651FFF",
        "deep-purple-a-700": "#6200EA",
        // Indigo
        "indigo-50": "#E8EAF6",
        "indigo-100": "#C5CAE9",
        "indigo-200": "#9FA8DA",
        "indigo-300": "#7986CB",
        "indigo-400": "#5C6BC0",
        "indigo-500": "#3F5AB5",
        "indigo-600": "#3949AB",
        "indigo-700": "#303F9F",
        "indigo-800": "#283593",
        "indigo-900": "#1A237E",
        "indigo-a-100": "#8C9EFF",
        "indigo-a-200": "#536DFE",
        "indigo-a-400": "#3D6AFE",
        "indigo-a-700": "#304FFE",
        // Blue
        "blue-50": "#E3F2FD",
        "blue-100": "#BBDEFB",
        "blue-200": "#90CAF9",
        "blue-300": "#64B5F6",
        "blue-400": "#42A5F5",
        "blue-500": "#2196FE",
        "blue-600": "#1E88E5",
        "blue-700": "#1976D2",
        "blue-800": "#1565C0",
        "blue-900": "#0D47A1",
        "blue-a-100": "#82B1FF",
        "blue-a-200": "#448AFF",
        "blue-a-400": "#2979FF",
        "blue-a-700": "#2962FF",
        // Light Blue
        "light-blue-50": "#E1F5FE",
        "light-blue-100": "#B3E5FC",
        "light-blue-200": "#81D4FA",
        "light-blue-300": "#4FC3F7",
        "light-blue-400": "#29B6F6",
        "light-blue-500": "#03A9F4",
        "light-blue-600": "#039BE5",
        "light-blue-700": "#0288D1",
        "light-blue-800": "#0277BD",
        "light-blue-900": "#01579B",
        "light-blue-a-100": "#80D8FF",
        "light-blue-a-200": "#40C4FF",
        "light-blue-a-400": "#00B0FF",
        "light-blue-a-700": "#0091EA",
        // Cyan
        "cyan-50": "#E0F7FA",
        "cyan-100": "#B2EBF2",
        "cyan-200": "#80DEEA",
        "cyan-300": "#4DD0E1",
        "cyan-400": "#26C6DA",
        "cyan-500": "#00BCD4",
        "cyan-600": "#00ACC1",
        "cyan-700": "#0097A7",
        "cyan-800": "#00838F",
        "cyan-900": "#006064",
        "cyan-a-100": "#80D8FF",
        "cyan-a-200": "#40C4FF",
        "cyan-a-400": "#00B0FF",
        "cyan-a-700": "#0091EA",
        // Teal
        "teal-50": "#E0F2F1",
        "teal-100": "#B2DFDB",
        "teal-200": "#80CBC4",
        "teal-300": "#4DB6AC",
        "teal-400": "#26A69A",
        "teal-500": "#009688",
        "teal-600": "#00897B",
        "teal-700": "#00796B",
        "teal-800": "#00695C",
        "teal-900": "#004D40",
        "teal-a-100": "#A7FFEB",
        "teal-a-200": "#64FFDA",
        "teal-a-400": "#1DE9B6",
        "teal-a-700": "#00BFA5",
        // Green
        "green-50": "#E8F5E9",
        "green-100": "#C8E6C9",
        "green-200": "#A5D6A7",
        "green-300": "#81C784",
        "green-400": "#66BB6A",
        "green-500": "#4CAF50",
        "green-600": "#43A047",
        "green-700": "#388E3C",
        "green-800": "#2E7D32",
        "green-900": "#1B5E20",
        "green-a-100": "#B9F6CA",
        "green-a-200": "#69F0AE",
        "green-a-400": "#00E676",
        "green-a-700": "#00C853",
        // Light Green
        "light-green-50": "#F1F8E9",
        "light-green-100": "#DCEDC8",
        "light-green-200": "#C5E1A5",
        "light-green-300": "#AED581",
        "light-green-400": "#9CCC65",
        "light-green-500": "#8BC34A",
        "light-green-600": "#7CB342",
        "light-green-700": "#689F38",
        "light-green-800": "#448B2F",
        "light-green-900": "#33691E",
        "light-green-a-100": "#CCFF90",
        "light-green-a-200": "#B2FF59",
        "light-green-a-400": "#76FF03",
        "light-green-a-700": "#64DD17",
        // Lime
        "lime-50": "#F9FBE7",
        "lime-100": "#F0F4C3",
        "lime-200": "#E6EE9C",
        "lime-300": "#DCE775",
        "lime-400": "#D4E157",
        "lime-500": "#CDDC39",
        "lime-600": "#C0CA33",
        "lime-700": "#AFB42B",
        "lime-800": "#939D24",
        "lime-900": "#827717",
        "lime-a-100": "#F4FF81",
        "lime-a-200": "#EEFF41",
        "lime-a-400": "#C6FF00",
        "lime-a-700": "#AEEA00",
        // Yellow
        "yellow-50": "#FFFDE7",
        "yellow-100": "#FFF9C4",
        "yellow-200": "#FFF59D",
        "yellow-300": "#FFF176",
        "yellow-400": "#FFEE58",
        "yellow-500": "#FFEB3B",
        "yellow-600": "#FDD835",
        "yellow-700": "#FBC02D",
        "yellow-800": "#F9A825",
        "yellow-900": "#F57F17",
        "yellow-a-100": "#FFFF8D",
        "yellow-a-200": "#FFFF00",
        "yellow-a-400": "#FFEA00",
        "yellow-a-700": "#FFD600",
        // Amber
        "amber-50": "#FFF8E1",
        "amber-100": "#FFECB3",
        "amber-200": "#FFE082",
        "amber-300": "#FFD54F",
        "amber-400": "#FFCA28",
        "amber-500": "#FFC107",
        "amber-600": "#FFB300",
        "amber-700": "#FFA000",
        "amber-800": "#FF8F00",
        "amber-900": "#FF6F00",
        "amber-a-100": "#FFE57F",
        "amber-a-200": "#FFD740",
        "amber-a-400": "#FFC400",
        "amber-a-700": "#FFAB00",
        // Orange
        "orange-50": "#FFF3E0",
        "orange-100": "#FFE0B2",
        "orange-200": "#FFCC80",
        "orange-300": "#FFB74D",
        "orange-400": "#FFA726",
        "orange-500": "#FF9800",
        "orange-600": "#FB8C00",
        "orange-700": "#F57C00",
        "orange-800": "#EF6C00",
        "orange-900": "#E65100",
        "orange-a-100": "#FFD180",
        "orange-a-200": "#FFAB40",
        "orange-a-400": "#FF9100",
        "orange-a-700": "#FF6D00",
        // Deep Orange
        "deep-orange-50": "#FBE9E7",
        "deep-orange-100": "#FFCCBC",
        "deep-orange-200": "#FFAB91",
        "deep-orange-300": "#FF8A65",
        "deep-orange-400": "#FF7043",
        "deep-orange-500": "#FF5722",
        "deep-orange-600": "#F4511E",
        "deep-orange-700": "#E64A19",
        "deep-orange-800": "#D84315",
        "deep-orange-900": "#BF360C",
        "deep-orange-a-100": "#FF9E80",
        "deep-orange-a-200": "#FF6E40",
        "deep-orange-a-400": "#FF3D00",
        "deep-orange-a-700": "#DD2C00",
        // Brown
        "brown-50": "#EFEBE9",
        "brown-100": "#D7CCC8",
        "brown-200": "#BCAAA4",
        "brown-300": "#A1887F",
        "brown-400": "#8D6E63",
        "brown-500": "#795548",
        "brown-600": "#6D4C41",
        "brown-700": "#5D4037",
        "brown-800": "#4E342E",
        "brown-900": "#3E2723",
        // Grey
        "grey-50": "#FAFAFA",
        "grey-100": "#F5F5F5",
        "grey-200": "#EEEEEE",
        "grey-300": "#E0E0E0",
        "grey-400": "#BDBDBD",
        "grey-500": "#9E9E9E",
        "grey-600": "#757575",
        "grey-700": "#616161",
        "grey-800": "#424242",
        "grey-900": "#212121",
        // Blue Grey
        "blue-grey-50": "#ECEFF1",
        "blue-grey-100": "#CFD8DC",
        "blue-grey-200": "#B0BEC5",
        "blue-grey-300": "#90A4AE",
        "blue-grey-400": "#78909C",
        "blue-grey-500": "#607D8B",
        "blue-grey-600": "#546E7A",
        "blue-grey-700": "#455A64",
        "blue-grey-800": "#37474F",
        "blue-grey-900": "#263238",
        // Standard colors
        "black": "#000000",
        "white": "#FFFFFF"
    };
    MaterialPage.Color = Color;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class BottomNavigation extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.toggleActive = (e) => {
                let link = e.currentTarget;
                if (link.nodeName !== "A")
                    return;
                if (link.classList.contains("active")) {
                    MaterialPage.App.scrollWindow(0, 0);
                    return;
                }
                let links = this.el.children;
                for (let i = 0; i < links.length; i++) {
                    links[i].classList.remove("active");
                }
                link.classList.add("active");
                if (!link.dataset.hasOwnProperty("color"))
                    return;
                let newColor = null;
                if (MaterialPage.Color.colors.hasOwnProperty(link.dataset["color"])) {
                    newColor = MaterialPage.Color.colors[link.dataset["color"]];
                }
                else {
                    newColor = link.dataset["color"];
                }
                this.newBackgroundColor = newColor;
                this.oldBackgroundColor = getComputedStyle(this.el).backgroundColor;
                let x = e.clientX;
                let y = e.clientY;
                let rect = this.el.getBoundingClientRect();
                this.backgroundStartCoordinates.x = x - rect.left;
                this.backgroundStartCoordinates.y = y - rect.top;
                this.backgroundAnimateStart = -1;
                window.requestAnimationFrame(this.animateBackground);
            };
            this.animateBackground = (time) => {
                if (!this.backgroundAnimateStart || this.backgroundAnimateStart == -1)
                    this.backgroundAnimateStart = time;
                let progress = time - this.backgroundAnimateStart;
                let percent = (100 * progress) / 150;
                this.el.style.backgroundImage = "radial-gradient(circle farthest-side at left " + this.backgroundStartCoordinates.x + "px top " +
                    this.backgroundStartCoordinates.y + "px, " + this.newBackgroundColor + " 0%, " + this.newBackgroundColor + " " + percent + "%, transparent " + percent + "%)";
                if (progress < 150)
                    window.requestAnimationFrame(this.animateBackground);
                else {
                    this.el.style.backgroundColor = this.newBackgroundColor;
                    this.el.style.backgroundImage = "unset";
                }
            };
            this.backgroundStartCoordinates = { "x": -1, "y": -1 };
            this.scrollFade = () => {
                return this.el.classList.contains("scroll-fade");
            };
            this.scrollToggle = () => {
                if (window.innerWidth >= 960) {
                    this.el.classList.remove("offscreen");
                    return;
                }
                if (!this.scrollFade())
                    return;
                let top = window.scrollY;
                let down = top > BottomNavigation.oldScrollTop;
                if (down) {
                    this.el.classList.add("offscreen");
                }
                else {
                    this.el.classList.remove("offscreen");
                }
                BottomNavigation.oldScrollTop = top;
            };
            this.backgroundAnimateStart = -1;
            let links = this.el.children;
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener("click", this.toggleActive, true);
            }
            window.addEventListener("scroll", this.scrollToggle);
        }
        static getSelectors() {
            return ["nav.nav-bottom"];
        }
    }
    BottomNavigation.oldScrollTop = -1;
    MaterialPage.BottomNavigation = BottomNavigation;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class Button extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.click = (e) => {
                if (this.el.classList.contains("focus"))
                    this.el.classList.remove("focus");
                let x = e.clientX;
                let y = e.clientY;
                let buttonCoords = this.el.getBoundingClientRect();
                x -= buttonCoords.left;
                y -= buttonCoords.top;
                this.animateStart = -1;
                window.requestAnimationFrame(this.animateBackground.bind(this, x, y));
                this.preventFocus();
            };
            this.focus = () => {
                if (!this.el.classList.contains("flat"))
                    return;
                if (this.focusPrevented) {
                    this.focusPrevented = false;
                    return;
                }
                this.el.classList.add("focus");
            };
            this.blur = () => {
                if (!this.el.classList.contains("flat"))
                    return;
                this.focusPrevented = false;
                this.el.classList.remove("focus");
            };
            this.animateBackground = (x, y, time) => {
                if (!this.animateStart || this.animateStart == -1)
                    this.animateStart = time;
                let progress = time - this.animateStart;
                let percent = progress / 200;
                let color = null;
                let opacity = 0.4 - (0.4 * percent);
                if (document.body.classList.contains("theme-dark")) {
                    let bgColor = getComputedStyle(this.el)["background-color"];
                    color = MaterialPage.App.getThemeFromColor(bgColor);
                    if (color == null || bgColor == "rgb(224, 224, 224)") {
                        color = "rgba(0, 0, 0, " + opacity + ")";
                    }
                    else {
                        color = MaterialPage.Color.colors[color + "-700"];
                        opacity = 1 - percent;
                        color = MaterialPage.App.toRgba(color, opacity);
                    }
                }
                else {
                    color = Button.pressColor();
                    color = "rgba(" + color + ", " + color + ", " + color + ", " + opacity + ")";
                }
                let size = (percent * 120) + 60;
                let backgroundStr = "radial-gradient(circle farthest-side at ";
                backgroundStr += "left " + x + "px top " + y + "px,";
                backgroundStr += color + " " + " 0%, ";
                backgroundStr += color + " " + size + "%, ";
                backgroundStr += "transparent " + size + "%)";
                this.el.style.backgroundImage = backgroundStr;
                if (progress < 200) {
                    window.requestAnimationFrame(this.animateBackground.bind(this, x, y));
                }
                else {
                    this.el.style.backgroundImage = "unset";
                }
            };
            this.preventFocus = () => {
                this.focusPrevented = true;
            };
            this.animateStart = -1;
            this.el.addEventListener("focus", this.focus);
            this.el.addEventListener("blur", this.blur);
            this.el.addEventListener("mousedown", this.click);
        }
        static pressColor() {
            return document.body.classList.contains("theme-light") ?
                153 :
                document.body.classList.contains("theme-dark") ?
                    254 :
                    153;
        }
        static getSelectors() {
            return [".button"];
        }
    }
    MaterialPage.Button = Button;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class Card extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.expand = () => {
                this.el.classList.toggle("expanded");
                if (this.el.classList.contains("expanded")) {
                    let ht = this.supportingText.scrollHeight;
                    this.supportingText.style.height = ht + "px";
                }
                else {
                    this.supportingText.style.height = "0";
                }
            };
            if (this.el.querySelector(".media") != null) {
                let mediaBlock = this.el.querySelector(".media");
                let width = this.el.offsetWidth;
                let height = width * (9 / 16);
                mediaBlock.style.height = height + "px";
            }
            let supportingText = this.el.querySelector("div.supporting-text");
            let expand = this.el.querySelector(".button[data-action='expand']");
            if (supportingText != null && expand != null) {
                this.supportingText = supportingText;
                expand.addEventListener("click", this.expand);
            }
        }
        static getSelectors() {
            return [".card"];
        }
    }
    MaterialPage.Card = Card;
})(MaterialPage || (MaterialPage = {}));
var MaterialPage;
(function (MaterialPage) {
    class Dialog extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.closeShade = (e) => {
                if (e.target !== this.el)
                    return;
                this.el.classList.remove("active");
                window.setTimeout(() => { this.el.style.visibility = "hidden"; }, 200);
            };
            this.toggle = () => {
                this.el.classList.toggle("active");
                if (!this.el.classList.contains("active")) {
                    window.setTimeout(() => { this.el.style.visibility = "hidden"; }, 200);
                }
                else {
                    this.el.style.visibility = "visible";
                }
            };
            this.dialogEl = domEl;
            this.el = domEl.parentElement;
            let toggles = document.querySelectorAll("[data-toggle='dialog'][data-target='" + this.dialogEl.id + "']");
            for (const toggle of toggles)
                toggle.addEventListener("click", this.toggle, true);
            this.el.addEventListener("click", this.closeShade, true);
            this.el.style.display = "block";
        }
        static getSelectors() {
            return ["div.dialog"];
        }
    }
    MaterialPage.Dialog = Dialog;
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
                    if (this.primary.hasAttribute("data-update-closed-text")) {
                        let src = document.querySelector(this.primary["dataset"]["updateClosedText"]);
                        if (typeof src !== "undefined" && src != null && src.value != "") {
                            this.primary.textContent = src.value;
                            return;
                        }
                    }
                    this.primary.textContent = this.primary["dataset"]["closedText"];
                    this.secondary.textContent = this.secondary["dataset"]["closedText"];
                }
            };
            this.togglePanel = () => {
                this.el.classList.toggle("open");
                if (this.el.classList.contains("open"))
                    this.container.style.height = this.container.scrollHeight + "px";
                else
                    this.container.style.height = "0";
                this.updateContent();
            };
            let primary = this.el.querySelector("div.summary.primary");
            let secondary = this.el.querySelector("div.summary.secondary");
            let container = this.el.querySelector("div.content-container");
            let summary = this.el.querySelector("div.summary-container");
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
                summary.appendChild(expand);
                expandIcon = expand;
            }
            expandIcon.addEventListener("click", this.togglePanel);
            let actions = this.el.querySelector("div.actions");
            let close = actions.querySelector("button[data-action='close']");
            if (close != null) {
                close.addEventListener("click", this.togglePanel);
            }
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
    class GridList extends MaterialPage.MaterialElement {
        constructor(domEl) {
            super(domEl);
            this.resize = () => {
                let canFit = this.calcCanFit();
                if (canFit === this.currentCanFit)
                    return;
                this.currentCanFit = canFit;
                let old = this.el.querySelectorAll("div.grid-list-item.filler");
                for (let element of old) {
                    element.parentElement.removeChild(element);
                }
                let children = this.el.childElementCount;
                let extrasNeeded = children % canFit;
                if (extrasNeeded !== 0)
                    extrasNeeded = canFit - extrasNeeded;
                for (let i = 0; i < extrasNeeded; i++) {
                    let filler = document.createElement("DIV");
                    filler.classList.add("grid-list-item");
                    filler.classList.add("filler");
                    this.el.appendChild(filler);
                }
            };
            this.calcCanFit = () => {
                let itemWidth = null;
                if (this.el.dataset.hasOwnProperty("contentWidth"))
                    itemWidth = parseInt(this.el.dataset["contentWidth"]);
                else
                    itemWidth = 200;
                itemWidth += 4;
                return Math.floor(this.el.offsetWidth / itemWidth);
            };
            window.addEventListener("resize", this.resize);
            this.currentCanFit = -1;
        }
        static getSelectors() {
            return ["div.grid-list"];
        }
    }
    MaterialPage.GridList = GridList;
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
    // noinspection JSUnusedGlobalSymbols
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
            // TODO: Make this usable somehow?
            // noinspection ALL
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
    // noinspection JSUnusedGlobalSymbols
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
        // Create a new TextField element, replacing the <input type="text"> that the user originally specified
        constructor(domEl) {
            super(domEl);
            this.errorTest = null;
            this.change = () => {
                let label = this.el.querySelector("span.text-field-label");
                let hr = this.el.querySelector("hr.text-field-separator");
                let field = this.el.querySelector("input[type='text']");
                // Check to see if coming into focus or if blurred
                if (document.activeElement === field) {
                    if (!label.classList.contains("active"))
                        label.classList.add("active");
                }
                else {
                    // Assume no error
                    let isError = false;
                    // Check to see if there's an error test for this function
                    if (typeof this.errorTest === "function")
                        isError = this.errorTest.call(this, field.value);
                    // Assume error color is red
                    let errorColor = "red";
                    // Set the custom error color if specified
                    if (field["dataset"]["errorColor"])
                        errorColor = field["dataset"]["errorColor"];
                    // Set classes to be applied
                    let clazz = "text-" + errorColor + "-500";
                    let clazz2 = "border-" + errorColor + "-500";
                    // If the function said there was an error, add the classes, else, remove them
                    if (isError) {
                        hr.classList.add(clazz2);
                        label.classList.add(clazz);
                    }
                    else {
                        hr.classList.remove(clazz2);
                        label.classList.remove(clazz);
                    }
                    // If the field is empty, move the label back to the placeholder position
                    if (field.value === "") {
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
            // Since we're replacing the original text field, we have to replace the element reference in this class
            this.el = textField;
            // Create the "placeholder" for this element and set its value to the originally specified placeholder
            let label = document.createElement("span");
            label.classList.add("text-field-label");
            label.textContent = domEl.getAttribute("placeholder");
            // Create a new input element
            let input = document.createElement("input");
            // Copy attributes from the user-specified element onto this one
            for (let i = 0; i < domEl.attributes.length; i++) {
                input.setAttribute(domEl.attributes[i].nodeName, domEl.attributes[i].nodeValue);
            }
            // Add event listeners to set error/active state
            input.addEventListener("focus", this.change);
            input.addEventListener("blur", this.change);
            // If an error test was specified...
            if (input.hasAttribute("data-error-test")) {
                const errorTestName = input["dataset"].errorTest;
                // Check to see that it's actually a function and set it as the test for this object
                if (typeof window[errorTestName] === "function")
                    this.errorTest = window[errorTestName];
            }
            // Remove the placeholder so we don't get a double display
            input.setAttribute("placeholder", "");
            // Copy dataset attributes on user-specified input to new element
            for (let x in domEl["dataset"]) {
                if (!domEl["dataset"].hasOwnProperty(x))
                    continue;
                input["dataset"][x] = domEl["dataset"][x];
            }
            // Add separator for text field
            let hr = document.createElement("hr");
            hr.classList.add("text-field-separator");
            // Append children
            textField.appendChild(label);
            textField.appendChild(input);
            textField.appendChild(hr);
            // Insert the whole container where the user-defined element originally was
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
/// <reference path="Color.ts" />
/// <reference path="components/BottomNavigation.ts" />
/// <reference path="components/Button.ts" />
/// <reference path="components/Card.ts" />
/// <reference path="components/Dialog.ts" />
/// <reference path="components/ExpansionPanel.ts" />
/// <reference path="components/FloatingActionButton.ts" />
/// <reference path="components/GridList.ts" />
/// <reference path="components/ImageFade.ts" />
/// <reference path="components/Picker.ts" />
/// <reference path="components/Progress.ts" />
/// <reference path="components/Snackbar.ts" />
/// <reference path="components/TextField.ts" />
/// <reference path="patterns/LaunchScreen.ts" /> 
/// <reference path="Dependencies.ts" />
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
        static scrollWindow(toX, toY) {
            let curX = window.scrollX;
            let curY = window.scrollY;
            App.scrollStartTimestamp = -1;
            window.requestAnimationFrame(App.scroll.bind(window, curX, curY, toX, toY));
        }
        ;
        static bezier(p0, p1, p2, p3, t) {
            return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * t * t * p2 + Math.pow(t, 3) * p3;
        }
        static getThemeFromColor(color) {
            if (color.indexOf("rgb") !== -1) {
                color = color.replace("rgb(", "");
                color = color.replace(")", "");
                let colors = color.split(",");
                let hex = "#";
                for (let rgbComp in colors) {
                    if (colors.hasOwnProperty(rgbComp)) {
                        let comp = parseInt(colors[rgbComp]);
                        hex += comp.toString(16).toUpperCase();
                    }
                }
                color = hex;
            }
            for (const materialColor in MaterialPage.Color.colors) {
                if (MaterialPage.Color.colors.hasOwnProperty(materialColor)) {
                    if (MaterialPage.Color.colors[materialColor] == color) {
                        return materialColor.split("-")[0];
                    }
                }
            }
            return null;
        }
        addGlobalListeners() {
            window.addEventListener("load", this.init);
            window.addEventListener("DOMContentLoaded", this.preInit);
        }
        fadeImages() {
            for (const element of this.elements) {
                if (element instanceof MaterialPage.ImageFade) {
                    element.fade();
                }
            }
        }
        // noinspection ALL
        static toRgb(hex) {
            hex = hex.replace("#", "");
            const r = parseInt(hex.substr(0, 2), 16).toString();
            const g = parseInt(hex.substr(2, 2), 16).toString();
            const b = parseInt(hex.substr(4, 2), 16).toString();
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
        static toRgba(hex, opacity) {
            hex = hex.replace("#", "");
            const r = parseInt(hex.substr(0, 2), 16).toString();
            const g = parseInt(hex.substr(2, 2), 16).toString();
            const b = parseInt(hex.substr(4, 2), 16).toString();
            return "rgba(" + r + ", " + g + ", " + b + ", " + opacity.toString() + ")";
        }
        static scroll(startX, startY, endX, endY, time) {
            if (!App.scrollStartTimestamp || App.scrollStartTimestamp == -1)
                App.scrollStartTimestamp = time;
            let progress = time - App.scrollStartTimestamp;
            let t = progress / 150;
            let scrollX = App.bezier(startX, 0.4 * startX, 0.2 * startX, endX, t);
            let scrollY = App.bezier(startY, 0.4 * startY, 0.2 * startY, endY, t);
            window.scrollTo(scrollX, scrollY);
            if (progress < 150) {
                window.requestAnimationFrame(App.scroll.bind(window, startX, startY, endX, endY));
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
            // Buttons
            const buttonSelectors = MaterialPage.Button.getSelectors();
            for (const selector of buttonSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let button = new MaterialPage.Button(element);
                    this.elements.push(button);
                }
            }
            // Dialogs
            const dialogSelectors = MaterialPage.Dialog.getSelectors();
            for (const selector of dialogSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let dialog = new MaterialPage.Dialog(element);
                    this.elements.push(dialog);
                }
            }
            this.fadeImages();
            MaterialPage.LaunchScreen.hideAll();
            // Grid Lists
            const gridListSelectors = MaterialPage.GridList.getSelectors();
            for (const selector of gridListSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let gridList = new MaterialPage.GridList(element);
                    gridList.resize();
                    this.elements.push(gridList);
                }
            }
            // Bottom Navigation
            const bottomNavSelectors = MaterialPage.BottomNavigation.getSelectors();
            for (const selector of bottomNavSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let bottomNav = new MaterialPage.BottomNavigation(element);
                    this.elements.push(bottomNav);
                }
            }
            // Cards
            const cardSelectors = MaterialPage.Card.getSelectors();
            for (const selector of cardSelectors) {
                let elements = document.querySelectorAll(selector);
                for (const element of elements) {
                    let card = new MaterialPage.Card(element);
                    this.elements.push(card);
                }
            }
        }
    }
    App.scrollStartTimestamp = -1;
    MaterialPage.App = App;
})(MaterialPage || (MaterialPage = {}));
app = new MaterialPage.App();
//# sourceMappingURL=material.js.map