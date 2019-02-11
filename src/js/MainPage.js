import sliderConfig from './sliderConfig'

class MainPage {
    init() {
        const container = document.querySelector(".js-carousel");
        tns({
            ...sliderConfig,
            ...{container}
        });
    }
}
export default new MainPage;