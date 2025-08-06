import Layout from "./components/Layout";
import ProductFeed from "./components/ProductFeed";
import {Routes, Route} from "react-router-dom";
import ComoComprar from "./components/pages/ComoComprar";
import Login from "./components/pages/Login";
import Reciclar from "./components/pages/Reciclar";
import Cambios from "./components/pages/Cambios";
import Envios from "./components/pages/Envios";
import products from "./data/products.json";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
	return (
		<Layout>
		<Routes>
        <Route path ="/" element={<ProductFeed products={
			products
		} />} />
		<Route path="/products/:id" element={<ProductDetail />} />
        <Route path = "/login" element={<Login />} />
		<Route path = "/como-comprar" element={<ComoComprar />} />
		<Route path = "/reciclar" element={<Reciclar />} />
		<Route path = "/cambios" element={<Cambios />} />
		<Route path = "/envios" element={<Envios />} />
      </Routes>
		</Layout>
	);
}

export default App;
