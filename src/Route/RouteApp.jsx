import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import {routes} from "./Route.const"
import PrivateRout from ".././Components/ShareComponents/privateRoute/PrivateRout"

function RouteApp() {
  const {pathName}=useLocation()
  return (
    <div>
      <Routes>
       {
        routes.map( (route,index)=>(
          route.isprivate ?
            (<Route key={index} element={<PrivateRout />}>
              <Route  path={route.path}   element={route.element}/>
            </Route>)
            :
            (<Route key={index} path={route.path}   element={
              pathName==="/login"? <Navigate to="/"/> :route.element
            }/>)
        ))
       } 
      </Routes>
    </div>
  )
  
}

export default RouteApp
