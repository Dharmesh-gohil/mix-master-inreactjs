import { useLoaderData } from "react-router-dom"
import axios from "axios";
import CocktailList from './../components/CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => { 
  const searchTerm = ""
  const response=await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  // console.log(response)
  // return "something"
  return {searchTerm,drinks:response.data.drinks}
}

const Landing = () => {
  // const data = useLoaderData()
  const { searchTerm,drinks}=useLoaderData()
  // console.log(drinks,searchTerm)
  return (
    <>
      <CocktailList drinks={ drinks} />
    </>
  )
}
export default Landing