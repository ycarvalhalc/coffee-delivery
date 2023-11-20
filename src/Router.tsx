import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderConfirmed } from './pages/OrderConfirmed'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/congratulations" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}