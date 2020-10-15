document.addEventListener("DOMContentLoaded", function () {

    const addNewRecipt = document.querySelector(".addNewRecipt");
    const gridPlan = document.querySelector(".grid_plan");
    const gridPlan2 = document.querySelector(".grid_plan2");

    addNewRecipt.addEventListener("click", e => {
        e.preventDefault();
        gridPlan.classList.add("d_none");
        gridPlan2.classList.remove("d_none");
    })

});