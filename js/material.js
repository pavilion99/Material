function init() {
    initTextFields();
    window.snackbars = [];
    window.snackbar_running = false;
    window.snackbar_timeout = null;
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

function snackbar_runner() {
    if (window.snackbars.length != 0) {
        var bar = document.createElement("DIV");
        bar.classList.add("snackbar");
        bar.classList.add("ready");

        var t = document.createElement("P");
        t.classList.add("snackbar-text");
        t.textContent = window.snackbars[0].text;

        bar.appendChild(t);

        if (window.snackbars[0].button) {
            var sep = document.createElement("SPAN");
            sep.classList.add("separator");
            bar.appendChild(sep);

            var action = document.createElement("P");
            action.classList.add("snackbar-text");
            action.classList.add("action");
            action.classList.add("text-" + window.snackbars[0].button["color"]);
            action.addEventListener("click", window.snackbars[0].button["callback"]);
            action.textContent = window.snackbars[0].button["text"];

            bar.appendChild(action);

            var cfix = document.createElement("DIV");
            cfix.classList.add("clearfix");

            bar.appendChild(cfix);
        }

        document.body.appendChild(bar);

        window.setTimeout(function() {
            bar.classList.remove("ready");
        }, 10);

        window.setTimeout(function() {
            bar.classList.add("done");
        }, 200 + 5000);
        window.setTimeout(function() {
            bar.parentNode.removeChild(bar);
        }, 200 + 5000 + 200);

        window.snackbars.shift();
    } else {
        window.snackbar_running = false;
        window.clearInterval(window.snackbar_timeout);
    }
}

function snackbar(text, button) {
    window.snackbars.push({"text": text, "button": button});

    if (!window.snackbar_running) {
        window.snackbar_running = true;

        snackbar_runner();
        window.snackbar_timeout = window.setInterval(function() {
            snackbar_runner();
        }, 5600);
    }

    return window.snackbars;
}

window.addEventListener("load", init);