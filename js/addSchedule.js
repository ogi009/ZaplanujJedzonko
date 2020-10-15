document.addEventListener("DOMContentLoaded", function () {

    const save = document.querySelector(".schedule_plan-save");
    const weekNumber = document.querySelector(".plan_weekNumber-input");
    const planTitle = document.querySelector(".plan_name-input");
    const planDescription = document.querySelector(".plan_description-input");

    const monday = document.getElementById('monday');
    const tuesday = document.getElementById('tuesday')
    const wednesday = document.getElementById('wednesday')
    const thursday = document.getElementById('thursday')
    const friday = document.getElementById('friday')
    const saturday = document.getElementById('saturday')
    const sunday = document.getElementById('sunday')

    const selects = document.querySelectorAll(".recipe_select");

    let selectsOptions = '';
    for (let el of allRecipies) {
        selectsOptions += `<option id = ${el.id} value = ${el.title}>${el.title}</option>`
    }
    for (let el of selects) {
        el.innerHTML = selectsOptions;
    }

    save.addEventListener('click', e => {
        newPlan = new Schedule(allPlans.length + 1, weekNumber.value, planTitle.value, planDescription.value);
        newPlan.monday = [
            monday.children[1].children[0].value,
            monday.children[2].children[0].value,
            monday.children[3].children[0].value,
            monday.children[4].children[0].value,
            monday.children[5].children[0].value,
        ];
        newPlan.tuesday = [
            tuesday.children[1].children[0].value,
            tuesday.children[2].children[0].value,
            tuesday.children[3].children[0].value,
            tuesday.children[4].children[0].value,
            tuesday.children[5].children[0].value,
        ];
        newPlan.wednesday = [
            wednesday.children[1].children[0].value,
            wednesday.children[2].children[0].value,
            wednesday.children[3].children[0].value,
            wednesday.children[4].children[0].value,
            wednesday.children[5].children[0].value,
        ];
        newPlan.thursday = [
            thursday.children[1].children[0].value,
            thursday.children[2].children[0].value,
            thursday.children[3].children[0].value,
            thursday.children[4].children[0].value,
            thursday.children[5].children[0].value,
        ];
        newPlan.friday = [
            friday.children[1].children[0].value,
            friday.children[2].children[0].value,
            friday.children[3].children[0].value,
            friday.children[4].children[0].value,
            friday.children[5].children[0].value,
        ];
        newPlan.saturday = [
            saturday.children[1].children[0].value,
            saturday.children[2].children[0].value,
            saturday.children[3].children[0].value,
            saturday.children[4].children[0].value,
            saturday.children[5].children[0].value,
        ];
        newPlan.sunday = [
            sunday.children[1].children[0].value,
            sunday.children[2].children[0].value,
            sunday.children[3].children[0].value,
            sunday.children[4].children[0].value,
            sunday.children[5].children[0].value,
        ];


        allPlans.push(newPlan);
    })

});