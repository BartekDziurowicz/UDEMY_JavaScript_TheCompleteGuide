class Tooltip extends HTMLElement {
    constructor() {
        console.log('working');
    }
}

customElements.define('uc-tooltip', Tooltip);