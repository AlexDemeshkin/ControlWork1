import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import AddFormComponent from './view/add-form-component.js';
import FilterComponent from './view/filter-component.js';
import BookBoardPresenter from './presenter/book-board-pressenter.js';
import BookModel from './model/book-model.js';
import UpDateFormComponent from './view/update-book-component.js';


const headerContainer=document.querySelector('.header')
const addFormContainer=document.querySelector('.form-book')
const filterContainer=document.querySelector('.filter-book')
const boardlistContainer=document.querySelector('.list-book')
const upDateFormContainer = document.querySelector('.upDate-block')

const bookModel = new BookModel();
const headerComponent=new HeaderComponent();
const bookBoardPresenter=new BookBoardPresenter({boardContainer: boardlistContainer,
    bookModel,
})
const filterComponent=new FilterComponent({
  onFilterChange: filterChange,
});

  function filterChange(selectedGenre){
    bookBoardPresenter.changeBook(selectedGenre);

  }
const addFormComponent = new AddFormComponent({ 
    onClick: addBookButton, 
  }); 
 
  function addBookButton() { 
    bookBoardPresenter.createBook(); 
  }

const upDateFormComponent = new UpDateFormComponent({});

render(headerComponent, headerContainer, RenderPosition.AFTERBEGIN);
render(addFormComponent, addFormContainer, RenderPosition.AFTERBEGIN)
render(filterComponent, filterContainer, RenderPosition.AFTERBEGIN)
render(upDateFormComponent, upDateFormContainer, RenderPosition.AFTERBEGIN)

bookBoardPresenter.init()


