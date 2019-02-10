import 'window'
class App {
    static init() {
        const carousel = document.querySelector(".js-carousel");
        tns({
            container: carousel,
            items: 3,
            slideBy: "page",
            nav: true,
            touch: true,
            mouseDrag: true,
            autoplayButtonOutput: false,
            controlsText: [
                `<img src="dist/img/arrow-right.svg" class="invert">`,
                `<img src="dist/img/arrow-right.svg">`
            ]
        });
        
        console.log('APP INITED');
    }
}
App.init();
export default App;