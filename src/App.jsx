import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Internet from "./components/Internet";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/internet" element={<Internet />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
       
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
