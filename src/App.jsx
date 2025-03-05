import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="admin" element={<Admin />} />
    </Route>
  )
)

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
