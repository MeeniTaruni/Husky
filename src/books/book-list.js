import { useState,useEffect } from "react";
import { BookService } from "./book-service";
export function BookList()
{
    const [blist,setBookList] = useState([]);//[] indicates empty array
    
    
    const getAllBooks = () => {
        BookService.getAllBooks().then((response) => setBookList(response.data));
    }
    

    useEffect(
        () => getAllBooks(),[]
    );


    return(
        <>
        {/*<button onClick={getAllBooks}>Get All Books</button>*/}
        <table border="1" width="50%" align="center">
            <tr>
                <th>BookId</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Price</th>
            </tr>
            {
            blist.map((book,index) => <tr key={index}>
                <td>{book.bookId}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.price}</td>
            </tr>)
            }
        </table>
        </>
    );
}