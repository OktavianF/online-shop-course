import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { Orders } from './pages/Orders'
import { Checkout } from './pages/Checkout'
import { Tracking } from './pages/Tracking'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
