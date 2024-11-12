import { AbstractComponent } from "../framework/view/abstract-component.js  ";


function createUpDateFormComponentTemplate() {
    return (
      
      `
<div class="book-form-update">
            <h2>Изменить</h2>
            <form id="book-form">
                <input type="text" id="update-book-title" placeholder="Название книги" required />
                <input type="text" id="update-book-author" placeholder="Автор" required />
                <select id="update-book-genre" required>
                    <option value="">Выбрать жанр</option>
                    <option value="artistic">Художественная</option>
                    <option value="scientific">Научная</option>
                    <option value="fantastic">Фантастика</option>
                    <option value="biography">Биография</option>
                </select>
                <button class="upDateButton"type="button">Изменить</button>
            </form>
        </div>   
         `

      );
}


export default class UpDateFormComponent extends AbstractComponent {
 
  
  get template() {
    return createUpDateFormComponentTemplate();
  }

}