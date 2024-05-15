import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {Home,About,Contact, Product,Github,Dev} from './components/Index'


import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from  "react-router-dom";
import './index.css'
import { getGithubInfo } from './components/Github/github';


// First way to declare route
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App />,
//     children:[
//       {path:'/',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />  
//       },
//       {
//         path:'contact',
//         element:<Contact />  
//       }
//     ]
//   }
// ])

// second way to declare Route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}>
        {/* <Route path="dev" element={<Dev/>}/> */}
        </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="product/:pid" element={<Product/>}/>
      <Route loader={getGithubInfo}
      path="github" element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
