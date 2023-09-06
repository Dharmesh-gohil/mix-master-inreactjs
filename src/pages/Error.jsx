import { Link,useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from "../assets/not-found.svg"

// it is always wiseful to handle error page bcos errror always bubble up
// so always try to one error handle element in homeLayout page or main (index)
// page so when we not handle in perticular page it bubble up and handled in homepage
// so we add error Element in indexpage
 
//here we get error image from undraw website and using it here
const Error = () => {
  const error = useRouteError()
  // console.log(error)
  if (error.status === 404) { 
    return (
      <Wrapper>
        <div>
          <img src={img} alt="image not found" />
          <h3>ohh!</h3>
          <p>we cant seem to find a page you are looking for </p>
        <Link to="/">Back to Home-Page</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>
        <h3>oops! something went wrong</h3>
      </div>
    </Wrapper>
   
  )
}
export default Error