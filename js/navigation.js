import {allPlans} from "./schedule.js";
import {empty} from "./schedule.js";

document.addEventListener("DOMContentLoaded", function() {

    const main = document.getElementById('main_panel');
    const plans = document.getElementById('schedules_panel');
    const recipes = document.getElementById('recipes_panel');
    const mainPanel = document.querySelector(".grid_plan");
    const schedulePanel = document.querySelector(".schedule_plan");
    const recipePanel = document.querySelector(".container_recipe");
    const scheduleList = document.querySelector(".schedule_list");
    const addSchedule = document.querySelector(".schedule_list-add");
    let scheduleListEdits = document.querySelectorAll(".schedule-edit");
    let scheduleListDeletes = document.querySelectorAll(".schedule-delete");

    const scheduleListActions = () => {
        scheduleListEdits = document.querySelectorAll(".schedule-edit");
        scheduleListDeletes = document.querySelectorAll(".schedule-delete");
        for(let edit of scheduleListEdits) {
            edit.addEventListener('click',e=>{
                
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

    main.addEventListener('click' , e=> {
        e.preventDefault();
        mainPanel.classList.remove('d_none');
        schedulePanel.classList.add('d_none');
        recipePanel.classList.add('d_none');
        scheduleList.classList.add('d_none')
    });
    plans.addEventListener('click', e => {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.add('d_none');
        recipePanel.classList.add('d_none');
        scheduleList.classList.remove('d_none')
        scheduleListActions();

    });

    recipes.addEventListener('click', e => {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.add('d_none');
        recipePanel.classList.remove('d_none');
        scheduleList.classList.add('d_none')
    });
    addSchedule.addEventListener('click', e=> {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.remove('d_none');
        recipePanel.classList.add('d_none');
        scheduleList.classList.add('d_none')
    })


});
