import Landing from "./Landing";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

function App() {
  

  const router = createBrowserRouter([
    {path: "/", element: <Landing />}
  ])

  return (
    <RouterProvider router={router} />


  );
}

export default App;
