/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browser from "./Browser"
import LoginPage from "./LoginPage"
import MovieInfo from "./MovieInfo"


const Body = () => {
  
  const appBrowser  = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>
    },
    {
      path:'/browse',
      element:<Browser/>
    },
    {
      path:'/movieInfo',
      element:<MovieInfo/>
    }
  ])
  
  return (
    <div>
      <RouterProvider router={appBrowser}/>
    </div>
  )
}

export default Body