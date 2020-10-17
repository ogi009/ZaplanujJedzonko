import {scheduleListActions} from "./actions.js";

document.addEventListener("DOMContentLoaded", function() {

    const main = document.querySelector("#main_panel");
    const plans = document.getElementById('schedules_panel');
    const recipes = document.getElementById('recipes_panel');
    const mainPanel = document.querySelector(".grid_plan");
    const schedulePanel = document.querySelector(".schedule_plan");
    const recipesList = document.querySelector(".recipes_list");
    const gridPlan = document.querySelector(".grid_plan");
    const gridPlan2 = document.querySelector(".grid_plan2");
    const scheduleList = document.querySelector(".schedule_list");
    const addSchedule = document.querySelector(".schedule_list-add");
    const saveButton =document.querySelector(".schedule_plan-save");
    const editButton = document.querySelector(".schedule_plan-edit");
    const saveTitle = document.querySelector(".schedule_plan-title");
    const editTitle = document.querySelector(".schedule_edit-title");

    main.addEventListener('click' , e=> {
        e.preventDefault();
        mainPanel.classList.remove('d_none');
        schedulePanel.classList.add('d_none');
        recipesList.classList.add('d_none');
        scheduleList.classList.add('d_none')
        // recipePanel.classList.add('d_none');

        gridPlan2.classList.add("d_none");
    });
    plans.addEventListener('click', e => {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.add('d_none');
        scheduleList.classList.remove('d_none')
        recipesList.classList.add('d_none');
        scheduleListActions();

    });

    recipes.addEventListener('click', e => {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.add('d_none');
        recipesList.classList.remove('d_none');
        scheduleList.classList.add('d_none')
    });

    addSchedule.addEventListener('click', e=> {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.remove('d_none');
        scheduleList.classList.add('d_none');
        saveButton.classList.remove('d_none');
        editButton.classList.add('d_none');
        saveTitle.classList.remove('d_none');
        editTitle.classList.add('d_none');
    })
});
