
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
    console.log(books)
}
function renderBook(book) {
    let root = document.querySelector('#root');

    let li = document.createElement('li');
    li.textContent = book.title
        root.append(li)
    
    let numOfBooks = document.createElement('input');
    numOfBooks.value = book.quantity
        root.append(numOfBooks);

    let saveBttn = document.createElement('button')
        saveBttn.textContent = 'Save'
    
        saveBttn.addEventListener('click', function () {
            response = fetch('http://localhost:3001/updateBook'), {
                method : 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: numOfBooks.value,
                }),
            }
            return response.json();
        })
            root.append(saveBttn);
    
    let deleteBttn = document.createElement('button');
        deleteBttn.textContent = 'Delete'

        deleteBttn.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook'), {
                    method: 'DELETE',
        }
    })
        root.append(deleteBttn);
}
main()

// async function update(){
//         respone = await fetch('http://localhost:3001/updateBook'), {
//         method : 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//             body: JSON.stringify({
//             id: book.id,
//             quantity: numOfBooks.value,
//         }),
//     }
//     let updatedBook = await response.json();
//     }
    
