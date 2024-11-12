import { AbstractComponent } from "../framework/view/abstract-component.js  ";
import { GenreLabel } from '../const.js';

function createListComponentTemplate(genre) {
    return (
      
      `
        
                <ul id="book-list--${genre}">
                   <h2>${GenreLabel[genre]}</h2>

                </ul> 
         `

      );
}


export default class ListComponent extends AbstractComponent{
  constructor({genre}){
    super();
    this.genre=genre;
  }

  get template() {
    return createListComponentTemplate(this.genre);
  }
}