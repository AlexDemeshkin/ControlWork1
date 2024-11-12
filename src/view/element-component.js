import { AbstractComponent } from "../framework/view/abstract-component.js  ";


function createBookComponentTemplate(book) {
    const {name,id, author,genre} = book;
    return (
      
      `
        <li id="${id}" class="${genre}">${name} - ${author}<button class="update-button">изменить</button>
        <button class="delete-button">x</button></li>
         `

      );
}


export default class BookComponent extends AbstractComponent{
  #handleClick = null;
  #handleUpdateClick = null;
    constructor({book,onClick,onUpdateClick}){
      super();

        this.book=book;
        this.#handleClick = onClick;
        this.#handleUpdateClick = onUpdateClick;
        this.element.querySelector('.delete-button').addEventListener("click", this.#clickHandler); 
        this.element.querySelector('.update-button').addEventListener("click", this.#clickUpdateHandler); 

      }


  get template() {
    return createBookComponentTemplate(this.book);
  }
  
  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick(this.book.id);
  };

  #clickUpdateHandler = (evt) => {
    evt.preventDefault();
    this.#handleUpdateClick(this.book.id, this.book.name, this.book.author,this.book.genre);
  };

  
};