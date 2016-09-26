function init() {
    initTextFields();

    window.snackbars = [];
    window.snackbar_running = false;
    window.snackbar_timeout = null;

    initProgressBars();
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

function initProgressBars() {
    $("progress:not([value]):not([data-type=\"circular\"])").each(
        function (index, bar) {
            var container = document.createElement("DIV");
            container.classList.add("progress-container");
            container.id = bar.id;

            var bar1 = document.createElement("DIV");
            bar1.classList.add("indeterminate-bar");
            var bar2 = document.createElement("DIV");
            bar2.classList.add("indeterminate-bar");

            container.appendChild(bar1);
            container.appendChild(bar2);

            bar.parentNode.insertBefore(container, bar);
            bar.parentNode.removeChild(bar);
        }
    );

    $("progress[data-type=\"circular\"]:not([value])").each(
        function (index, bar) {
            var ns = "http://www.w3.org/2000/svg";

            var container = document.createElement("DIV");
            container.classList.add("progress-container");
            container.classList.add("circular");
            container.id = bar.id;

            var rotate = document.createElementNS(ns, "svg");
            rotate.classList.add("indeterminate-spinner");
            rotate.setAttribute("width", "50");
            rotate.setAttribute("height", "50");

            var circle = document.createElementNS(ns, "circle");
            circle.setAttribute("cx", "25");
            circle.setAttribute("cy", "25");
            circle.setAttribute("r", "20");

            rotate.appendChild(circle);

            container.appendChild(rotate);

            bar.parentNode.insertBefore(container, bar);
            bar.parentNode.removeChild(bar);
        }
    );

    $("progress[value]:not([data-type=\"circular\"])").each (
        function (index, bar) {
            var container = document.createElement("DIV");
            container.classList.add("progress-container");
            container.id = bar.id;

            var bar1 = document.createElement("DIV");
            bar1.classList.add("determinate-bar");

            container.appendChild(bar1);

            bar1.id = bar.id + "-bar";

            container.dataset.value = bar.value;
            container.dataset["max"] = bar.getAttribute("max");

            bar.parentNode.insertBefore(container, bar);
            bar.parentNode.removeChild(bar);

            window.setTimeout(function() {
                progress_update(container.id);
            }, 50);
        }
    );

    $("progress[data-type=\"circular\"][value]").each(
        function (index, bar) {
            var ns = "http://www.w3.org/2000/svg";

            var container = document.createElement("DIV");
            container.classList.add("progress-container");
            container.classList.add("circular");
            container.id = bar.id;

            var rotate = document.createElementNS(ns, "svg");
            rotate.classList.add("determinate-spinner");
            rotate.setAttribute("width", "50");
            rotate.setAttribute("height", "50");

            var circle = document.createElementNS(ns, "circle");
            circle.id = bar.id + "-bar";
            circle.setAttribute("cx", "25");
            circle.setAttribute("cy", "25");
            circle.setAttribute("r", "20");

            rotate.appendChild(circle);

            container.appendChild(rotate);

            container.dataset.value = bar.value;
            container.dataset["max"] = bar.getAttribute("max");

            bar.parentNode.insertBefore(container, bar);
            bar.parentNode.removeChild(bar);

            window.setTimeout(function() {
                progress_update(container.id);
            }, 50);
        }
    );
}

function textFieldChange() {
    var label = this.parentElement.getElementsByClassName("text-field-label")[0];
    var hr = this.parentElement.getElementsByClassName("text-field-separator")[0];
    if (document.activeElement === this) {
        if (!label.classList.contains("active"))
            label.classList.add("active");
    } else {
        var isError = false;
        if (typeof window[this.dataset["errorTest"]] == "function")
            isError = window[this.dataset["errorTest"]](this.value);

        var errorColor = "red";
        if (this.dataset["errorColor"])
            errorColor = this.dataset["errorColor"];

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

//noinspection JSUnusedGlobalSymbols
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

function progress_update(id) {
    var progress = document.getElementById(id);

    if (progress.classList.contains("circular")) {
        var circle = document.getElementById(id + "-bar");
        var percent = (parseFloat(progress.dataset.value) / parseFloat(progress.dataset["max"]));
        var str = percent * Math.PI * 2 * 20;
        var dash = (1.0 - percent) * Math.PI * 2 * 20;

        circle.style.strokeDasharray = str + ", " + dash;
    } else {
        var bar = document.getElementById(id + "-bar");
        var perc = (parseFloat(progress.dataset.value) / parseFloat(progress.dataset["max"])) * 100.0;

        bar.style.width = perc + "%";
    }
}

//noinspection JSUnusedGlobalSymbols
function progress_set(id, value) {
    var progress = document.getElementById(id);
    if (parseFloat(progress.dataset.value) >= value)
        return;

    progress.dataset.value = value;
    progress_update(id);
}

window.addEventListener("load", init);