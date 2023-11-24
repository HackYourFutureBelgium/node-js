import { v4 as newId } from 'uuid';

const books = [
    {
        id: newId(),
        title: 'Book 1'
    },
    {
        id: newId(),
        title: 'Book 2'
    },
    {
        id: newId(),
        title: 'Book 3'
    }
];

class Book {
    constructor(title) {
        this.id = newId();
        this.title = title;
    }

    addBook() {
        books.push(this);
    }

    static getBookById(id) {
        return books.find((book) => book.id === id);
    }

    static getBooks() {
        return books;
    }

    static updateBook(id, updatedTitle) {
        const book = books.find((book) => book.id === id);
        if (book) {
            book.title = updatedTitle;
        }
    }

    static deleteBook(id) {
        const index = books.findIndex((book) => book.id === id);
        if (index !== -1) {
            books.splice(index, 1);
        }
    }
}

export default Book;
