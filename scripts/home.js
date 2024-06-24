import {cart, removeBook} from "../data/cart.js";
import {books} from "../data/books.js";

let cartHTML='';
const headingElement=document.querySelector('.js-selected-book-heading');
const cartContainer=document.querySelector('.js-book-grid');

cart.forEach((cartItem) => {
  let matchingItem='';

  books.forEach((book) => {
    if(cartItem===book.id){
      matchingItem=book;
    }
  });

  cartHTML+=`
    <div class="book-container js-book-container-${matchingItem.id}">
      <div class ="book-image-container">
        <img class="book-image" src="${matchingItem.image}">
      </div>
      <div class="book-name">
        ${matchingItem.name}
      </div>
      <div class="author-name">
        ${matchingItem.author}
      </div>
      <button class="delete-button js-delete-button" data-book-id="${matchingItem.id}">
        Delete
      </button>
    </div>
  `;
});

if(cart.length!=0){
  headingElement.innerHTML='Selected Books';
  cartContainer.innerHTML=cartHTML;
}else{
  cartContainer.innerHTML='No books selected';
  headingElement.innerHTML='';
}

document.querySelectorAll('.js-delete-button')
.forEach((button) => {
  button.addEventListener('click',() => {
    const {bookId}=button.dataset;
    const bookElement=document.querySelector(`.js-book-container-${bookId}`);
    removeBook(bookId);
    bookElement.remove();

    if(cart.length===0){
      cartContainer.innerHTML='No books selected';
      headingElement.innerHTML='';
    }
  });
});