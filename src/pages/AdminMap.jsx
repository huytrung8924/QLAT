import { useState } from "react";
import { Link } from "react-router-dom";
import { saveMapConfig } from "../utils/localStorage";

function AdminMap({ mapConfig, onRefresh }) {
  const defaultConfig = {
    latitude: 20.958,
    longitude: 105.9173,
    address: "ERO Riverside - Hà Nội – Bắc Ninh",
    diagramImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
  };

  const config = mapConfig || defaultConfig;

  const [formData, setFormData] = useState({
    latitude: config.latitude,
    longitude: config.longitude,
    address: config.address,
    diagramImage: config.diagramImage,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveMapConfig(formData);
    onRefresh();
    alert("Cập nhật bản đồ thành công!");
  };

  return (
    <div className="admin-section">
      <div className="container">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Quản lý bản đồ & Sơ đồ</h1>
            <Link to="/admin" className="btn btn-outline">
              Quay lại Dashboard
            </Link>
          </div>

          <div className="admin-form">
            <h3>Cập nhật thông tin bản đồ</h3>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                <div className="form-group">
                  <label>Vĩ độ (Latitude)</label>
                  <input
                    type="number"
                    step="0.0001"
                    className="form-control"
                    value={formData.latitude}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        latitude: parseFloat(e.target.value),
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Kinh độ (Longitude)</label>
                  <input
                    type="number"
                    step="0.0001"
                    className="form-control"
                    value={formData.longitude}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        longitude: parseFloat(e.target.value),
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Địa chỉ hiển thị</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label>URL hình ảnh sơ đồ dự án</label>
                <input
                  type="url"
                  className="form-control"
                  value={formData.diagramImage}
                  onChange={(e) =>
                    setFormData({ ...formData, diagramImage: e.target.value })
                  }
                  placeholder="https://..."
                />
              </div>

              <div style={{ marginTop: "20px" }}>
                <h4 style={{ marginBottom: "15px" }}>Xem trước bản đồ</h4>
                <div className="map-container" style={{ height: "300px" }}>
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.486587534884!2d${formData.longitude}!3d${formData.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzIxLjYiTiAxMDXCsDU1JzA3LjYiRQ!5e0!3m2!1svi!2s!4v1600000000000!5m2!1svi!2s`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Preview"
                  />
                </div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <h4 style={{ marginBottom: "15px" }}>Xem trước sơ đồ</h4>
                <div className="diagram-container">
                  <img
                    src={formData.diagramImage}
                    alt="Sơ đồ dự án"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <button type="submit" className="btn btn-primary">
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMap;
