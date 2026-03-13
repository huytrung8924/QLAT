import { useMemo } from "react";

function MapPage({ mapConfig }) {
  const defaultConfig = {
    latitude: 20.958,
    longitude: 105.9173,
    address: "ERO Riverside - Hà Nội – Bắc Ninh",
    diagramImage:
      "https://i.pinimg.com/1200x/85/1a/26/851a261571dd3ce7474262bf05bce864.jpg",
  };

  const config = mapConfig || defaultConfig;

  const mapUrl = useMemo(() => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.486587534884!2d${config.longitude}!3d${config.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzIxLjYiTiAxMDXCsDU1JzA3LjYiRQ!5e0!3m2!1svi!2s!4v1600000000000!5m2!1svi!2s`;
  }, [config]);

  return (
    <div className="map-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Bản đồ & Sơ đồ dự án</h1>
          <p>Vị trí và quy hoạch tổng thể khu đô thị ERO Riverside</p>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Vị trí dự án</h2>
          <p className="section-subtitle">{config.address}</p>

          <div className="map-grid">
            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.486587534884!2d${config.longitude}!3d${config.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzIxLjYiTiAxMDXCsDU1JzA3LjYiRQ!5e0!3m2!1svi!2s!4v1600000000000!5m2!1svi!2s`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ ERO Riverside"
              />
            </div>

            <div>
              <div
                className="info-card"
                style={{ textAlign: "left", marginBottom: "20px" }}
              >
                <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>
                  Thông tin vị trí
                </h3>
                <div style={{ marginBottom: "15px" }}>
                  <strong>📍 Địa chỉ:</strong>
                  <p
                    style={{ color: "var(--text-secondary)", marginTop: "5px" }}
                  >
                    {config.address}
                  </p>
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <strong>🗺️ Vĩ độ:</strong>
                  <p
                    style={{ color: "var(--text-secondary)", marginTop: "5px" }}
                  >
                    {config.latitude}
                  </p>
                </div>
                <div>
                  <strong>🗺️ Kinh độ:</strong>
                  <p
                    style={{ color: "var(--text-secondary)", marginTop: "5px" }}
                  >
                    {config.longitude}
                  </p>
                </div>
              </div>

              <div className="info-card" style={{ textAlign: "left" }}>
                <h3 style={{ color: "var(--primary)", marginBottom: "15px" }}>
                  Ưu điểm vị trí
                </h3>
                <ul
                  style={{
                    color: "var(--text-secondary)",
                    paddingLeft: "20px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Cách trung tâm Hà Nội 15km
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Kết nối QL1A, đường vành đai
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Gần khu công nghiệp Bắc Ninh
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Hạ tầng giao thông hoàn thiện
                  </li>
                  <li>Khu vực có tốc độ phát triển nhanh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Diagram */}
      <section className="section section-bg">
        <div className="container">
          <h2 className="section-title">Sơ đồ tổng thể dự án</h2>
          <p className="section-subtitle">Quy hoạch khu đô thị ERO Riverside</p>

          <div className="diagram-container">
            <img src={config.diagramImage} alt="Sơ đồ tổng thể ERO Riverside" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {[
              { label: "Khu Liền kề", color: "#1a237e" },
              { label: "Khu Shophouse", color: "#ff6f00" },
              { label: "Khu Biệt thự", color: "#4caf50" },
              { label: "Khu Công viên", color: "#9c27b0" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px",
                  background: "white",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    background: item.color,
                  }}
                ></div>
                <span style={{ fontWeight: "500" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MapPage;
