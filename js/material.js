function init() {
    initTextFields();
}

function initTextFields() {
    $("input[type='text']").each(
        function (index, element) {
            if (element.classList.contains("native"))
                return;

            var textField = document.createElement("div");
            textField.classList.add("text-field");

            var label = document.createElement("span");
            label.classList.add("text-field-label");
            label.textContent = element.getAttribute("placeholder");

            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.addEventListener("focus", textFieldChange);
            input.addEventListener("blur", textFieldChange);

            for (var x in element.dataset) {
                if (!element.dataset.hasOwnProperty(x))
                    continue;

                input.dataset[x] = element.dataset[x];
            }

            var hr = document.createElement("hr");
            hr.classList.add("text-field-separator");

            textField.appendChild(label);
            textField.appendChild(input);
            textField.appendChild(hr);

            element.parentNode.insertBefore(textField, element);
            element.parentNode.removeChild(element);
        }
    )
}

function textFieldChange() {
    var label = this.parentElement.getElementsByClassName("text-field-label")[0];
    var hr = this.parentElement.getElementsByClassName("text-field-separator")[0];
    if (document.activeElement === this) {
        if (!label.classList.contains("active"))
            label.classList.add("active");
    } else {
        var isError = false;
        if (typeof window[this.dataset.errorTest] == "function")
            isError = window[this.dataset.errorTest](this.value);

        var errorColor = "red";
        if (this.dataset.errorColor)
            errorColor = this.dataset.errorColor;

        var clazz = "text-" + errorColor + "-500";
        var clazz2 = "border-" + errorColor + "-500";
        if (isError) {
            hr.classList.add(clazz2);
            label.classList.add(clazz);
        } else {
            hr.classList.remove(clazz2);
            label.classList.remove(clazz);
        }

        if (this.value == "") {
            if (label.classList.contains("active"))
                label.classList.remove("active");
        } else {
            if (!label.classList.contains("active"))
                label.classList.add("active");
        }
    }
}

function errorCheck(val) {
    return val.length > 60;
}

window.addEventListener("load", init);