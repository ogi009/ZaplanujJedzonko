document.addEventListener("DOMContentLoaded", function () {

        const arrowLeft = document.querySelector(".banner .fa-arrow-left");
        const arrowRight = document.querySelector(".banner .fa-arrow-right");
        const banner = document.querySelector(".banner_img");

        const moveBanner = (target) => {
            if(banner.scrollLeft % banner.children[0].width){
                banner.scrollLeft = 0;
            }
            const width = banner.children[0].width;

            if (banner.scrollLeft === 0) {
                target.className.includes('right') ?
                    banner.scrollTo({left: width, behavior: 'smooth'})
                    : banner.scrollTo({left: 2*width, behavior: 'smooth'})

            } else if (banner.scrollLeft === width) {
                target.className.includes('right') ?
                    banner.scrollTo({left: 2*width, behavior: 'smooth'})
                    : banner.scrollTo({left: 0, behavior: 'smooth'})

            } else if (banner.scrollLeft === 2*width) {
                target.className.includes('right') ?
                    banner.scrollTo({left: 0, behavior: 'smooth'})
                    : banner.scrollTo({left: width, behavior: 'smooth'})
            }
        }

        arrowLeft.addEventListener('click', e => moveBanner(e.target));
        arrowRight.addEventListener('click', e => moveBanner(e.target));

});