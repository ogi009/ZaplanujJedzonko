document.addEventListener("DOMContentLoaded", function () {

    const addNewRecipt = document.querySelector(".addNewRecipt");
    const addNewPlan = document.querySelector(".addNewPlan");
    const gridPlan = document.querySelector(".grid_plan");
    const gridPlan2 = document.querySelector(".grid_plan2");
    const schelduePlan = document.querySelector(".schedule_plan");

    addNewRecipt.addEventListener("click", e => {
        e.preventDefault();
        gridPlan.classList.add("d_none");
        gridPlan2.classList.remove("d_none");
    })

    addNewPlan.addEventListener("click", e=> {
        e.preventDefault();
        gridPlan.classList.add("d_none");
        schelduePlan.classList.remove("d_none");

    })
});