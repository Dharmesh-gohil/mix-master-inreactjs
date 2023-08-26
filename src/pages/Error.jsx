import { Link,useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from "../assets/not-found.svg"
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