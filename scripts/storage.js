import {books} from "../data/books.js";
import {addBook} from "../data/cart.js";

let booksHTML='';
books.forEach((book) => {
  booksHTML+=`
    <div class="book-container">
        <div class="book-image-container">
          <img class="book-image"
            src="${book.image}">
        </div>

        <div class="book-name">
          ${book.name}
        </div>
        <div class="author-name">
          ${book.author}
        </div>

        <div class="book-rating-container">
          <img class="book-rating-stars"
            src="images/ratings/rating-${book.rating.star * 10}.png">
          <div class="product-rating-count">
            ${book.rating.count}
          </div>
        </div>

        <div class="added js-added-${book.id}">
          <img src="images/icons/checkmark.png" class="added-image">
          Added
        </div>
        <button class="add-book-button js-add-book-button" data-book-id="${book.id}">
          Add Book
        </button>
      </div>
    </div> 
    `;
});

document.querySelector('.js-book-grid')
  .innerHTML=booksHTML;

document.querySelectorAll('.js-add-book-button')
.forEach((button) => {
  button.addEventListener('click', () => {
    const {bookId} = button.dataset;
    addBook(bookId);
  });
});

export function display(bookId){
  const addedElement=document.querySelector(`.js-added-${bookId}`);

  addedElement.classList.add('visible-added');
  setTimeout(()=>{
    addedElement.classList.remove('visible-added');
  },1000);
}