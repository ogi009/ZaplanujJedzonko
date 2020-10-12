document.addEventListener("DOMContentLoaded", function () {

        const arrowLeft = document.querySelector(".banner .fa-arrow-left");
        const arrowRight = document.querySelector(".banner .fa-arrow-right");
        const banner = document.querySelector(".banner_img");

        const moveBanner = (target) => {
            if (banner.scrollLeft === 0) {
                target.className.includes('right') ? banner.scrollTo({left: 1440, behavior: 'smooth'})
                    : banner.scrollTo({left: 2880, behavior: 'smooth'})

            } else if (banner.scrollLeft === 1440) {
                target.className.includes('right') ? banner.scrollTo({left: 2880, behavior: 'smooth'})
                    : banner.scrollTo({left: 0, behavior: 'smooth'})

            } else if (banner.scrollLeft === 2880) {
                target.className.includes('right') ? banner.scrollTo({left: 0, behavior: 'smooth'})
                    : banner.scrollTo({left: 1440, behavior: 'smooth'})
            }
        }

        arrowLeft.addEventListener('click', e => moveBanner(e.target));
        arrowRight.addEventListener('click', e => moveBanner(e.target));

});