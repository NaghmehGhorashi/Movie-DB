import Home from "../Pages/Home/Home"
import Movies from "../Pages/Movies/Movies"
import Movie from "../Pages/Movie/Movie"



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
}

]