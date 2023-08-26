import { useRouteError } from "react-router-dom"

const SinglePageError = () => {
    const error = useRouteError()
    console.log(error)
  return (
    //this error.message is useful in development phase only we not want enduser to know about it
    // <h2>{error.message}</h2>
    <h2>There was an error ....</h2>
  )
}
export default SinglePageError