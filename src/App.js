import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Deals from "./pages/Deals";
import Newsletter from "./components/Newsletter";
import Servises from "./components/Servises";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";
import Save from "./components/Save";
import Account from "./components/Account";
import Login from "./components/Login";
import ProductsCategories from "./components/ProductsCategories";
import Products from "./components/Products";
import VerifyOtp from "./components/VerifyOtp";
import Checkout from "./components/Checkout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <TopNavbar />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/deals" element={<Deals />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/save" element={<Save />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/categories/:id" element={<ProductsCategories />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="verifyOtp" element={<VerifyOtp />} />
      </Routes>
      <Newsletter />
      <Servises />
      <Footer />
    </>
  );
}

export default App;
