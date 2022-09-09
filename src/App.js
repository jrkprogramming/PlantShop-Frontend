import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header></Header> */}

        <Routes>
          <Route path='/products' element={<HomePage/>}></Route>
          <Route path='/products/:id' element={<ProductDetailsPage />}></Route>
        </Routes>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
