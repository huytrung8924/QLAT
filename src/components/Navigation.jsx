import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn, onLogout }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect width="50" height="50" rx="10" fill="#1a237e" />
            <path d="M25 10L40 35H10L25 10Z" fill="#ff6f00" />
            <rect x="20" y="25" width="10" height="10" fill="white" />
          </svg>
          <span>ERO Riverside</span>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Giới thiệu
            </NavLink>
          </li>
          <li className="nav-item nav-dropdown">
            <NavLink to="/products" className="nav-link">
              Danh mục sản phẩm
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </NavLink>
            <div className="dropdown-menu">
              <Link to="/products/lien_ke" className="dropdown-item">
                Liền kề
              </Link>
              <Link to="/products/shophouse" className="dropdown-item">
                Shophouse
              </Link>
              <Link to="/products/biet_thu" className="dropdown-item">
                Biệt thự
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/map" className="nav-link">
              Bản đồ & Sơ đồ
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link">
              Thư viện
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Đăng ký
            </NavLink>
          </li>
        </ul>

        <div className="nav-auth">
          {isLoggedIn ? (
            <>
              <Link to="/admin" className="btn btn-secondary">
                Quản trị
              </Link>
              <button onClick={onLogout} className="btn btn-outline">
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Đăng nhập
            </Link>
          )}
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Giới thiệu</Link>
          </li>
          <li>
            <span
              style={{ display: "block", padding: "15px", fontWeight: "500" }}
            >
              Danh mục sản phẩm
            </span>
            <div className="dropdown-menu">
              <Link to="/products/lien_ke">Liền kề</Link>
              <Link to="/products/shophouse">Shophouse</Link>
              <Link to="/products/biet_thu">Biệt thự</Link>
            </div>
          </li>
          <li>
            <Link to="/map">Bản đồ & Sơ đồ</Link>
          </li>
          <li>
            <Link to="/gallery">Thư viện</Link>
          </li>
          <li>
            <Link to="/register">Đăng ký</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/admin">Quản trị</Link>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  style={{
                    background: "none",
                    border: "none",
                    width: "100%",
                    textAlign: "left",
                    padding: "15px",
                    fontWeight: "500",
                    color: "#f44336",
                  }}
                >
                  Đăng xuất
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
