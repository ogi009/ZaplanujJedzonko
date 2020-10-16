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

Schedule.prototype.sortPlans = function () {
    allPlans.sort((a,b) => a.weekNumber - b.weekNumber);
}
/* Metoda `.showPlan()`
    wyświetlająca plan na ekranie aplikacji
 */
Schedule.prototype.showNoPlan = function (weekNr){
    const weekPlanTitle = document.querySelector(".week_plan_title");
    weekPlanTitle.innerText = this.title + ' ' + weekNr;
    const weekPlan = document.querySelector("#schedule_table");
    weekPlan.innerHTML = ''
}
export const showPlan = function (el) {

    const weekPlanTitle = document.querySelector(".week_plan_title");
    weekPlanTitle.innerText = `Twój plan na ${el.weekNumber} tydzień`;

    const weekPlan = document.querySelector("#schedule_table");
    weekPlan.innerHTML = `      
        <tr class="week_plan-breakfast">
            <td>${el.monday[0]}</td>
            <td>${el.tuesday[0]}</td>
            <td>${el.wednesday[0]}</td>
            <td>${el.thursday[0]}</td>
            <td>${el.friday[0]}</td>
            <td>${el.saturday[0]}</td>
            <td>${el.sunday[0]}</td>
        </tr>
        <tr class="week_plan-secondBreakfast">
            <td>${el.monday[1]}</td>
            <td>${el.tuesday[1]}</td>
            <td>${el.wednesday[1]}</td>
            <td>${el.thursday[1]}</td>
            <td>${el.friday[1]}</td>
            <td>${el.saturday[1]}</td>
            <td>${el.sunday[1]}</td>
        </tr>
        <tr class="week_plan-soup">
            <td>${el.monday[2]}</td>
            <td>${el.tuesday[2]}</td>
            <td>${el.wednesday[2]}</td>
            <td>${el.thursday[2]}</td>
            <td>${el.friday[2]}</td>
            <td>${el.saturday[2]}</td>
            <td>${el.sunday[2]}</td>
        </tr>
        <tr class="week_plan-dinner">
            <td>${el.monday[3]}</td>
            <td>${el.tuesday[3]}</td>
            <td>${el.wednesday[3]}</td>
            <td>${el.thursday[3]}</td>
            <td>${el.friday[3]}</td>
            <td>${el.saturday[3]}</td>
            <td>${el.sunday[3]}</td>
        </tr>
        <tr class="week_plan-supper">
            <td>${el.monday[4]}</td>
            <td>${el.tuesday[4]}</td>
            <td>${el.wednesday[4]}</td>
            <td>${el.thursday[4]}</td>
            <td>${el.friday[4]}</td>
            <td>${el.saturday[4]}</td>
            <td>${el.sunday[4]}</td>
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
Schedule.prototype.createList = function () {
    const list = document.querySelector(".schedule_list-table");
    list.children[1].innerHTML = '';

    for(let el of allPlans) {
    const listElement = document.createElement('tr');
    listElement.innerHTML = `
        <td class="list_id">${el.id}</td>
        <td class="list_name">${el.title}</td>
        <td class="list_description">${el.description}</td>
        <td class="list_weekNumber">${el.weekNumber}</td>
        <td class="list_actions"><div class="list_actions-container"><i class="far fa-edit schedule-edit"></i><i class="far fa-trash-alt schedule-delete"></i><div></div></td>
        `
        list.children[1].append(listElement);
    }
}
/*
Metoda `.saveToLocalStorage()`
zapisująca do localStorage informacje o przepisie */
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}
Schedule.prototype.saveToLocalStorage = function () {
    localStorage.setObject(`'Schedule'`,allPlans);
}
// przygotowanie globalnej zmiennej przechowującej wszystkie plany
export var allPlans = [];
if(localStorage.getObject(`'Schedule'`)) {
    allPlans = localStorage.getObject(`'Schedule'`);

}
export const empty = new Schedule(0, 0, 'Wygląda na to że nie masz jeszcze żadnego planu na ten tydzień', '');
empty.monday =['','','','',''];
empty.tuesday =['','','','',''];
empty.wednesday =['','','','',''];
empty.thursday = ['','','','',''];
empty.friday =['','','','',''];
empty.saturday =['','','','',''];
empty.sunday =['','','','',''];
// utworzenie przykładowego obiektu planu
empty.createList();