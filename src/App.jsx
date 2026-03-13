import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MapPage from "./pages/MapPage";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminMap from "./pages/AdminMap";
import AdminGallery from "./pages/AdminGallery";
import {
  getProducts,
  getGallery,
  getMapConfig,
  getRegistrations,
} from "./utils/localStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [mapConfig, setMapConfig] = useState(null);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    loadData();
  }, []);

  const loadData = () => {
    const storedProducts = getProducts();
    const storedGallery = getGallery();
    const storedMapConfig = getMapConfig();
    const storedRegistrations = getRegistrations();

    setProducts(storedProducts);
    setGallery(storedGallery);
    setMapConfig(storedMapConfig);
    setRegistrations(storedRegistrations);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  const refreshData = () => {
    loadData();
  };

  return (
    <div className="app">
      <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:category"
            element={<Products products={products} />}
          />
          <Route
            path="/products/detail/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="/map" element={<MapPage mapConfig={mapConfig} />} />
          <Route path="/gallery" element={<Gallery gallery={gallery} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <AdminDashboard registrations={registrations} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admin/products"
            element={
              isLoggedIn ? (
                <AdminProducts products={products} onRefresh={refreshData} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admin/map"
            element={
              isLoggedIn ? (
                <AdminMap mapConfig={mapConfig} onRefresh={refreshData} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admin/gallery"
            element={
              isLoggedIn ? (
                <AdminGallery gallery={gallery} onRefresh={refreshData} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
