import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import App from './../App.js';
import {Home} from './home.js';
import {BookUI} from './../books/Book-UI.js';
import {PageNotFound} from './../page-not-found.js';
export function MenuBar()
{
    return(
        <BrowserRouter>
        <div>
            <Link to = {'/'}>Home</Link>
            <Link to = {'/bookui'}>Books</Link>&emsp;
            <Link to = {'/appui'}>Flights</Link>&emsp;

            <Routes>
                <Route path='/'      element={<Home/>}></Route>
                <Route path='/bookui'      element={<BookUI/>}></Route>
                <Route path='/appui'      element={<App/>}></Route>
                <Route path='/*'      element={<PageNotFound/>}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}