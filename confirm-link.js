class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('Really')) {
                event.preventDefault();
            }
        });
    }
}

customElements.define('uc-confirm-link', ConfirmLink, { extends: 'a' });