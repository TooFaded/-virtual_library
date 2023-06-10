const bookForm = document.getElementById('bookForm_container');
let myLibrary = [];


function Book(title, author, pages, readBook) {
    this.title = title;
    this.author = author
    this.pages = pages;
    this.readBook = readBook;

}

function addBookToLibrary(book) {
  myLibrary.push(book);

}






function renderBookCard(book) {
  const card = document.createElement("div");
  card.classList.add("book-card");

  const title = document.createElement("h2");
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement("p");
  author.textContent = "Author: " + book.author;
  card.appendChild(author);

  const pages = document.createElement("p");
  pages.textContent = "Pages: " + book.pages;
  card.appendChild(pages);

  const readStatus = document.createElement("button");
  readStatus.textContent = (book.readBook ? "Read" : "Not Read");

  readStatus.addEventListener("click", function() {
    readStatus.textContent = readStatus.textContent === "Read"  ? "Not Read" : "Read";
  });

  card.appendChild(readStatus);

  return card;
}









const submitBookForm = document.getElementById('bookForm');
submitBookForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");

  const title = titleInput.value;
  const author = authorInput.value;
  const pages = parseInt(pagesInput.value);
  const readBook = readInput.checked;
  
  const newBook = new Book(title, author, pages, readBook);
  
  addBookToLibrary(newBook);
  const container = document.getElementById('bookContainer');
  const card = renderBookCard(newBook);
  container.appendChild(card);

 

  console.log(myLibrary);
  submitBookForm.reset()
  bookForm.style.display = 'none';
  overlay.className = 'inactive';


});


// myLibrary.forEach((book) => {
//     const card = renderBookCard(book);
//     container.appendChild(card);
// });



function toggleFormVisibility() {
    const bookForm = document.getElementById('bookForm_container');
    bookForm.style.display = bookForm.style.display === 'none' ? 'block' : 'none';
    const overlay = document.getElementById('overlay');
    overlay.className = overlay.className === 'inactive' ? 'active' : 'inactive';

    
  }


//Toggle book form for new book
const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.addEventListener('click', toggleFormVisibility);


//Close button functionality
const closeBtn = document.getElementById('close-button');
closeBtn.addEventListener('click', function() {
    bookForm.style.display = 'none'; // Hide the book form
    overlay.className = 'inactive';
  });