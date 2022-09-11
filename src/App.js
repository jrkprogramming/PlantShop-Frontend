import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import ProductDetailsPage from './Pages/PlantDetailsPage'
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'
import ShippingPage from './Pages/ShippingPage'

function App() {
  return (
    <div>
      <Navbar></Navbar>

        <Routes>
          <Route path='/plants' element={<HomePage/>}></Route>
          <Route path='/users/login' element={<LoginPage/>}></Route>
          <Route path='/users/signup' element={<SignupPage/>}></Route>
          <Route path='/users/profile' element={<ProfilePage/>}></Route>
          <Route path='/plants/:id' element={<ProductDetailsPage />}></Route>
          <Route path="/cart">
            <Route index element={<CartPage />} />
            <Route path=":id" element={<CartPage />} />
          </Route>
          <Route path='/shipping' element={<ShippingPage />}></Route>
        </Routes>
        
    </div>
  );
}

export default App;