// Mock book collection
let books = [
    { title: "Cosmos", author: "Carl Sagan", description: "A personal voyage into the universe." },
    { title: "Astrophysics for People in a Hurry", author: "Neil deGrasse Tyson", description: "An easy introduction to space." }
  ];
  
  // Render books on the page
  function renderBooks(filteredBooks = books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
  
    filteredBooks.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p>${book.description}</p>
      `;
      bookList.appendChild(bookCard);
    });
  }
  
  // Search functionality
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));
    renderBooks(filteredBooks);
  });
  
  // Add book functionality
  const bookForm = document.getElementById('book-form');
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author-name').value;
    const description = document.getElementById('description').value;
  
    books.push({ title, author, description });
    renderBooks();
    bookForm.reset();
  });
  
  // Initial render
  renderBooks();
  