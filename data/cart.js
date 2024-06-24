import { display } from "../scripts/storage.js";
export const cart=JSON.parse(localStorage.getItem('cart')) || [];

export function addBook(bookId){
  let flag=0;
  cart.forEach((cartItem) => {
    if(bookId===cartItem){
      alert('Book already added');
      flag=1;
      return;
    }
  });

  if(flag===0){
    cart.push(bookId);
    updateStorage();
    display(bookId);
  }
}

export function removeBook(bookId){
  cart.forEach((cartItem,index) => {
    if(cartItem===bookId){
      cart.splice(index,1);
      updateStorage();
      return;
    }
  });
}

function updateStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}