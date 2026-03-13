import { useState } from "react";

function Gallery({ gallery }) {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = gallery?.filter((item) => item.type === "image") || [];
  const videos = gallery?.filter((item) => item.type === "video") || [];

  const filteredImages =
    filter === "all" ? images : images.slice(0, parseInt(filter));

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Thư viện hình ảnh & Video</h1>
          <p>Hình ảnh và video giới thiệu dự án ERO Riverside</p>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Hình ảnh dự án</h2>
          <p className="section-subtitle">Khám phá không gian sống đẳng cấp</p>

          <div className="gallery-filters">
            <button
              className={`gallery-filter ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              Tất cả ({images.length})
            </button>
            <button
              className={`gallery-filter ${filter === "4" ? "active" : ""}`}
              onClick={() => setFilter("4")}
            >
              4 ảnh
            </button>
            <button
              className={`gallery-filter ${filter === "8" ? "active" : ""}`}
              onClick={() => setFilter("8")}
            >
              8 ảnh
            </button>
            <button
              className={`gallery-filter ${filter === "12" ? "active" : ""}`}
              onClick={() => setFilter("12")}
            >
              12 ảnh
            </button>
          </div>

          <div className="gallery-grid">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={item.url} alt={item.title} />
                <div className="gallery-overlay">
                  <span style={{ color: "white", fontSize: "14px" }}>
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section">
        <div className="container">
          <div className="video-section">
            <h3>Video giới thiệu dự án</h3>
            <p className="section-subtitle">Khám phá ERO Riverside qua video</p>

            <div className="video-container">
              {videos.length > 0 ? (
                videos[0].url.includes("youtube") ||
                videos[0].url.includes("youtu.be") ? (
                  <iframe
                    src={videos[0].url.replace("watch?v=", "embed/")}
                    title="ERO Riverside Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video controls style={{ width: "100%", height: "100%" }}>
                    <source src={videos[0].url} type="video/mp4" />
                  </video>
                )
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    background: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <p>Video sẽ được cập nhật sớm nhất</p>
                </div>
              )}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              <div className="info-card">
                <h4 style={{ color: "var(--primary)", marginBottom: "10px" }}>
                  Video Tổng quan
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Giới thiệu tổng quan về dự án ERO Riverside
                </p>
              </div>
              <div className="info-card">
                <h4 style={{ color: "var(--primary)", marginBottom: "10px" }}>
                  Video Tiện ích
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Hệ thống tiện ích và cảnh quan dự án
                </p>
              </div>
              <div className="info-card">
                <h4 style={{ color: "var(--primary)", marginBottom: "10px" }}>
                  Video Nhà mẫu
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Tham quan căn hộ mẫu nội thất cao cấp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[currentIndex]?.url}
              alt={filteredImages[currentIndex]?.title}
            />
            <div
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "20px",
              }}
            >
              <h3>{filteredImages[currentIndex]?.title}</h3>
            </div>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.3)",
                border: "none",
                color: "white",
                fontSize: "30px",
                padding: "15px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.3)",
                border: "none",
                color: "white",
                fontSize: "30px",
                padding: "15px",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
