export default {
    items: 1,
    slideBy: "page",
    nav: true,
    touch: true,
    mouseDrag: true,
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