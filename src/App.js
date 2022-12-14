import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import BrandPresentation from './layouts/BrandPresentation/BrandPresentation';
import Home from './pages/Home/Home';
import Footer from './layouts/Footer/Footer';
import QuienesSomos from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import Faqs from './pages/Faqs/Faqs';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div id="1" className="App">
			<CartContextProvider>
				<BrowserRouter>
					<Navbar />
					<BrandPresentation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/quienes_somos" element={<QuienesSomos />} />
						<Route path="/faqs" element={<Faqs />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/category/:categoryId" element={<Products />} />
						<Route path="/detail/:productId" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
