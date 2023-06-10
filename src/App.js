import Landing from "./Landing";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import printDayNamesCurrentMonth from "./helper/virualMonth";

function App() {
  

  const router = createBrowserRouter([
    {path: "/", element: <Landing />}
  ])

  printDayNamesCurrentMonth();

  return;
    <RouterProvider router={router} />


 
}

export default App;
