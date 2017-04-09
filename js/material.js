function init() {
	window.material = {};
	window.material.temp = {};
	window.material.fab = {};
	window.material.fab.int = {};
	window.material.fab.val = {};
	window.material.curFab = 0;

    initTextFields();

    window.material.snackbars = [];
    window.material.snackbar_running = false;
    window.material.snackbar_timeout = null;

    window.scrollTopOld = document.body.scrollTop;

    initProgressBars();
    initFloatingActionButtons();

    fadeImages();
    hideLaunchScreen();
}

function hideLaunchScreen() {
    $("div.launch-screen").each(
        function (index, element) {
            element.classList.add("hidden");
        }
    );
}

function preInit() {
    initImages();
}

function initImages() {
    $("img.fade").each (
        function (index, element) {
            element.classList.add("unready");
        }
    );
}

function fadeImages() {
    $("img.fade").each (
        function (index, element) {
            element.classList.remove("unready");
        }
    );
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

function initFloatingActionButtons() {
    $("button.fab").each(
        function (index, element) {
            var top = parseInt(element.dataset["y"]);
            var left = parseInt(element.dataset["x"]);

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

            var icon = element.dataset["icon"];
            var iconSpan = document.createElement("SPAN");
            iconSpan.classList.add("material-icons");
            iconSpan.textContent = icon;

            /*var options = element.children;
            for (var i = 0; i < options; i++) {
                var el = options[i];

                var optionIconName = el.dataset["icon"];
                var optionIcon = document.createElement("SPAN");
                optionIcon.classList.add("material-icons");
                optionIcon.textContent = optionIconName;

                el.appendChild(optionIcon);
            }*/

            element.appendChild(iconSpan);

            var id = element.id;
            var options = $("[data-fab=" + id + "]");

            for (var i = 0; i < options.length; i++) {
                // TODO: Animate these damn options
                //noinspection JSUnusedLocalSymbols
                var el = options[i];


			}

            if (element.classList.contains("speed-dial")) {
				element.addEventListener("mousedown", floatingActionButtonSpeedDialToggle, true);
            }

            element.style.transform = "scale(1)";

            if($(document.body).find("div.launch-screen").length > 0) {
            	element.classList.add("delay");
			}

			element.addEventListener("mouseover", floatingActionButtonColorApply, true);
			element.addEventListener("focus", floatingActionButtonColorApply, true);
			element.addEventListener("mouseout", floatingActionButtonColorRemove, true);
			element.addEventListener("blur", floatingActionButtonColorRemove, true);

            window.material.curFab++;
            element.dataset.materialId = window.material.curFab;
        }
    );
}

function floatingActionButtonSpeedDialToggle(e) {
	//TODO: Make the speed-dial function work properly

	var el = e.currentTarget;
	var icon = el.children[0];

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
}

function floatingActionButtonColorApply(e) {
    // TODO: fade FAB color on click
	var el = e.currentTarget;
	var id = el.dataset.materialId;

	if (!(id in window.material.fab.val)) {
		window.material.fab.val[id] = 0;
	}

	if (id in window.material.fab.int && id !== null) {
		window.clearInterval(window.material.fab.int[id]);
	}

	var r = 10;

	window.material.fab.int[id] = window.setInterval(
		function() {
			if (window.material.fab.val[id] >= 150) {
				window.clearInterval(window.material.fab.int[id]);
				window.material.fab.int[id] = null;
				return;
			}

			var k = 0.001 * window.material.fab.val[id];

			el.style.backgroundImage = "radial-gradient(circle at center, rgba(0, 0, 0, " + k + "), rgba(0, 0, 0, " + k + ")";


			window.material.fab.val[id] += r;
		}, r
	);
}

function floatingActionButtonColorRemove(e) {
	var el = e.currentTarget;
	var id = el.dataset.materialId;

	if (!(id in window.material.fab.val)) {
		window.material.fab.val[id] = 0;
	}

	if (id in window.material.fab.int && id !== null) {
		window.clearInterval(window.material.fab.int[id]);
	}

	var r = 10;

	window.material.fab.int[id] = window.setInterval(
		function() {
			if (window.material.fab.val[id] <= 0) {
				window.clearInterval(window.material.fab.int[id]);
				window.material.fab.int[id] = null;
				return;
			}

			var k = 0.001 * window.material.fab.val[id];

			el.style.backgroundImage = "radial-gradient(circle at center, rgba(0, 0, 0, " + k + "), rgba(0, 0, 0, " + k + ")";


			window.material.fab.val[id] -= r;
		}, r
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
        if (typeof window[this.dataset["errorTest"]] === "function")
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

        if (this.value === "") {
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
    if (window.material.snackbars.length !== 0) {
        var bar = document.createElement("DIV");
        bar.classList.add("snackbar");
        bar.classList.add("ready");

        var t = document.createElement("P");
        t.classList.add("snackbar-text");
        t.textContent = window.material.snackbars[0].text;

        bar.appendChild(t);

        if (window.material.snackbars[0].button) {
            var sep = document.createElement("SPAN");
            sep.classList.add("separator");
            bar.appendChild(sep);

            var action = document.createElement("P");
            action.classList.add("snackbar-text");
            action.classList.add("action");
            action.classList.add("text-" + window.material.snackbars[0].button["color"]);
            action.addEventListener("click", window.material.snackbars[0].button["callback"]);
            action.textContent = window.material.snackbars[0].button["text"];

            bar.appendChild(action);

            var cfix = document.createElement("DIV");
            cfix.classList.add("clearfix");

            bar.appendChild(cfix);
        }

        document.body.appendChild(bar);

        if ($(document.body).find("nav.nav-bottom").length > 0) {
            bar.classList.add("nav-bottom");
        }

        window.setTimeout(function() {
            bar.classList.remove("ready");
        }, 10);

        window.setTimeout(function() {
            bar.classList.add("done");
        }, 200 + 5000);
        window.setTimeout(function() {
            bar.parentNode.removeChild(bar);
        }, 200 + 5000 + 200);

        window.material.snackbars.shift();
    } else {
        window.material.snackbar_running = false;
        window.clearInterval(window.material.snackbar_timeout);
    }
}

function snackbar(text, button) {
    window.material.snackbars.push({"text": text, "button": button});

    if (!window.material.snackbar_running) {
        window.material.snackbar_running = true;

        snackbar_runner();
        window.material.snackbar_timeout = window.setInterval(function() {
            snackbar_runner();
        }, 5600);
    }

    return window.material.snackbars;
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

function processScroll() {
    if (document.body.scrollTop > window.scrollTopOld) {
        // Scrolling down

        $("nav.nav-bottom.scroll-fade").each(
            function(index, element) {
                element.classList.add("offscreen");
            }
        );

        window.scrollTopOld = document.body.scrollTop;
    } else if (document.body.scrollTop < window.scrollTopOld) {
        // Scrolling up

        $("nav.nav-bottom.scroll-fade").each(
            function (index, element) {
                element.classList.remove("offscreen");
            }
        );

        window.scrollTopOld = document.body.scrollTop;
    }
}

document.addEventListener("DOMContentLoaded", preInit);
window.addEventListener("load", init);
window.addEventListener("scroll", processScroll);