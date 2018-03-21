namespace MaterialPage {
    export class TextField extends MaterialElement {
        public errorTest: Function = null;

        // Create a new TextField element, replacing the <input type="text"> that the user originally specified
        constructor(domEl: HTMLElement) {
            super(domEl);

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

        change = () => {
            let label = this.el.querySelector("span.text-field-label");
            let hr = this.el.querySelector("hr.text-field-separator");
            let field = this.el.querySelector("input[type='text']");

            // Check to see if coming into focus or if blurred
            if (document.activeElement === field) {
                if (!label.classList.contains("active"))
                    label.classList.add("active");
            } else {
                // Assume no error
                let isError = false;

                // Check to see if there's an error test for this function
                if (typeof this.errorTest === "function")
                    isError = this.errorTest.call(this, (<HTMLInputElement>field).value);

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
                } else {
                    hr.classList.remove(clazz2);
                    label.classList.remove(clazz);
                }

                // If the field is empty, move the label back to the placeholder position
                if ((<HTMLInputElement>field).value === "") {
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