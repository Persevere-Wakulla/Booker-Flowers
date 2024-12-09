import {
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider,
 
} from 'react-router-dom'

import Home, {productsLoader} from './pages/Home'
import CreateCustomer from './pages/CreateCustomer'
import WhatIsThePrice, {whatIsThePriceLoader} from './pages/WhatIsThePrice.jsx'
import Products from './components/Products'
import ShoppingCart, { cartLoader } from './pages/ShoppingCart'
import Store, {storeLoader} from './pages/Store'
import './App.css'
import RootLayout from './layout/RootLayout'
import ProductsError from './components/ProductsError.jsx'
import ProductsLayout from './components/ProductsLayout.jsx'
import ProductsDetails,  { productsDetailsLoader }  from './components/ProductsDetails'

import SignIn from './pages/SignIn'



const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<RootLayout />}>
  <Route index element={<Home />} loader={productsLoader} />
  <Route path='Sign-In' element={<SignIn />} />
  <Route path='create-customer' element={<CreateCustomer />} />
  <Route path='WhatIsThePrice' element={<WhatIsThePrice />} loader={whatIsThePriceLoader} />
  <Route path='store' element={<Store />} loader={storeLoader} />
  <Route path='products' element={<Products />} />
  <Route path='shoppingCart' element={<ShoppingCart />} loader={cartLoader} />


  <Route path='products' element={<ProductsLayout />}  errorElement={<ProductsError />}>
        <Route 
        index 
        element={<Products />} 
        loader={productsLoader}
       
       
        />
        <Route 
        path=':id'
        element={<ProductsDetails />}
        loader={productsDetailsLoader}
       
        />
      </Route>


</Route>


  ) 
)

function App() {
 

  return (
    
    
    <RouterProvider router={router} />
  )
}

export default App
