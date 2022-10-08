import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div id="1" className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting={'Welcome'} />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/detail/:productId" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
