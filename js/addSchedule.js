import allRecipies from "./newRecipt.js";
import {allPlans, empty, Schedule} from "./schedule.js";
import {verification} from "./inputVerification.js";
import {getWeekNumber} from "./displaySchedule.js";
import {showPlan} from "./schedule.js";

document.addEventListener("DOMContentLoaded", function () {


    const save = document.querySelector(".schedule_plan-save");
    const weekNumber = document.querySelector(".plan_weekNumber-input");
    const planTitle = document.querySelector(".plan_name-input");
    const planDescription = document.querySelector(".plan_description-input");
    const mainPanel = document.querySelector(".grid_plan");
    const schedulePanel = document.querySelector(".schedule_plan");

    const monday = document.getElementById('monday');
    const tuesday = document.getElementById('tuesday')
    const wednesday = document.getElementById('wednesday')
    const thursday = document.getElementById('thursday')
    const friday = document.getElementById('friday')
    const saturday = document.getElementById('saturday')
    const sunday = document.getElementById('sunday')

    const selects = document.querySelectorAll(".recipe_select");

    weekNumber.value = getWeekNumber(new Date());

    let selectsOptions = '';

    for (let el of allRecipies) {
        selectsOptions += `<option id = ${el.id} value = '${el.title}' >${el.title}</option>`
    }
    for (let el of selects) {
        el.innerHTML = selectsOptions;
    }

    save.addEventListener('click', e => {
        if(weekNumber.value && planDescription.value && planTitle.value) {
            let dayArray = [monday,tuesday,wednesday,thursday,friday,saturday,sunday];
            var newPlan = new Schedule(allPlans.length + 1, weekNumber.value, planTitle.value, planDescription.value);

            for (let key of dayArray) {
                let tempArray = ['','','','',''];
                newPlan[key.id] = tempArray.map((el,i) => key.children[i+1].children[0].value);
            }

            allPlans.push(newPlan);
            newPlan.saveToLocalStorage();
            newPlan.sortPlans();
            newPlan.createList();
            mainPanel.classList.remove('d_none');
            schedulePanel.classList.add('d_none');
            planTitle.value = '';
            planDescription.value = '';
        }
        else {
            weekNumber.value ? null:verification(weekNumber,'Nr');
            planTitle.value ? null : verification(planTitle,'Proszę wprowadzić tytuł planu');
            planDescription.value ? null : verification(planDescription,'Proszę wprowadzić opis planu');
        }
    })
});