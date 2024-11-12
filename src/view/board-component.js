import { AbstractComponent } from "../framework/view/abstract-component.js  ";


function createBoardListComponentTemplate() {
    return (
      
      `
 <div class="book-list">
          
         `

      );
}


export default class BoardListComponent extends AbstractComponent {
  
  get template() {
    return createBoardListComponentTemplate();
  }

}