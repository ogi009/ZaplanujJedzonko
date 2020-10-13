document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector('#welcome_message')
    const input = document.querySelector("#name_input");
    const button = document.querySelector("#name_submit");
    const user = document.querySelector("#user_name");

    let userName;
    if(localStorage.getItem('name' !== null)) {
        userName = localStorage.getItem('name');
        message.style.display = 'none';
    }
    else {
        button.addEventListener('click', e => {
            if (input.value !== null && input.value !== '') {
                userName = input.value;
                localStorage.setItem('name', userName);
            } else {
                input.style.borderColor = '$color';
                input.style.placeholder = 'Proszę wprowadzić imię';
                input.style.placeholder.color = 'tomato';
            }
        })
    }
    user.innerText = userName;
});