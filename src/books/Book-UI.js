import { BookCrud } from "./book-crud.js";
import { BookList } from "./book-list.js";

export function BookUI()
{
    return(
        <>
        
        <BookCrud/>
        <hr/>
        <BookList/>
        </>
    );
}