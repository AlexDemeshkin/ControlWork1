import { AbstractComponent } from "../framework/view/abstract-component.js  ";


function createAddFormComponentTemplate() {
    return (
      
      `
<div class="book-form">
            <h2>Добавить новую книгу</h2>
            <form id="book-form">
                <input type="text" id="book-title" placeholder="Название книги" required />
                <input type="text" id="book-author" placeholder="Автор" required />
                <select id="book-genre" required>
                    <option value="">Выбрать жанр</option>
                    <option value="artistic">Художественная</option>
                    <option value="scientific">Научная</option>
                    <option value="fantastic">Фантастика</option>
                    <option value="biography">Биография</option>
                </select>
                <button type="submit">Добавить книгу</button>
            </form>
        </div>   
         `

      );
}


export default class AddFormComponent extends AbstractComponent {
  #handleClick = null; 
 
  constructor({ onClick }) { 
    super(); 
    this.#handleClick = onClick; 
    this.element.addEventListener("submit", this.#clickHandler); 
  }
  #clickHandler = (evt) => { 
    evt.preventDefault(); 
    this.#handleClick(); 
  };
  get template() {
    return createAddFormComponentTemplate();
  }

}