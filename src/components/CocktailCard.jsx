import { Link, useOutletContext } from "react-router-dom"
import Wrapper from "../assets/wrappers/CocktailCard"
import { useContext } from "react"

const CocktailCard = ({ name, image, info, glass, id, }) => {
//this is passfrom homeLayout components here we access using useOutLetContext
//const data=useOutletContext()
// console.log(data)
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={ name} className="img" />
      </div>  
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={ `/cocktail/${id}`} className="btn">Details</Link>
      </div>
    </Wrapper>
  )
}
export default CocktailCard