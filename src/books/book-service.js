import axios from "axios";
export class BookService
{
    static getAllBooks()
    {
        return axios.get('http://localhost:8091');
    }

    static getBookByTitle(title)
    {
        return axios.get('http://localhost:8091/'+title);
    }

    static addBook(book)
    {
        return axios.post('http://localhost:8091',book);
    }

    static modifyBook(book)
    {
        return axios.put('http://localhost:8091',book);
    }

    static deleteBookByTitle(title)
    {
        return axios.delete('http://localhost:8091/'+title);
    }
}