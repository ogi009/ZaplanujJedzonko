import {allPlans} from "./schedule.js";
import {empty} from "./schedule.js";

export function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return  weekNo;
}

console.log(allPlans);
console.log(empty);

function sortPlans() {
    allPlans.sort((a,b) => a.weekNumber - b.weekNumber);
}

document.addEventListener("DOMContentLoaded", function() {

    const next = document.getElementById('next_schedule');
    const previous = document.getElementById('previous_schedule');
    let currentWeekNr = getWeekNumber(new Date());
    for (let el of allPlans) {
        el.weekNumber === currentWeekNr ? el.showPlan() : empty.showPlan(currentWeekNr);
    }
    next.addEventListener('click', e=> {
        currentWeekNr >= 52 ? currentWeekNr = 1 : currentWeekNr++
        for (let el of allPlans) {
            el.weekNumber === currentWeekNr ? el.showPlan() : empty.showPlan(currentWeekNr);
        }
    })
    previous.addEventListener('click', e => {
        currentWeekNr <= 1 ? currentWeekNr = 52 : currentWeekNr--;
        for (let el of allPlans) {
            el.weekNumber === currentWeekNr ? el.showPlan() : empty.showPlan(currentWeekNr);
        }
    })
});


