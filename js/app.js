import {verification} from "./inputVerification.js";

document.addEventListener("DOMContentLoaded", function () {

    const message = document.querySelector('#welcome_message')
    const input = document.querySelector("#name_input");
    const form = document.querySelector("#name_form");
    const user = document.querySelector("#user_name");
    const gridPlan = document.querySelector(".grid_plan");


    let userName;
    if (localStorage.getItem('name') !== null) {
        userName = localStorage.getItem('name');
        message.classList.add("d_none");
        //gridPlan.classList.remove("d_none");
        user.innerText = userName;
    } else {
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (input.value !== null && input.value !== '') {
                userName = input.value;
                localStorage.setItem('name', userName);
                user.innerText = userName;
                message.classList.add("d_none");
                gridPlan.classList.remove("d_none");
            } else {
                verification(input,'Proszę wprowadzić imię');
            }
        })
    }


});