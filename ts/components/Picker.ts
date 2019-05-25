namespace MaterialPage {
    // noinspection JSUnusedGlobalSymbols
    export class Picker extends MaterialElement {
        private buttons: Array<Button> = [];
        private static month: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        private static dotwAbvs = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        private currentDate: Date;

        constructor(domEl: HTMLElement) {
            super(domEl);

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                return;
            }

            domEl.addEventListener("focus", this.showPicker);
            document.addEventListener("click", this.hidePicker);

            let currentDate = null;

            if ((<HTMLInputElement>this.el).value != "")
                currentDate = new Date((<HTMLInputElement>this.el).value);
            else
                currentDate = new Date();

            this.currentDate = currentDate;

            let dotws = "SMTWTFS";
            let dotw = dotws.substr(currentDate.getDay(), 1);
            let days = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

            let pickerDialog = document.createElement("DIV");
            pickerDialog.classList.add("picker-date-dialog");

            let pickerHeader = document.createElement("DIV");
            pickerHeader.classList.add("picker-date-header");

            let year = document.createElement("SPAN");
            year.classList.add("year");
            year.textContent = currentDate.getFullYear() + "";

            let date = document.createElement("SPAN");
            date.classList.add("date");
            let dotwAbv = document.createTextNode(Picker.dotwAbvs[currentDate.getDay()] + ", ");
            let br = document.createElement("BR");
            let shortDate = document.createTextNode(Picker.month[currentDate.getMonth()] + " " + currentDate.getDate());

            date.appendChild(dotwAbv);
            date.appendChild(br);
            date.appendChild(shortDate);

            pickerHeader.appendChild(year);
            pickerHeader.appendChild(date);

            let pickerBody = document.createElement("DIV");
            pickerBody.classList.add("picker-date-body");

            let pickerSwitch = document.createElement("DIV");
            pickerSwitch.classList.add("picker-date-switch");

            let left = document.createElement("SPAN");
            left.classList.add("material-icons");
            left.textContent = "keyboard_arrow_left";

            let right = document.createElement("SPAN");
            right.classList.add("material-icons");
            right.textContent = "keyboard_arrow_right";

            let text = document.createTextNode(Picker.month[currentDate.getMonth()] + " " + currentDate.getFullYear());
            pickerSwitch.appendChild(left);
            pickerSwitch.appendChild(text);
            pickerSwitch.appendChild(right);

            pickerBody.appendChild(pickerSwitch);

            let pickerCalendar = document.createElement("DIV");
            pickerCalendar.classList.add("picker-date-calendar");

            for (let i = 0; i < dotws.length; i++) {
                let dotwSpan = document.createElement("SPAN");
                dotwSpan.classList.add("dotw");
                dotwSpan.textContent = dotws.substr(i, 1);
                pickerCalendar.appendChild(dotwSpan);
            }

            for (let i = 1; i <- days; i++) {
                let dateSpan = document.createElement("SPAN");
                dateSpan.textContent = i + "";

                if (i == 1) {
                    let startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() + 1;
                    dateSpan.style["gridColumn"] = startDate + " / span 1";
                }

                if (i == currentDate.getDate()) {
                    dateSpan.classList.add("selected");
                }

                dateSpan.addEventListener("click", this.clickInternalButton.bind(this, i));

                pickerCalendar.appendChild(dateSpan);
            }

            pickerBody.appendChild(pickerCalendar);

            let pickerActions = document.createElement("DIV");
            pickerActions.classList.add("actions");

            let ok = document.createElement("BUTTON");
            ok.classList.add("button");
            ok.classList.add("flat");
            ok.textContent = "OK";
            ok.addEventListener("click", this.save);

            let okButton = new Button(ok);

            let cancel = document.createElement("BUTTON");
            cancel.classList.add("button");
            cancel.classList.add("flat");
            cancel.textContent = "Cancel";

            let cancelButton = new Button(cancel);
            this.buttons.push(okButton, cancelButton);

            pickerActions.appendChild(cancel);
            pickerActions.appendChild(ok);

            pickerBody.appendChild(pickerActions);

            pickerDialog.appendChild(pickerHeader);
            pickerDialog.appendChild(pickerBody);

            this.el.parentElement.appendChild(pickerDialog);

            this.fixLeftOffset();
        }

        fixLeftOffset = () => {
            let pickerDialog = this.el.parentElement.querySelector(".picker-date-dialog");
            let offsetLeft = this.el.parentElement.getBoundingClientRect().left;
            if (offsetLeft + 512 + 16 > window.innerWidth) {
                let offset = 512 + 16 + offsetLeft - window.innerWidth;
                (<HTMLElement>pickerDialog).style.left = "-" + offset + "px";
            }
        };

        clickInternalButton = (day) => {
            let newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);

            console.log(newDate.toDateString());

            let date = this.el.parentElement.querySelector("span.date");
            date.childNodes[0].textContent = Picker.dotwAbvs[newDate.getDay()] + ", ";
            date.childNodes[2].textContent = Picker.month[newDate.getMonth()] + " " + day;

            let calendar = this.el.parentElement.querySelector("div.picker-date-calendar");
            let days = calendar.querySelectorAll("span:not(.dotw)");
            days.forEach(function (e) {
                if (e.classList.contains("selected")) {
                    e.classList.remove("selected");
                    e.classList.add("unselected");
                }
                if (e.textContent == day + "") {
                    e.classList.remove("unselected");
                    e.classList.add("selected");
                }
            });

            this.currentDate = newDate;
        };

        save = () => {
            let year = this.currentDate.getFullYear();
            let month: any = this.currentDate.getMonth() + 1;
            let date: any = this.currentDate.getDate();

            if (month < 10)
                month = "0" + month;
            else
                month = month + "";

            if (date < 10)
                date = "0" + date;
            else
                date = date + "";

            let dateStr = year + "-" + month + "-" + date;

            (<HTMLInputElement>this.el.parentElement.querySelector("input[type='date']")).value = dateStr;

            this.hidePicker(null);
        };

        updateDate = () => {
            let date = null;

            if ((<HTMLInputElement>this.el).value === "")
                date = new Date();
            else {
                date = new Date((<HTMLInputElement>this.el).value + "T00:00:00");
            }

            console.log((<HTMLInputElement>this.el).value);
            console.log(date);
            console.log(date.getDate());

            let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

            let calendar = this.el.parentElement.querySelector(".picker-date-calendar");
            let calendarItems = calendar.querySelectorAll("span:not(.dotw)");
            calendarItems.forEach(function(e) {e.parentElement.removeChild(e);});

            for (let i = 1; i <= days; i++) {
                let dateSpan = document.createElement("SPAN");
                dateSpan.textContent = i + "";

                if (i == 1) {
                    let startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1;
                    dateSpan.style["gridColumn"] = startDate + " / span 1";
                }

                if (i == date.getDate()) {
                    dateSpan.classList.add("selected");
                }

                dateSpan.addEventListener("click", this.clickInternalButton.bind(this, i));

                calendar.appendChild(dateSpan);
            }

            let pickerSwitch = this.el.parentElement.querySelector(".picker-date-switch");
            pickerSwitch.childNodes[1].textContent = Picker.month[date.getMonth()] + " " + date.getFullYear();

            let headerDate = this.el.parentElement.querySelector("span.date");
            let headerYear = this.el.parentElement.querySelector("span.year");

            headerYear.textContent = date.getFullYear() + "";
            headerDate.childNodes[0].textContent = Picker.dotwAbvs[date.getDay()] + ", ";
            headerDate.childNodes[2].textContent = Picker.month[date.getMonth()] + " " + date.getDate();
        };

        showPicker = () => {
            this.updateDate();

            this.el.parentElement.querySelector(".picker-date-dialog").classList.add("open");
        };

        hidePicker = (e) => {
            if (e != null && this.el.parentElement.contains(e.target) && this.el.parentElement != e.target) return;

            this.el.parentElement.querySelector(".picker-date-dialog").classList.remove("open");
        };

        static getSelectors(): Array<string> {
            return ["input.picker[type='date']"];
        }
    }
}