import { Footer, Header } from './components/index';
import { 
  Main, Devices, Liquids, Accessories, Discounts,
  AboutPage, SelectItemPage, Registration, Auth,
  Account, PlaceAnOrder 
} from './pages/index'
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import './assets/styles/reset.scss'

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header items={['DEVICES', 'ELIQUID', 'ACCESSORIS', 'DISCOUNTS', 'ABOUT US']}/>

        <Routes>
          <Route path='/' element={<Main />} exact />
          <Route path='/devices' element={<Devices />} exact />
          <Route path='/liquids' element={<Liquids />} exact />
          <Route path='/accessories' element={<Accessories />} exact />
          <Route path='/discounts' element={<Discounts />} exact />
          <Route path='/about-page' element={<AboutPage />} exact />
          <Route path='/item' element={<SelectItemPage />} exact />
          <Route path='/placeorder' element={<PlaceAnOrder />} exact />
          <Route path='/registration' element={<Registration />} exact />
          <Route path='/auth' element={<Auth />} exact />
          <Route path='/account' element={<Account />} exact />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
