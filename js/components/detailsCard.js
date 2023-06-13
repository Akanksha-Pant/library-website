export class DetailsCard extends HTMLElement {
    constructor() {
      super();
      this.icon = this.getAttribute('icon')
      this.info = this.getAttribute('info')
    }
    
    connectedCallback() {
      this.innerHTML = `
        <div class="details-card">
            <div class="details-icon"><i class="${this.icon}"></i></div>
            <div class="details-info"> ${this.info} </div>
        </div>
        <div class="line"></div>
      `;
    }
}


