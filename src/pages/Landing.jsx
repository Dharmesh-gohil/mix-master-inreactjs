import { useLoaderData } from "react-router-dom"
import axios from "axios";
import CocktailList from './../components/CocktailList';
import SearchForm from './../components/SearchForm';

import { useQuery } from "@tanstack/react-query";
  

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCocktailsQuery = (searchTerm) => { 
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async() => { 
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      console.log(response)
      return response.data.drinks
    }
  }
}

  //loader is not hooks(is function not component) always remember
//useQuery is hooks so if we directly try to access inside of loader we
// get big fat error so in app we pass queryclient in the loader:landingLoader(queryClient)
// we can access it inside loader function
//here we make loader as a function that take queryClient as argument and
//and return a function means after part of  (queryClient)=> is a loader
export const loader= (queryClient)=> async ({ request }) => { 
//this below line was before access of queryCLient but to access we change
//  above we make loader a function that return another function
//export const loader = async ({ request }) => { 
  console.log(request)
  const url=new URL(request.url)
  const searchTerm = url.searchParams.get("search") || ""
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
  //here  ensureQueryData method will check in cach data if it there then
  // it will send to landing component and print it there if not then 
  //it will fetch and print it in landing component using useQuery

//using reactQuery we comment it and removing drinks:response.data.drinks and
//alsso removing drinks  from landing  component
  // const response=await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  // console.log(response)
  // return "something"
  // return {searchTerm,drinks:response.data.drinks}
  return {searchTerm}
}

const Landing = () => {
  
  // const data = useLoaderData()
  // const { searchTerm,drinks}=useLoaderData() for using query we comment this
  const { searchTerm } = useLoaderData()
  const { data:drinks,isLoading}=useQuery(searchCocktailsQuery(searchTerm))
  console.log(drinks)
  // console.log(drinks,searchTerm)
  if(isLoading) return <h3>Loading...</h3>
  return (
    <>
      <SearchForm searchTerm={ searchTerm} />
      <CocktailList drinks={ drinks} />
    </>
  )
}
export default Landing