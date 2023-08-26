import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
  //this hooks will give info about the state 
  const navigation = useNavigation()
  // console.log(navigation)
  const isPageLoading=navigation.state==="loading"
//context is special props which is very useful
  const value = "some value"
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet context={{value}}/>}
      {/* <Outlet /> */}
      </section>
    
    
    </div>
  )
}
export default HomeLayout