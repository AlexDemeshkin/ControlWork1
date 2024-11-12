  import ListComponent from '../view/list-component.js';
  import BoardComponent from '../view/board-component.js';
  import BookComponent from '../view/element-component.js';
  import {render} from '../framework/render.js';
  import { Genre } from '../const.js';

  export default class BookBoardPresenter {
    #bookModel = null;
    #boardComponent;
    #boardContainer=null;
    #currentGenre = 'all'; // Текущий выбранный жанр для фильтрации


  constructor({boardContainer, bookModel}) {
  this.#boardContainer = boardContainer;
  this.#bookModel =  bookModel;
  this.#bookModel.addObserver(this.#handleModelChange.bind(this));
  }

  init() {
    this.#renderBoard();
  }
 
  #renderBoard(){
    this.#boardComponent = new BoardComponent();
    render(this.#boardComponent, this.#boardContainer)
    for (let i in Genre) {
      this.genre_name = Genre[i];
      this.#renderList(Genre[i],this.#boardComponent.element);
      }
  }

  #renderList(genre_name,container){
    const listComponent = new ListComponent({genre: genre_name});
    render(listComponent, container);
    const booksForGenre = this.#bookModel.getBooksByGenre(
      this.genre_name
      );
      booksForGenre.forEach(elem => {
        if (this.#currentGenre === 'all' || this.#currentGenre === elem.genre) {
            this.#renderElement(elem, listComponent.element);
        }
    });
  }

  #renderElement(book,container){
    const bookComponent = new BookComponent({book: book, onClick: () => this.#deleteBook(book.id), onUpdateClick:()=> this.#updateBookForm(book.id, book.name, book.author,book.genre)});
    render(bookComponent, container);
  }

  createBook() {
    const bookName = document.querySelector("#book-title").value.trim(); 
        if (!bookName) { 
          return; 
        } 
        const bookAuthor = document.querySelector("#book-author").value.trim(); 
        if (!bookAuthor) { 
          return; 
        }
        const bookGanre = document.querySelector("#book-genre").value.trim(); 
        if (!bookGanre) { 
          return; 
        }
        this.#bookModel.addBook(bookName,bookAuthor,bookGanre); 
        document.querySelector("#book-title").value = '';
        document.querySelector("#book-author").value = ''; 
        document.querySelector("#book-genre").value = ''; 


      } 
      changeBook(selectedGenre) {
        this.#currentGenre = selectedGenre; // Обновляем текущий фильтр
        this.#handleModelChange(); // Перерисовываем список книг с учетом фильтра
    }
    #clearBoard(){
      this.#boardContainer.innerHTML='';
    }
    #deleteBook(bookId) {
      this.#bookModel.deleteBookById(bookId); 
      this.#handleModelChange(); 
    }
    #updateBookForm(bookId, name, author, genre){
      console.log(bookId)
   
      document.querySelector(".form-book").style.display = 'none';
      document.querySelector(".upDate-block").style.display = 'block';
      document.querySelector("#update-book-title").value = name;
      document.querySelector("#update-book-author").value = author;
      document.querySelector("#update-book-genre").value = genre;

      document.querySelector(".upDateButton").onclick = () => {
        this.#updateBook(bookId); // Обновляем книгу с новыми данными
    };
    };
      
    #updateBook(bookId){
      const updatedName = document.querySelector("#update-book-title").value.trim();
      const updatedAuthor = document.querySelector("#update-book-author").value.trim();
      const updatedGenre = document.querySelector("#update-book-genre").value.trim();

      this.#bookModel.updateBookById(bookId, updatedName, updatedAuthor, updatedGenre);

    
      document.querySelector(".upDate-block").style.display = 'none';
    document.querySelector(".form-book").style.display = 'block';
    this.#handleModelChange();
    }
      #handleModelChange(){
        this.#clearBoard();
        this.#renderBoard();
      }

      
    
  }



