import React from 'react'
import Home from './Routes/Home'
import AboutUs from './Routes/AboutUs'
import Orders from './Routes/Orders'
import Recipes from './Routes/Recipes'
import { Layout } from './layout'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SignIn from './Routes/SignIn'
import { ContextProvider } from './Context/OrderContext/ContextProvider'
import ItemPreview from './components/ItemPreview'
import SignUp from './Routes/SignUp'
import UserContextProvider from './Context/OrderContext/UserContext'
import ThemeContextProvider from './Context/OrderContext/ThemeContext'
function App(){
  return (
    <ThemeContextProvider>
    <UserContextProvider>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="orders" element={<Orders />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="/recipes/:id" element={<ItemPreview />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App
