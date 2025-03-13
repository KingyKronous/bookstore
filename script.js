async function fetchBooks() { 

	const response = await fetch('getBooks.php'); 

	const books = await response.json(); 

	return books; 

} 

 

async function searchBooks() { 

	const input = document.getElementById('bar').value.toLowerCase(); 

	console.log('Търсене за:', input); 

 

	const books = await fetchBooks(); 

	console.log('Върнати книги:', books); 

 

	const filteredBooks = books.filter(book =>  

		book.title.toLowerCase().includes(input) ||  

		book.author.toLowerCase().includes(input) 

	); 

	console.log('Филтрирани книги:', filteredBooks); 

 

	const bookList = document.getElementById('cat'); 

	const noResults = document.getElementById('noResults'); 

	bookList.innerHTML = ''; 

	noResults.style.display = 'none'; 

 

	if (filteredBooks.length === 0) { 

		noResults.style.display = 'block'; 

	} else { 

		filteredBooks.forEach(book => { 

		const bookItem = document.createElement('div'); 

			bookItem.className = 'book'; 

			bookItem.innerHTML = ` 

				<h4>${book.title}</h4> 

				<strong>${book.author}</strong>

				<p>${book.description}</p> 

				<p>Наличност:${book.available ? 'Налична' : 'Не е налична'}</p> 

				<button type="button" onclick="showDetails('${book.title}', '${book.author}', '${book.description}')">Подробности</button> 

			`; 

			bookList.appendChild(bookItem); 

		}); 

	} 

} 

 

function showDetails(title, author, description) { 

	alert(`Заглавие: ${title}\nАвтор: ${author}\nОписание: ${description}`); 
}