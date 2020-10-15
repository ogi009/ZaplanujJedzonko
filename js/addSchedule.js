document.addEventListener("DOMContentLoaded", function() {

    const save = document.querySelector(".schedule_plan-save");
    const weekNumber = document.querySelector(".plan_weekNumber-input");
    const planTitle = document.querySelector(".plan_name-input");
    const planDescription = document.querySelector(".plan_description-input");

    const selects = document.querySelectorAll(".recipe_select");

    let selectsOptions = '';
    for (let el of allRecipies) {
        selectsOptions +=`<option id = ${el.id} value = ${el.title}>${el.title}</option>`
    }
    for (let el of selects) {
        el.innerHTML = selectsOptions;
    }

    save.addEventListener('click',e=>{
        newPlan = new Schedule(allPlans.length + 1, weekNumber.value, planTitle.value , planDescription.value);
        newPlan.monday = [];
        newPlan.tuesday = [];
        newPlan.wednesday = [];
        newPlan.thursday = [];
        newPlan.friday = [];
        newPlan.saturday = [];
        newPlan.sunday = [];

        allPlans.push(newPlan);
    })

});