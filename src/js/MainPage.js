import sliderConfig from './sliderConfig'
import Spoiler from './Spoiler'
class MainPage {
    init() {
        const container = document.querySelector(".js-carousel");
        tns({
            ...sliderConfig,
            ...{container}
        });
        const spoilers = document.querySelectorAll(".main-page__about__card");
        spoilers.forEach((item) => {
            const spoiler = new Spoiler({
                control: item.querySelector(".main-page__about__card__title"),
                element: item.querySelector(".main-page__about__card__content"),
                isOpen: false
            }).init();
            console.log(spoiler);
            
        })
    }
}
export default new MainPage;