export class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div>
          This is the footer element  
        </div>
      `;
    }
  }
  
