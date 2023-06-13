export class DBCard extends HTMLElement {
    constructor() {
      super();
      this.title = this.getAttribute('title')
      this.value = this.getAttribute('value')
    }
    
    connectedCallback() {
      this.innerHTML = `
        <div class='db-card'>
          <div class='db-card-value'> ${this.value} </div>
          <div class='db-card-title'> ${this.title} </div>
        </div>
      `;
    }
  }