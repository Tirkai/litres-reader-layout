export default {
    items: 1,
    slideBy: 1,
    nav: true,
    touch: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    controlsText: [
        `<img src="dist/img/arrow-right.svg" class="invert">`,
        `<img src="dist/img/arrow-right.svg">`
    ],
    responsive: {
        768: {
            items: 2
        },
        1110: {
            items: 3
        }
    }
}