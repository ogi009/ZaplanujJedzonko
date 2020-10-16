document.addEventListener("DOMContentLoaded", function () {

    const gridPlan = document.querySelector(".grid_plan");
    const notificationBox = document.querySelector(".notification_box");
    let notificationClose = document.querySelectorAll(".notification_close");

    const notificationArray = [];
    const notificationArrayCounter = [];


    const printNotificationArray = () => {

        if (notificationArray.length >= 3) {
            notificationBox.innerHTML = ``;
            notificationBox.prepend(notificationArray[notificationArray.length - 3]);
            notificationBox.prepend(notificationArray[notificationArray.length - 2]);
            notificationBox.prepend(notificationArray[notificationArray.length - 1]);
        } else {
            for (let el of notificationArray) {
                notificationBox.prepend(el);
            }

        }

    }


    const addNotificationInfo = (notificationInfo) => {

        notificationArrayCounter.push(notificationArrayCounter.length)

        const notificationInfoInsert = document.createElement("div");
        notificationInfoInsert.classList.add("notification_info");
        notificationInfoInsert.innerHTML = `
                    <i class="fas fa-info-circle"></i>
                    <h3>${notificationInfo}</h3>
                    <a class="notification_close" href="">
                        <i class="fas fa-window-close"></i>
                    </a>`;
        notificationArray.push(notificationInfoInsert);
        printNotificationArray();

        notificationClose = document.querySelectorAll(".notification_close");
        for (let el of notificationClose) {
            el.addEventListener("click", e => {
                e.preventDefault();
                el.parentElement.classList.add("d_none");
                // printNotificationArray();
            })
        }

    };


    const addNotificationWaringn = (addNotificationWaring) => {

        notificationArrayCounter.push(notificationArrayCounter.length)


        const notificationWaringInsert = document.createElement("div");
        notificationWaringInsert.classList.add("notification_waring");
        notificationWaringInsert.innerHTML = `
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>${addNotificationWaring}</h3>
                <a class="notification_close" href="">
                        <i class="fas fa-window-close"></i>
                    </a>`;
        notificationArray.push(notificationWaringInsert);
        printNotificationArray();

        notificationClose = document.querySelectorAll(".notification_close");
        for (let el of notificationClose) {
            el.addEventListener("click", e => {
                e.preventDefault();
                el.parentElement.classList.add("d_none");
                // printNotificationArray();
            })
        }
    };


    const addNotificationSucces = (addNotificationSucces) => {


        notificationArrayCounter.push(notificationArrayCounter.length)


        const notificationSuccesInsert = document.createElement("div");
        notificationSuccesInsert.classList.add("notification_succes");
        notificationSuccesInsert.innerHTML = `
                   <i class="fas fa-check-circle"></i>
                    <h3>${addNotificationSucces}</h3>
                    <a class="notification_close" href="">
                        <i class="fas fa-window-close"></i>
                    </a>`;
        notificationArray.push(notificationSuccesInsert);
        printNotificationArray();

        notificationClose = document.querySelectorAll(".notification_close");
        for (let el of notificationClose) {
            el.addEventListener("click", e => {
                e.preventDefault();
                el.parentElement.classList.add("d_none");
                // printNotificationArray();
            })
        }
    };

    addNotificationSucces("Świetnie że jesteś! Udanego planowania i samcznego!");
    addNotificationWaringn("Pamiętaj, aby dodać plan!");

    // addNotificationSucces("1");
    // addNotificationWaringn("2");
    // addNotificationWaringn("3");
    // addNotificationWaringn("4");


});