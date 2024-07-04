loadHeader();

function loadHeader(){
  const headerInnerHTML =`
    <div class="header-left">
      <a href="home.html">
        <button class="home-link-button">Home</button>
      </a>
    </div>

    <div class="header-middle">
      <h1>Books</h1>
    </div>

    <div class="header-right">
      <input class="search-bar js-search-bar" type="text" placeholder="Search">

      <button class="search-button js-search-button">
        <img class="search-icon" src="images/icons/search-icon.png"
      </button>
    </div>
  `;

  document.querySelector('.js-header')
  .innerHTML = headerInnerHTML;

  document.querySelector('.js-search-button')
  .addEventListener('click', () => {
    changeScreen();
  });

  document.querySelector('.js-search-bar')
  .addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
      changeScreen();
    }
  });

  function changeScreen(){
    window.location.href = `storage.html?search=${document.querySelector('.js-search-bar').value}`
  }
}