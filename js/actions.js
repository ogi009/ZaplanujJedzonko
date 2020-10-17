import {allPlans, empty, Schedule} from "./schedule.js";
import allRecipies from "./newRecipt.js";

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday')
const wednesday = document.getElementById('wednesday')
const thursday = document.getElementById('thursday')
const friday = document.getElementById('friday')
const saturday = document.getElementById('saturday')
const sunday = document.getElementById('sunday')

const scheduleList = document.querySelector(".schedule_list");
let scheduleListEdits = document.querySelectorAll(".schedule-edit");
let scheduleListDeletes = document.querySelectorAll(".schedule-delete");
const schedulePlan = document.querySelector('.schedule_plan');

const saveButton =document.querySelector(".schedule_plan-save");
const editButton = document.querySelector(".schedule_plan-edit");
const saveTitle = document.querySelector(".schedule_plan-title");
const editTitle = document.querySelector(".schedule_edit-title");

const weekNumber = document.querySelector(".plan_weekNumber-input");
const planTitle = document.querySelector(".plan_name-input");
const planDescription = document.querySelector(".plan_description-input");

export const scheduleListActions = () => {
    scheduleListEdits = document.querySelectorAll(".schedule-edit");
    scheduleListDeletes = document.querySelectorAll(".schedule-delete");


    for(let edit of scheduleListEdits) {
        edit.addEventListener('click',e=>{
            scheduleList.classList.add('d_none');
            schedulePlan.classList.remove('d_none');
            saveButton.classList.add('d_none');
            editButton.classList.remove('d_none');
            saveTitle.classList.add('d_none');
            editTitle.classList.remove('d_none');

            let plan;

            for(let plans of allPlans){
                if(plans.id === +e.target.parentElement.parentElement.parentElement.children[0].innerText){
                    plan = plans;
                }
            }

            weekNumber.value = plan.weekNumber;
            planTitle.value = plan.title;
            planDescription.value = plan.description;

            const selects = document.querySelectorAll(".recipe_select");
            let dayArray = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
            let index = 0;
            for (let key of dayArray) {
                plan[key].forEach(el => {
                    let selectsOptions = `<option>${el}</option>`;
                    allRecipies.forEach(recipes => {
                        selectsOptions += `<option id = ${recipes.id} value = '${recipes.title}'>${recipes.title}</option>`
                    })
                    selects[index].innerHTML = selectsOptions;
                    index++;
                })
            }

            editButton.addEventListener('click', e=> {
                if (weekNumber.value && planDescription.value && planTitle.value) {
                    dayArray = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
                    var newPlan = new Schedule(plan.id, weekNumber.value, planTitle.value, planDescription.value);

                    for (let key of dayArray) {
                        let tempArray = ['', '', '', '', ''];
                        newPlan[key.id] = tempArray.map((el, i) => key.children[i + 1].children[0].value);
                    }
                }

                for(let el of allPlans) {
                    if(el.id === plan.id){
                        allPlans.splice(el.id-1,1,newPlan);
                    }
                }
                console.log(allPlans);

                scheduleList.classList.remove('d_none');
                schedulePlan.classList.add('d_none');
                saveButton.classList.remove('d_none');
                editButton.classList.add('d_none');
                saveTitle.classList.remove('d_none');
                editTitle.classList.add('d_none');

                empty.createList();
                empty.saveToLocalStorage();
            })

        })
    }

    for(let del of scheduleListDeletes) {
        del.addEventListener('click', e=>{
            const id = e.target.parentElement.parentElement.parentElement.children[0].innerText;
            allPlans.forEach((plan,)=>{
                if(plan.id === +id){
                    allPlans.pop(plan);
                }
            });
            for(let i = 0 ; i<allPlans.length-1; i++){
                if(allPlans[i].id + 1 !== allPlans[i+1].id){
                    allPlans[i].id += 1;
                }
            }
            empty.createList();
            empty.saveToLocalStorage();
            scheduleListActions();
        })
    }
}