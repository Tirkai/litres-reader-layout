import 'window'
import mainPage from './MainPage'
import templateControls from './TemplateControls'
class App {
    init() {
        mainPage.init();
        templateControls.init();
    }
}
const app = new App();
app.init();
export default app;