import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Main from "./pages/website/Main"
import Home from "./pages/website/Home"
import Store from "./pages/website/Store"
import Cart from "./pages/website/Cart"

const routes = createBrowserRouter(
  [
    {
      path:"/",
      element: <Main/>, 
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"store",
          element:<Store/>
        },
        {
          path:"cart",
          element:<Cart/>
        }
        
      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
