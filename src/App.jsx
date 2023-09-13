import './index.css'
import Navbar from "./components/Navbar/Navbar"
import Slider from './components/Slider/Slider'
import ProductList from './components/ProductList/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<>
          <Slider />
          <ProductList />
        </>
        } />
        <Route path='product/:productId' element={<ProductDetails />}/>
      </Routes>
    </>
  )
}

export default App
