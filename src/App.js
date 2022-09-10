import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import ProductDetailsPage from './Pages/PlantDetailsPage'
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar></Navbar>

        <Routes>
          <Route path='/plants' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/plants/:id' element={<ProductDetailsPage />}></Route>
          <Route path="/cart">
            <Route index element={<CartPage />} />
            <Route path=":id" element={<CartPage />} />
          </Route>
        </Routes>
        
    </div>
  );
}

export default App;