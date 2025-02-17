import Home from "../Pages/Home/Home.jsx"
import Movies from "../Pages/Movies/Movies.jsx"
import Movie from "../Pages/Movie/Movie.jsx"
import Cart from "../Pages/Cart/Cart.jsx"



export const routes=[
{
    path : "/",
    element: <Home />
},
{
    path : "/movies",
    element: <Movies/>
},
{
    path : "/movies/:id",
    element: <Movie/>
},
{
    path : "/cart",
    element: <Cart/>
}


]