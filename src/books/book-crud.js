import { Book } from "./book.js";
import { useState,useRef } from "react";
import { BookService } from "./book-service.js";
export function BookCrud()
{
    const [book,setBook] = useState();
    const bookId = useRef();
    const title = useRef();
    const author = useRef();
    const publisher = useRef();
    const price = useRef();

    const addBook = () => {
        setBook(new Book(bookId.current.value,title.current.value,author.current.value,publisher.current.value,price.current.value));
        BookService.addBook(book).then();
    }

    const modifyBook = () => {
        setBook(new Book(bookId.current.value,title.current.value,author.current.value,publisher.current.value,price.current.value));
        BookService.modifyBook(book).then();
    }

    const deleteBook = () => {
        BookService.deleteBookByTitle(title.current.value).then();
    }

    /*
    const getBook = () => {
        BookService.getBookByTitle(title.current.value).then((response) => {setBook(response.data);
        bookId.current.value = response.data.bookId;
        author.current.value = response.data.author;
        publisher.current.value = response.data.publisher;
        price.current.value = response.data.price;
        })
        
    }

    */

    const getBook = () => {
        BookService.getBookByTitle(title.current.value).then((response) => {setBook(response.data);setData(response.data);});
        
        }
        

    const setData= (b) => {
        bookId.current.value = b.bookId;
        author.current.value = b.author;
        publisher.current.value = b.publisher;
        price.current.value = b.price;

        
    }

    return (
        <table width ="50%" border="1" align="center">
            <tr>
                <th>Book Id</th>
                <th><input type="text" ref={bookId}></input></th>
            </tr>

            <tr>
                <th>Book Title</th>
                <th><input type="text" ref={title}></input></th>
            </tr>

            <tr>
                <th>Book Author</th>
                <th><input type="text" ref={author}></input></th>
            </tr>

            <tr>
                <th>Book Publisher</th>
                <th><input type="text" ref={publisher}></input></th>
            </tr>

            <tr>
                <th>Book Price</th>
                <th><input type="text" ref={price}></input></th>
            </tr>

            <tr>
                <td><button onClick={addBook}>Add Book</button></td>
                <td><button onClick={getBook}>Get Book</button></td>
            </tr>

            <tr>
                <td><button onClick={deleteBook}>Delete Book</button></td>
                <td><button onClick={modifyBook}>Modify Book</button></td>
            </tr>

        </table>

    );
}