import {scheduleListActions} from "./actions.js";

document.addEventListener("DOMContentLoaded", function() {

    const main = document.getElementById('main_panel');
    const plans = document.getElementById('schedules_panel');
    const recipes = document.getElementById('recipes_panel');
    const mainPanel = document.querySelector(".grid_plan");
    const schedulePanel = document.querySelector(".schedule_plan");
    const recipePanel = document.querySelector(".container_recipe");
    const scheduleList = document.querySelector(".schedule_list");
    const addSchedule = document.querySelector(".schedule_list-add");

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
