import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeLayout = () => {
  //this hooks will give info about the state either app state is idle or
  // loading we loading the page and see it in console this is also useful in formsubmitting also
  const navigation = useNavigation()
  // console.log(navigation)
  const isPageLoading=navigation.state==="loading"
//context is special props which is very useful
  const value = "some value"
  return (
    <div>
      <Navbar />
      {/* here all page has same layout for this we wrap outlet 
      //component in section tag which has className page so all 
      //page get same Outlet */}
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet context={{value}}/>}
      {/* <Outlet /> this is very useful to show all data across 
      //all pages means share all layout across all the children 
      //of its main "/" component s so if we made navbar in main 
      //component the we dont require to make navbar in all component 
      //but it is shareda all children component it also contain special prop like context
       so if we pass any data in outlet component then we can access all deep level of 
       //its all children and there we have to use special hook like const data =useOutletContext() then use clg to show that data
       author use that tric in its mern course so do it als0 */}
      </section>
    
    
    </div>
  )
}
export default HomeLayout