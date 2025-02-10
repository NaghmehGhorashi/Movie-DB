import Navbar from "../../Share.Components/Navbar/Navbar"

function Layout({children}) {
  return (
    <div>
        <Navbar />
      {children}
    </div>
  )
}

export default Layout
