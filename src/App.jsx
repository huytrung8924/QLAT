import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import PopupRegister from "./components/PopupRegister";
import FloatingContact from "./components/FloatingContact";
import {
  getRegistrations,
} from "./utils/localStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registrations, setRegistrations] = useState([]);
  const [showPopupRegister, setShowPopupRegister] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    loadData();
  }, []);

  useEffect(() => {
    const isHomePage = location.pathname === "/" && !location.hash;
    setShowPopupRegister(isHomePage);
  }, [location.pathname, location.hash]);

  const handleClosePopup = () => {
    setShowPopupRegister(false);
  };

  const loadData = () => {
    const storedRegistrations = getRegistrations();
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
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:category"
            element={<Products />}
          />
          <Route path="/products/detail/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <AdminDashboard registrations={registrations} onRefresh={refreshData} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
      {showPopupRegister && <PopupRegister onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
