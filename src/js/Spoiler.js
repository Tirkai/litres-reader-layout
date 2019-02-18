class Spoiler {
    state = {
        control: null,
        element: null,
        isOpen: false,
    }
    constructor(options) {
        this.state = {...this.state, ...options};
    }
    init() {
        this.state.control.addEventListener('click', () => this.toggle());
        return this;
    }
    show(){
        this.state.isOpen = true;
        this.state.element.classList.add('active');
    }
    hide(){
        this.state.isOpen = false;
        this.state.element.classList.remove('active');
    }
    toggle() {
        const isOpen = !this.state.isOpen;
        if (isOpen) this.show() 
        else this.hide();
    }
}
export default Spoiler;