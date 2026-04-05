import { useState } from "react";
import { useParams } from "react-router-dom";

const productTypes = {
  biet_thu_song_lap: {
    name: "Biệt thự song lập",
    dtxd: "120 m²",
    dtsan: "360 m²",
    dtdat: "320-380 m²",
    image: "/images/biet-thu-song-lap.jpeg",
    images: [
      "/images/biet-thu-song-lap.jpeg",
      "/images/biet-thu-don-lap.png",
      "/images/van-phong-cao-oc.jpeg",
    ],
    description:
      "Bố trí thành từng cặp trên mỗi lô riêng với diện tích từ 320-380m². Không gian thoáng, nội thất sang trọng, hài hòa và hợp lý. Biệt thự song lập mang đến không gian sống đẳng cấp với thiết kế hiện đại, tối ưu công năng sử dụng, tận dụng tối đa ánh sáng và gió tự nhiên. Chủ nhân tận hưởng không gian sống riêng tư đẳng cấp giữa lòng đại đô thị.",
    floors: 3,
  },
  biet_thu_don_lap: {
    name: "Biệt thự đơn lập",
    dtxd: "140 m²",
    dtsan: "420 m²",
    dtdat: "400-560 m²",
    image: "/images/biet-thu-don-lap.png",
    images: [
      "/images/biet-thu-don-lap.png",
      "/images/biet-thu-song-lap.jpeg",
      "/images/van-phong-cao-oc.jpeg",
    ],
    description:
      "Kiến trúc châu Âu hiện đại và hướng chủ đạo là dòng sông nhân tạo nằm phía Tây Nam, khu biệt thự tạo thành một không gian kiến trúc đô thị hoàn hảo và một không gian văn hóa độc đáo. Mỗi khu biệt thự đơn lập gồm 15 căn, được thiết kế khép kín, có sân vườn, bể bơi, sân tennis và được đảm bảo an ninh tuyệt đối 24/24 giờ. Với diện tích khuôn viên từ 400-560m²/căn, mật độ xây dựng 35%, tầng cao nhất được khống chế, khu biệt thự như một công viên nhìn ra sông - một cảnh quan thực sự lãng mạn và hiếm có ở các khu đô thị.",
    floors: 3,
  },
  van_phong_cao_oc: {
    name: "Văn phòng - Cao ốc",
    dtxd: "3500 m²",
    dtsan: "12600 m²",
    dtdat: "18 tầng",
    image: "/images/van-phong-cao-oc.jpeg",
    images: [
      "/images/van-phong-cao-oc.jpeg",
      "/images/biet-thu-don-lap.png",
      "/images/biet-thu-song-lap.jpeg",
    ],
    description:
      "Tòa nhà cao ốc chính là điểm nhấn của khu đô thị. Với kiến trúc hiện đại, tòa nhà sẽ tạo nên phong cách chuyên nghiệp cho các nhân viên. Tòa nhà nằm ngay cạnh đường quốc lộ 1B, là vị trí thuận lợi cho việc giao lưu thương mại và kinh doanh. Tháp văn phòng được xây dựng trên 3500m², thiết kế 18 tầng, gồm 3 tầng hầm để xe, 3 tầng dành cho các dịch vụ thương mại, các tầng còn lại dùng làm văn phòng cho thuê. Tổng diện tích sàn dự kiến là 12600m².",
    floors: 18,
  },
};

