import {allPlans, empty} from "./schedule.js";


const scheduleList = document.querySelector(".schedule_list");
let scheduleListEdits = document.querySelectorAll(".schedule-edit");
let scheduleListDeletes = document.querySelectorAll(".schedule-delete");
const editPlan = document.querySelector(".edit_plan ");
console.log(scheduleList);
console.log(editPlan);
export const scheduleListActions = () => {
    scheduleListEdits = document.querySelectorAll(".schedule-edit");
    scheduleListDeletes = document.querySelectorAll(".schedule-delete");

    for(let edit of scheduleListEdits) {
        edit.addEventListener('click',e=>{
            scheduleList.classList.add('d_none');
            editPlan.classList.remove('d_none');
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