import { BrowserRouter } from "react-router-dom"
import RouteApp from "./Route/RouteApp"
import Layout from "./Components/ShareComponents/Layout/Layout"
import AppContextProvider from "./Context/AppContextProvider"


function App() {


  return (
    <>
      <AppContextProvider>
       <BrowserRouter>
        <Layout>
         <RouteApp />
        </Layout>
       </BrowserRouter>
     </AppContextProvider>
    
    </>
  )
}

export default App
