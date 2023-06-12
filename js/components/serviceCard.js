export class ServiceCard extends HTMLElement {
    constructor() {
      super();
      this.title = this.getAttribute('title')
      this.imgSrc = this.getAttribute('img-src')
    }
    
    connectedCallback() {
      this.innerHTML = `
        <div class="se-card">
          <img src="${this.imgSrc}" alt="${this.title}"/>  
          <div class="se-card-title">${this.title}</div>
        </div>
      `;
    }
  }