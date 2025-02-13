import { BrowserRouter } from "react-router-dom"
import RouteApp from "./Route/RouteApp"
import Layout from "./Components/ShareComponents/Layout/Layout"


function App() {


  return (
    <>
     <BrowserRouter>
     <Layout>
     <RouteApp />
     </Layout>
     </BrowserRouter>
    </>
  )
}

export default App
