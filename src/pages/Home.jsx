import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920",
      title: "ERO Riverside",
      subtitle: "Khu đô thị sinh thái thông minh cao cấp",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920",
      title: "Cuộc sống đẳng cấp",
      subtitle: "Tiện ích hiện đại, không gian xanh mát",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920",
      title: "Vị trí chiến lược",
      subtitle: "Kết nối thuận tiện mọi nơi",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const projectInfo = [
    {
      icon: "🏢",
      label: "Chủ đầu tư",
      value: "ERO Group",
    },
    {
      icon: "📐",
      label: "Quy mô",
      value: "45 ha - 3.000 căn",
    },
    {
      icon: "📍",
      label: "Vị trí",
      value: "Hà Nội - Bắc Ninh",
    },
    {
      icon: "🏠",
      label: "Sản phẩm",
      value: "Liền kề, Shophouse, Biệt thự",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} className="hero-image" />
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/products" className="btn btn-primary">
                    Xem sản phẩm
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-secondary"
                    style={{ background: "white", color: "var(--primary)" }}
                  >
                    Đăng ký tư vấn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Introduction */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Giới thiệu dự án ERO Riverside</h2>
          <p className="section-subtitle">
            Khu đô thị sinh thái thông minh cao cấp tại Hà Nội - Bắc Ninh
          </p>

          <div
            style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "var(--text-secondary)",
                marginBottom: "30px",
              }}
            >
              <strong>ERO Riverside</strong> là dự án khu đô thị sinh thái thông
              minh cao cấp được phát triển bởi ERO Group tại vị trí chiến lược
              giữa Hà Nội và Bắc Ninh. Dự án mang đến một không sống đẳng cấp
              với hệ thống tiện ích hiện đại, không gian xanh mát và các sản
              phẩm bất động sản đa dạng từ liền kề, shophouse đến biệt thự.
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "var(--text-secondary)",
              }}
            >
              Với tầm nhìn trở thành khu đô thị kiểu mẫu, ERO Riverside không
              chỉ là nơi an cư lý tưởng mà còn là cơ hội đầu tư hấp dẫn với tiềm
              năng tăng giá cao trong tương lai gần.
            </p>
          </div>

          <div className="project-info">
            {projectInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <div className="info-label">{info.label}</div>
                <div className="info-value">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Danh mục sản phẩm</h2>
          <p className="section-subtitle">
            Khám phá các loại sản phẩm đa dạng tại ERO Riverside
          </p>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
                  alt="Liền kề"
                />
                <span className="product-badge">Hot</span>
              </div>
              <div className="product-content">
                <h3 className="product-name">Liền kề</h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "15px",
                  }}
                >
                  Căn liền kề 4-5 tầng, thiết kế hiện đại, phù hợp kinh doanh và
                  ở
                </p>
                <Link
                  to="/products/lien_ke"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
                  alt="Shophouse"
                />
                <span className="product-badge">Best Seller</span>
              </div>
              <div className="product-content">
                <h3 className="product-name">Shophouse</h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "15px",
                  }}
                >
                  Mặt phố thương mại, vị trí đắc địa, tiềm năng kinh doanh cao
                </p>
                <Link
                  to="/products/shophouse"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
                  alt="Biệt thự"
                />
                <span className="product-badge">Cao cấp</span>
              </div>
              <div className="product-content">
                <h3 className="product-name">Biệt thự</h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "15px",
                  }}
                >
                  Biệt thự đơn lập, song lập, không gian sống đẳng cấp
                </p>
                <Link
                  to="/products/biet_thu"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/products" className="btn btn-secondary">
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tiện ích & Hạ tầng</h2>
          <p className="section-subtitle">
            Những ưu điểm vượt trội của ERO Riverside
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {[
              {
                icon: "🌳",
                title: "Công viên",
                desc: "Công viên cây xanh, hồ điều hòa",
              },
              {
                icon: "🏊",
                title: "Bể bơi",
                desc: "Bể bơi 4 mùa tiêu chuẩn quốc tế",
              },
              {
                icon: "🏋️",
                title: "Gym & Spa",
                desc: "Phòng gym, spa cao cấp",
              },
              {
                icon: "🛒",
                title: "Trung tâm thương mại",
                desc: "Shophouse, siêu thị, nhà hàng",
              },
              {
                icon: "🏫",
                title: "Trường học",
                desc: "Hệ thống giáo dục quốc tế",
              },
              { icon: "🏥", title: "Y tế", desc: "Bệnh viện, phòng khám" },
              {
                icon: "🔒",
                title: "An ninh",
                desc: "Bảo vệ 24/7, camera giám sát",
              },
              {
                icon: "🚗",
                title: "Giao thông",
                desc: "Đường rộng, parking rộng",
              },
            ].map((item, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{item.icon}</div>
                <div
                  className="info-label"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  {item.title}
                </div>
                <div className="info-value" style={{ fontSize: "14px" }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          background: "linear-gradient(135deg, var(--primary), #3949ab)",
          color: "white",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Bạn quan tâm đến dự án ERO Riverside?
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "30px", opacity: 0.9 }}>
            Hãy đăng ký ngay để nhận tư vấn miễn phí và cập nhật thông tin mới
            nhất
          </p>
          <div
            style={{ display: "flex", gap: "15px", justifyContent: "center" }}
          >
            <Link
              to="/register"
              className="btn btn-primary"
              style={{ background: "white", color: "var(--primary)" }}
            >
              Đăng ký ngay
            </Link>
            <Link
              to="/map"
              className="btn"
              style={{
                background: "transparent",
                border: "2px solid white",
                color: "white",
              }}
            >
              Xem vị trí
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
