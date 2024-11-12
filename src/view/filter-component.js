import { AbstractComponent } from "../framework/view/abstract-component.js  ";


function createFilterComponentTemplate() {
    return (
      
      `
<div class="book-filter">
                <h2>Фильтровать</h2>
                <select id="genre-filter">
                    <option value="all">Все</option>
                    <option value="artistic">Художественная</option>
                    <option value="scientific">Научная</option>
                    <option value="fantastic">Фантастика</option>
                    <option value="biography">Биография</option>
                       </select>
            </div>  

         `

      );
}


export default class FilterComponent extends AbstractComponent{
  
  #handleFilterChange = null;

    constructor({ onFilterChange }) {
        super();
        this.#handleFilterChange = onFilterChange;
        this.element.querySelector('#genre-filter').addEventListener('change', this.#filterChangeHandler);
    }
    
    get template() {
        return createFilterComponentTemplate();
    }

    #filterChangeHandler = (evt) => {
      evt.preventDefault();   
      const selectedGenre = evt.target.value; // Получаем выбранный жанр

      this.#handleFilterChange(selectedGenre); // Передаем выбранный жанр в функцию родительского компонента
      console.log(selectedGenre)

    };
}