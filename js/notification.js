document.addEventListener("DOMContentLoaded", function () {

    const gridPlan = document.querySelector(".grid_plan");
    let notificationClose = document.querySelectorAll(".notification_close");

    const notificationArray = [];
    const notificationArrayCounter = [];

    const printNotificationArray = () => {
        for (let el of notificationArray) {
            gridPlan.prepend(el);
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
        // gridPlan.append(notificationInfoInsert)
        notificationClose = document.querySelectorAll(".notification_close");
        notificationArray.push(notificationInfoInsert);
        printNotificationArray();

        for (let el of notificationClose) {
            el.addEventListener("click", e => {
                e.preventDefault();
                el.parentElement.classList.add("d_none");
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
        // gridPlan.append(notificationWaringInsert)
        notificationClose = document.querySelectorAll(".notification_close");
        notificationArray.push(notificationWaringInsert);
        printNotificationArray();

        for (let el of notificationClose) {
            el.addEventListener("click", e => {
                e.preventDefault();
                el.parentElement.classList.add("d_none");
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
        // gridPlan.append(notificationSuccesInsert)
        notificationClose = document.querySelectorAll(".notification_close");
        notificationArray.push(notificationSuccesInsert);
        printNotificationArray();


        for (let el of notificationClose) {
            el.addEventListener("click", e => {
                e.preventDefault();
                el.parentElement.classList.add("d_none");
            })
        }
    };

    addNotificationSucces("Świetnie że jesteś! Udanego planowania i samcznego!");
    addNotificationWaringn("Pamiętaj, aby dodać plan!");
    addNotificationSucces("3");





    // addNotificationInfo("info");
    // addNotificationWaringn("waring");

});