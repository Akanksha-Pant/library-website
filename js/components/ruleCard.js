export class RuleCard extends HTMLElement {
    constructor() {
      super();
      this.question = this.getAttribute('question')
      this.answer = this.getAttribute('answer')
    }
    
    connectedCallback() {
      this.innerHTML = `
        <details aria-expanded="false" class="rs-card">
          <summary>${this.question}</summary>
          <div class="rs-card-ans">
            ${this.answer}</p>
          </div>
        </details>       
      `;
    }
  }