export class FacultyCard extends HTMLElement {
    constructor() {
      super();
      this.title = this.getAttribute('title')
      this.text = this.getAttribute('text')
      this.imgSrc = this.getAttribute('img-src')
    }
    
    connectedCallback() {
      this.innerHTML = `
        <div class="faculty-card">
            <div class="faculty-card-image"><img src="${this.imgSrc}" alt="${this.title}"></div>
            <div class="faculty-card-content">
                <h2 class="faculty-card-title">${this.title}</h2>
                <p class="faculty-card-text">${this.text}</p>
            </div>
        </div>
      `;
    }
}