function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("mo-ta");
  const [activeFloor, setActiveFloor] = useState(0);

  const product = productTypes[id];

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div style={{ textAlign: "center", padding: "100px 0" }}>
            <h2>Không tìm thấy sản phẩm</h2>
            <a
              href="/#san-pham"
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
            >
              Quay lại danh sách
            </a>
          </div>
        </div>
      </div>
    );
  }

  const floorLabels =
    product.floors > 0
      ? Array.from({ length: product.floors }, (_, i) => `Tầng ${i + 1}`)
      : ["Mặt bằng"];
  const interiorLabels =
    product.floors > 0
      ? Array.from({ length: product.floors }, (_, i) => `Nội thất ${i + 1}`)
      : ["Nội thất"];

  return (
    <div className="product-detail">
      <div className="container">
        <nav className="product-detail-breadcrumb">
          <a href="/">Trang chủ</a>
          <span className="breadcrumb-separator">/</span>
          <a href="/#san-pham">Sản phẩm</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-detail-header">
          <h1 className="product-detail-title">{product.name}</h1>
        </div>

        <div className="product-detail-grid">
          <div className="product-detail-gallery">
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

          <div className="product-detail-info">
            <div className="product-detail-desc">
              <p>{product.description}</p>
            </div>

            <div className="product-detail-specs">
              <h3>Thông tin kỹ thuật</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Diện tích xây dựng</span>
                    <span className="spec-value">{product.dtxd}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 20h20M6 16V8a2 2 0 012-2h8a2 2 0 012 2v8" />
                      <path d="M12 12v8M8 16h8" />
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Diện tích sàn</span>
                    <span className="spec-value">{product.dtsan}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="spec-content">
                    <span className="spec-label">Diện tích đất</span>
                    <span className="spec-value">{product.dtdat}</span>
                  </div>
                </div>
                {product.floors > 0 && (
                  <div className="spec-item">
                    <div className="spec-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <path d="M8 6h8M8 10h8M8 14h4" />
                      </svg>
                    </div>
                    <div className="spec-content">
                      <span className="spec-label">Số tầng</span>
                      <span className="spec-value">{product.floors} tầng</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="product-detail-actions">
              <a href="/register" className="btn btn-primary btn-lg">
                Đăng ký tư vấn
              </a>
              <a href="tel:0241765888" className="btn btn-outline btn-lg">
                Gọi ngay
              </a>
            </div>
          </div>
        </div>

        <div className="product-detail-tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "mo-ta" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("mo-ta");
                setActiveFloor(0);
              }}
            >
              Mặt bằng
            </button>
            <button
              className={`tab-btn ${activeTab === "noi-that" ? "active" : ""}`}
              onClick={() => {
                setActiveTab("noi-that");
                setActiveFloor(0);
              }}
            >
              Nội thất
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "mo-ta" && product.floors > 0 && (
              <div className="tab-pane">
                <div className="floor-selector">
                  {floorLabels.map((label, i) => (
                    <button
                      key={i}
                      className={`floor-btn ${activeFloor === i ? "active" : ""}`}
                      onClick={() => setActiveFloor(i)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="floor-image">
                  <img
                    src={product.images[activeFloor % product.images.length]}
                    alt={floorLabels[activeFloor]}
                  />
                </div>
              </div>
            )}

            {activeTab === "mo-ta" && product.floors === 0 && (
              <div className="tab-pane">
                <div className="floor-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
            )}

            {activeTab === "noi-that" && product.floors > 0 && (
              <div className="tab-pane">
                <h2 className="tab-title">Hình ảnh nội thất</h2>
                <div className="interior-grid">
                  {product.images.map((img, i) => (
                    <div key={i} className="interior-item">
                      <img src={img} alt={`Nội thất ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "noi-that" && product.floors === 0 && (
              <div className="tab-pane">
                <div className="interior-grid">
                  {product.images.map((img, i) => (
                    <div key={i} className="interior-item">
                      <img src={img} alt={`Hình ảnh ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="product-detail-related">
          <h2 className="related-title">Sản phẩm khác</h2>
          <div className="related-grid">
            {Object.entries(productTypes)
              .filter(([key]) => key !== id)
              .map(([key, item], idx) => (
                <a
                  key={key}
                  href={`/products/detail/${key}`}
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={item.image} alt={item.name} />
                    {idx === 0 && (
                      <span className="related-badge">Nổi bật</span>
                    )}
                  </div>
                  <div className="related-content">
                    <h4>{item.name}</h4>
                    <div className="related-specs">
                      <span>DTXD: {item.dtxd}</span>
                      <span>•</span>
                      <span>Đất: {item.dtdat}</span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
