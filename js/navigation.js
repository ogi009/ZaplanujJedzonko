document.addEventListener("DOMContentLoaded", function() {

    const main = document.querySelector("#main_panel");
    const plans = document.getElementById('schedules_panel');
    const recipes = document.getElementById('recipes_panel');
    const mainPanel = document.querySelector(".grid_plan");
    const schedulePanel = document.querySelector(".schedule_plan");
    // const recipePanel = document.querySelector(".container_recipe");
    const gridPlan = document.querySelector(".grid_plan");
    const gridPlan2 = document.querySelector(".grid_plan2");
    main.addEventListener('click' , e=> {
        e.preventDefault();
        mainPanel.classList.remove('d_none');
        schedulePanel.classList.add('d_none');
        // recipePanel.classList.add('d_none');

        gridPlan2.classList.add("d_none");
    });
    plans.addEventListener('click', e => {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.remove('d_none');
        // recipePanel.classList.add('d_none');
    });

    recipes.addEventListener('click', e => {
        e.preventDefault();
        mainPanel.classList.add('d_none');
        schedulePanel.classList.add('d_none');
        // recipePanel.classList.remove('d_none');
    });

});