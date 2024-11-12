import { book } from '../mock/book.js';
import { generateId } from '../utils.js';

export default class BookModel {
 #boardbook = book;
 #observers =[];


 get book() { 
   return this.#boardbook;
   
 }
 getBooksByGenre(genre){ 
  return this.#boardbook.filter(book=>book.genre===genre); 
 }
 
 addBook(name, author,genre){ 
  const newBook = { 
    id: generateId(), 
    name, 
    author,
    genre, 
  }; 
 
  this.#boardbook.push(newBook); 

  this._notifyObservers(); 
  return newBook; 
 } 

 deleteBookById(bookId){

  this.#boardbook = this.#boardbook.filter(book => book.id !== bookId);
 }


 updateBookById(bookId,name,author,genre){
  const book = this.#boardbook.find(book => book.id === bookId);
  console.log(book)
  if (book) {
    book.name = name;
    book.author = author;
    book.genre = genre;
    this._notifyObservers(); 
    
  }
 }

 addObserver(observer){ 
  this.#observers.push(observer); 
 } 


 
 removeObserver(observer){ 
  this.#observers=this.#observers.filter((obs) => obs !== observer); 
 } 
 
 _notifyObservers(){ 
  this.#observers.forEach((observer) => observer()); 
 
}
}
