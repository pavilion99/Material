namespace MaterialPage {
    export class TextField extends MaterialElement {
        constructor(domEl: HTMLElement) {
            super(domEl);

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

        change = () => {
            let label = this.el.querySelector("span.text-field-label");
            let hr = this.el.querySelector("hr.text-field-separator");
            let field = this.el.querySelector("input[type='text']");

            if (document.activeElement === field) {
                if (!label.classList.contains("active"))
                    label.classList.add("active");
            } else {
                let isError = false;
                if (typeof window[this.el["dataset"]["errorTest"]] === "function")
                    isError = window[this.el["dataset"]["errorTest"]]((<HTMLInputElement>this.el).value);

                let errorColor = "red";
                if (this.el["dataset"]["errorColor"])
                    errorColor = this.el["dataset"]["errorColor"];

                let clazz = "text-" + errorColor + "-500";
                let clazz2 = "border-" + errorColor + "-500";
                if (isError) {
                    hr.classList.add(clazz2);
                    label.classList.add(clazz);
                } else {
                    hr.classList.remove(clazz2);
                    label.classList.remove(clazz);
                }

                if ((<HTMLInputElement>this.el).value === "") {
                    if (label.classList.contains("active"))
                        label.classList.remove("active");
                } else {
                    if (!label.classList.contains("active"))
                        label.classList.add("active");
                }
            }
        };

        static getSelectors(): Array<string> {
            return ["input[type='text']:not(.native)"];
        }
    }
}