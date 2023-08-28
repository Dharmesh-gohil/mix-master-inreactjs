import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About,HomeLayout,Error,NewsLetter,Cocktail,Landing,SinglePageError } from "./pages";
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsletterAction} from "./pages/NewsLetter"

//when you want to use cach data which was previously fetched then 
//it require to use react query and synchronise data  with server data 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:1000*60*5
    }
  }
})

const router = createBrowserRouter([{
  path: "/",
  element: <HomeLayout />,
  errorElement: <Error />,
  children: [
    {
    index: true,
      element: <Landing />,
      errorElement: <SinglePageError />,
      //here we pass queryClient in actually we invoking that function so we can access  inside the loader funtion 
      loader: landingLoader(queryClient),
    }, {
      path: "cocktail/:id",
      errorElement: <SinglePageError />,
      loader:singleCocktailLoader(queryClient),
      element: <Cocktail />,
    }, {
      path: "newsLetter",
      element: <NewsLetter />,
      action: newsletterAction,
      errorElement:<SinglePageError/>
    }, {
      path: "about",
      element:<About/>
    },
  ]
  
}])
const App = () => {

  return (
    
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
    <ReactQueryDevtools initialIsOpen={ false} />
  </QueryClientProvider>
  )
};
export default App;
