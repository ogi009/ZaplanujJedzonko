/*  PLAN
Ten plik zawiera implementację obiektu reprezentującego plan, jego medoty oraz pola obiektu. Na końcu sposób użycia, polacam odpalić konsolę ;p

Schedule(id, weekNumber, title, description)
    id           - int, identyfikator planu
    weekNumber   - int, numer tygodnia planu
		title        - string, nazwa planu
    description  - string, opis planu
    monday       - array, plan na poniedziałek
		...          - array, plany na poszczególne dni tygodnia
*/
export function Schedule(id, weekNumber, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa planu
    this.description = description; // opis planu
    this.weekNumber = weekNumber; // numer tygodnia do którego przypisany jest plan
    this.monday = []; // plan na poniedzialek
    this.tuesday = []; // plan na wtorek
    this.wednesday = []; // plan na środę
    this.thursday = []; // plan na czwartek
    this.friday = []; // plan na piątek
    this.saturday = []; // plan na sobotę
    this.sunday = []; // plan na niedzielę
}

/* Metoda `.showPlan()`
    wyświetlająca plan na ekranie aplikacji
 */
Schedule.prototype.showPlan = function () {

    const weekPlanTitle = document.querySelector(".week_plan_title");
    weekPlanTitle.innerText = `Twój plan na ${this.weekNumber} tydzień`;

    const weekPlan = document.querySelector("#schedule_table");
    weekPlan.innerHTML = `      
        <tr class="week_plan-breakfast">
            <td>${this.monday[0]}</td>
            <td>${this.tuesday[0]}</td>
            <td>${this.wednesday[0]}</td>
            <td>${this.thursday[0]}</td>
            <td>${this.friday[0]}</td>
            <td>${this.saturday[0]}</td>
            <td>${this.sunday[0]}</td>
        </tr>
        <tr class="week_plan-secondBreakfast">
            <td>${this.monday[1]}</td>
            <td>${this.tuesday[1]}</td>
            <td>${this.wednesday[1]}</td>
            <td>${this.thursday[1]}</td>
            <td>${this.friday[1]}</td>
            <td>${this.saturday[1]}</td>
            <td>${this.sunday[1]}</td>
        </tr>
        <tr class="week_plan-soup">
            <td>${this.monday[2]}</td>
            <td>${this.tuesday[2]}</td>
            <td>${this.wednesday[2]}</td>
            <td>${this.thursday[2]}</td>
            <td>${this.friday[2]}</td>
            <td>${this.saturday[2]}</td>
            <td>${this.sunday[2]}</td>
        </tr>
        <tr class="week_plan-dinner">
            <td>${this.monday[3]}</td>
            <td>${this.tuesday[3]}</td>
            <td>${this.wednesday[3]}</td>
            <td>${this.thursday[3]}</td>
            <td>${this.friday[3]}</td>
            <td>${this.saturday[3]}</td>
            <td>${this.sunday[3]}</td>
        </tr>
        <tr class="week_plan-supper">
            <td>${this.monday[4]}</td>
            <td>${this.tuesday[4]}</td>
            <td>${this.wednesday[4]}</td>
            <td>${this.thursday[4]}</td>
            <td>${this.friday[4]}</td>
            <td>${this.saturday[4]}</td>
            <td>${this.sunday[4]}</td>
        </tr>
    `
}

/*
 Metoda `.showInfo()`
 wyświetlająca w konsoli informacje o planie */
Schedule.prototype.showInfo = function () {
    console.warn("ID: ", this.id, "TYTUŁ: ", this.title); // wyświetl id oraz tytuł
    console.warn("OPIS: ", this.description); // wyświetl opis

    console.warn("Poniedziałek:");
    this.monday.forEach(function (elem, i) {
        console.warn(i, elem); // wyświetl każdy poskiłek z poniedziałku
    })
}

/*
Metoda `.saveToLocalStorage()`
zapisująca do localStorage informacje o przepisie */
Schedule.prototype.saveToLocalStorage = function () {
    let array = [this.id,this.title,this.description,this.weekNumber,this.monday,this.tuesday,this.wednesday,this.thursday,
    this.friday,this.saturday,this.sunday]
    if (localStorage.getItem(`Plan ${this.id}` !== null)) {

    } else {
        localStorage.setItem(`'Plan ${this.id}'`,array);
    }
}

// przygotowanie globalnej zmiennej przechowującej wszystkie plany
export var allPlans = [];

// utworzenie przykładowego obiektu planu
