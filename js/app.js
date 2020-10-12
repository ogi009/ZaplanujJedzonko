document.addEventListener("DOMContentLoaded", function() {

const banner = () => {
    const arrowLeft = document.querySelector(".banner .fa-arrow-left");
    const arrowRight = document.querySelector(".banner .fa-arrow-right");
    const banner = document.querySelector(".banner_img");

    arrowLeft.addEventListener('click', e => {
        banner.scrollLeft = banner.children[0].width;
    })
}
banner();
});