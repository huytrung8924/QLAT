import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/">
              <svg width="60" height="60" viewBox="0 0 50 50" fill="none">
                <rect width="50" height="50" rx="10" fill="#ff6f00" />
                <path d="M25 10L40 35H10L25 10Z" fill="white" />
                <rect x="20" y="25" width="10" height="10" fill="#ff6f00" />
              </svg>
            </Link>
            <h4 style={{ color: "white", marginBottom: "15px" }}>
              ERO Riverside
            </h4>
            <p>
              Dự án ERO Riverside Hà Nội - Bắc Ninh là khu đô thị sinh thái
              thông minh cao cấp, mang đến cuộc sống đẳng cấp với đầy đủ tiện
              ích hiện đại. Vị trí chiến lược, hạ tầng hoàn thiện, tiềm năng
              tăng giá cao.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5.5 7.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 2c-1 0-2 .5-2.5 1.5L2.5 15a2 2 0 0 0 2 2h2l.5-2h2l.5 2h2a2 2 0 0 0 2-2l.5-4c-.5-1-1.5-1.5-2.5-1.5zm5.5 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 2c-1 0-2 .5-2.5 1.5L8.5 15a2 2 0 0 0 2 2h2l.5-2h2l.5 2h2a2 2 0 0 0 2-2l.5-4c-.5-1-1.5-1.5-2.5-1.5zm7 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 2c-1 0-2 .5-2.5 1.5l-.5 4a2 2 0 0 0 2 2h2l.5-2h2l.5 2h2a2 2 0 0 0 2-2l-.5-4c-.5-1-1.5-1.5-2.5-1.5z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon
                    points="9.75,15.02 15.5,11.75 9.75,8.48"
                    fill="#0d1b3d"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Liên kết nhanh</h4>
            <ul>
              <li>
                <Link to="/">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/products">Danh mục sản phẩm</Link>
              </li>
              <li>
                <Link to="/products/lien_ke">Liền kề</Link>
              </li>
              <li>
                <Link to="/products/shophouse">Shophouse</Link>
              </li>
              <li>
                <Link to="/products/biet_thu">Biệt thự</Link>
              </li>
              <li>
                <Link to="/map">Bản đồ & Sơ đồ</Link>
              </li>
              <li>
                <Link to="/gallery">Thư viện</Link>
              </li>
              <li>
                <Link to="/register">Đăng ký tư vấn</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Loại sản phẩm</h4>
            <ul>
              <li>
                <Link to="/products/lien_ke">Liền kề</Link>
              </li>
              <li>
                <Link to="/products/shophouse">Shophouse</Link>
              </li>
              <li>
                <Link to="/products/biet_thu">Biệt thự</Link>
              </li>
              <li>
                <Link to="/register">Căn hộ</Link>
              </li>
              <li>
                <Link to="/register">Office-tel</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Liên hệ</h4>
            <ul className="footer-contact">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Hotline: 0901 888 999</span>
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Trụ sở: Đại Mỗ, Nam Từ Liêm, Hà Nội</span>
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email: info@eroriverside.vn</span>
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline
                    points="12,6 12,12 16,14"
                    fill="none"
                    stroke="white"
                  />
                </svg>
                <span>Giờ làm: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 ERO Riverside. All rights reserved. Thiết kế và phát triển
            bởi ERO Group
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
