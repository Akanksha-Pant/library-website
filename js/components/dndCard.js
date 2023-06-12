import {SECTION_DATA} from '../constant.js'

export class DNDBullet extends HTMLElement {
    constructor() {
      super();
      this.point = this.getAttribute('point')
      this.index = this.getAttribute('index')
      this.bulletClass = parseInt(this.index, 10) % 2 !== 0 ? 'dnd-bullet--dark' : 'dnd-bullet--light';
    }
    
    connectedCallback() {
      this.innerHTML = `
        <div class="dnd-bullet ${this.bulletClass}">
          ${this.point}
        </div>
      `;
    }
  }

  export class DNDCard extends HTMLElement{
      constructor(){
          super();
          this.type = this.getAttribute('data-type');
          this.cardTitle = this.type === 'dos' ? 'Dos' : 'Donts'
          this.data = SECTION_DATA.dnd[this.type]; 
      }
        
      renderDNDList () {
          let DNDlist = ``
          this.data.forEach((point,index) => {
            DNDlist += `<dnd-bullet point="${point}" index="${index}"></dnd-bullet>`
              
          });

          return DNDlist;
      }
      
      connectedCallback(){
        this.innerHTML = `
        <div class="dnd-card">
          <div class="dnd-card-header"> ${this.cardTitle} </div>  
          <div class="dnd-bullet dnd-bullet--dark" ></div>
          ${this.renderDNDList()}
        </div>
        `
      }
  }