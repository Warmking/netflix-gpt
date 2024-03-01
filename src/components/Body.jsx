/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browser from "./Browser"
import LoginPage from "./LoginPage"


const Body = () => {
  
  const appBrowser  = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>
    },
    {
      path:'/browse',
      element:<Browser/>
    }
  ])
  
  return (
    <div>
      <RouterProvider router={appBrowser}/>
    </div>
  )
}

export default Body