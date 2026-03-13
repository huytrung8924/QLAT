import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div style={{ textAlign: "center", padding: "100px 0" }}>
            <h2>Không tìm thấy sản phẩm</h2>
            <Link
              to="/products"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Quay lại danh sách
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return (price / 1000000000).toFixed(1) + " tỷ VNĐ";
    }
    return (price / 1000000).toFixed(0) + " triệu VNĐ";
  };

  const getCategoryLabel = (cat) => {
    const labels = {
      lien_ke: "Liền kề",
      shophouse: "Shophouse",
      biet_thu: "Biệt thự",
    };
    return labels[cat] || cat;
  };

  return (
    <div className="product-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "20px", color: "var(--text-secondary)" }}>
          <Link to="/">Trang chủ</Link> /<Link to="/products"> Sản phẩm</Link> /
          <span style={{ color: "var(--primary)" }}> {product.name}</span>
        </nav>

        <div className="product-detail-grid">
          {/* Left - Image Gallery */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="gallery-thumbs">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`gallery-thumb ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="product-info">
            <span
              style={{
                display: "inline-block",
                background: "var(--secondary)",
                color: "white",
                padding: "5px 15px",
                borderRadius: "20px",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              {getCategoryLabel(product.category)}
            </span>

            <h1>{product.name}</h1>
            <p className="product-price">{formatPrice(product.price)}</p>

            <div className="product-details">
              <div className="detail-item">
                <span className="detail-label">Diện tích</span>
                <span className="detail-value">{product.area} m²</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Số phòng ngủ</span>
                <span className="detail-value">{product.bedrooms} phòng</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Số phòng tắm</span>
                <span className="detail-value">{product.bathrooms} phòng</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Loại sản phẩm</span>
                <span className="detail-value">
                  {getCategoryLabel(product.category)}
                </span>
              </div>
            </div>

            <div className="product-description">
              <h3>Mô tả chi tiết</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-contact">
              <Link
                to="/register"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: "center" }}
              >
                Đăng ký tư vấn
              </Link>
              <a
                href="tel:0901888999"
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: "center" }}
              >
                Gọi ngay
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: "60px" }}>
          <h2 style={{ marginBottom: "30px", color: "var(--primary)" }}>
            Sản phẩm cùng loại
          </h2>
          <div className="products-grid">
            {products
              .filter(
                (p) => p.category === product.category && p.id !== product.id,
              )
              .slice(0, 3)
              .map((p) => (
                <div key={p.id} className="product-card">
                  <div className="product-image">
                    <img src={p.images[0]} alt={p.name} />
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-price">{formatPrice(p.price)}</p>
                    <div className="product-specs">
                      <span className="product-spec">📐 {p.area} m²</span>
                      <span className="product-spec">🛏️ {p.bedrooms} PN</span>
                    </div>
                    <Link
                      to={`/products/detail/${p.id}`}
                      className="btn btn-outline"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
