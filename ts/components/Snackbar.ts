namespace MaterialPage {
    // noinspection JSUnusedGlobalSymbols
    export class Snackbar {
        private static snackbars: Array<Snackbar>;
        private static running: boolean;
        private static timeout: number | null;

        constructor(public text: string, public button: string) {
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

            window.setTimeout(function() {
                bar.classList.remove("ready");
            }, 10);

            window.setTimeout(function() {
                bar.classList.add("done");
            }, 200 + 5000);

            window.setTimeout(function() {
                bar.parentNode.removeChild(bar);
            }, 200 + 5000 + 200);
        }

        static isRunning(): boolean {
            return Snackbar.running;
        }
    }
}