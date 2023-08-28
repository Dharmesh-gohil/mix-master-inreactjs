import { useLoaderData,Link,Navigate } from "react-router-dom"
import axios from "axios"
import Wrapper from "../assets/wrappers/CocktailPage"
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailsQuery = (id) => { 
  return {
    queryKey: ["cocktail",id],
    queryFn: async () => { 
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    }
  }
}

export const loader =(queryClient)=>async ({ params}) => { 
  const { id } = params
  await queryClient.ensureQueryData(singleCocktailsQuery(id))
  // const response = await axios.get(`${singleCocktailUrl}${id}`)
  // console.log(response)
  // const { data} = await axios.get(`${singleCocktailUrl}${id}`) for use query commented
// console.log(data)
  // return {id,data}
  //after use of query we modified it 
  return {id}

}

const Cocktail = () => {
  // const { data, id } = useLoaderData()
  // for use of query we change it
  const { id } = useLoaderData()

  // if(!data) return <h2>something went wrong...</h2>

  const { data } = useQuery(singleCocktailsQuery(id))
  
  //below code is for server so no need to change it further
    if(!data) return <Navigate to="/" />


  const singleDrink = data.drinks[0]
  // console.log(singleDrink)
  
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions } = singleDrink
  // console.log(singleDrink)
  //object.keys will convert all data into the array

  // const value = Object.keys(singleDrink)
  // console.log(value)

  const validIngredients = Object.keys(singleDrink).filter(
    (key) => key.startsWith("strIngredient") && singleDrink[key] !== null 
  ).map((key) => singleDrink[key])
  
// console.log(validIngredients)

  return (
    <Wrapper>
      <header>
        <Link to="/"  className="btn">Back-to-Home</Link>
        <h3>{ name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:- </span>
            { name}
          </p>
          <p>
            <span className="drink-data">category:- </span>
            { category}
          </p>
          <p>
            <span className="drink-data">info:- </span>
            { info}
          </p>
          <p>
            <span className="drink-data">glass:- </span>
            { glass}
          </p>
          <p>
            <span className="drink-data">ingredients:- </span>
            {validIngredients.map((item, index) => { 
              return <span className="ing" key={item}>
                {item}{ index<validIngredients.length-1?",":""}
              </span>
            })}
          </p>
          <p>
            <span className="drink-data">instructions:- </span>
            { instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail