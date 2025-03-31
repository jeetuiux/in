import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from './Components/About';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/about',
      element: <About/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
