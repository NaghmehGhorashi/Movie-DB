import Home from "../Pages/Home/Home.jsx"
import Movies from "../Pages/Movies/Movies.jsx"
import Movie from "../Pages/Movie/Movie.jsx"
import Cart from "../Pages/Cart/Cart.jsx"
import Layout from "../Components/ShareComponents/Layout/Layout.jsx"
import Login from "../Pages/login/Login.jsx"



export const routes=[
{
    path : "/",
    element:<Layout><Home /></Layout>,
    isprivate:true
},
{
    path : "/movies",
    element: <Layout><Movies/></Layout>,
    isprivate:true
},
{
    path : "/movies/:id",
    element: <Layout><Movie/></Layout>,
    isprivate:true
},
{
    path : "/cart",
    element: <Layout><Cart/></Layout>,
    isprivate:true
},
{
    path : "/login",
    element: <Login/>,
    isprivate:false
}
]