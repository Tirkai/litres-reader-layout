class TemplateControls{
    init(){
        const headerNavMobileControl = document.querySelector(".header__nav-mobile");
        const mobileMenu = new DropdownMenu({
            control: headerNavMobileControl,
            element: document.querySelector(".header__nav")
        });
        headerNavMobileControl.addEventListener('click', mobileMenu.toggle);

        const headerAccountContainer = document.querySelector('.header__account');

        const loginButtonControl = document.querySelector(".js-login-dropdown-button");
        const loginForm = new DropdownMenu({
            element: document.querySelector('.js-login-form'),
            control: headerAccountContainer
        });
        loginButtonControl.addEventListener('click', loginForm.toggle);

        const registerButtonControl = document.querySelector(".js-register-dropdown-button");
        const registerForm = new DropdownMenu({
            element: document.querySelector('.js-register-form'),
            control: headerAccountContainer
        });
        registerButtonControl.addEventListener('click', registerForm.toggle);
        
        const controlsGroup = [loginForm, registerForm];
        loginForm.state.group = controlsGroup;
        registerForm.state.group = controlsGroup;
    }
}
class DropdownMenu{
    state = {
        isOpen: false,
        element: null,
        control: null,
        group: []
    }
    constructor(options){
        this.state = {...this.state, ...options}
    }

    changeVisibility = (visibility) => {
        console.log("change", this);
        const element = this.state.element;
        const control = this.state.control;
        if(visibility){
            if(element) element.classList.add('active');
            if(control) control.classList.add('active');
        } else {
            if(element) element.classList.remove('active');
            if(control) control.classList.remove('active');
        }
    }
    open = () => {
        this.state.isOpen = true;
        this.changeVisibility(this.state.isOpen);
        const group = this.state.group;
        console.log(group);
        if(group.length){
            group.forEach(item => {
                if(item !== this) item.close();
            });
        }
    }
    close = () => {
        this.state.isOpen = false;
        this.changeVisibility(this.state.isOpen);
    }
    toggle = () => {
        this.state.isOpen = !this.state.isOpen;
        if(this.state.isOpen) this.open();
        else this.close();
    }

}   
export default new TemplateControls;