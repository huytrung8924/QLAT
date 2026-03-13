import { useState } from "react";
import { Link } from "react-router-dom";
import { addGalleryItem, deleteGalleryItem } from "../utils/localStorage";

function AdminGallery({ gallery, onRefresh }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: "image",
    url: "",
    title: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.url && formData.title) {
      addGalleryItem(formData);
      onRefresh();
      setFormData({ type: "image", url: "", title: "" });
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa hình ảnh này?")) {
      deleteGalleryItem(id);
      onRefresh();
    }
  };

  const images = gallery?.filter((item) => item.type === "image") || [];

  return (
    <div className="admin-section">
      <div className="container">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Quản lý thư viện hình ảnh</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn btn-primary"
            >
              {showForm ? "Đóng form" : "Thêm hình ảnh"}
            </button>
          </div>

          {/* Form */}
          {showForm && (
            <div className="admin-form" style={{ marginBottom: "40px" }}>
              <h3>Thêm hình ảnh mới</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Loại</label>
                  <select
                    className="form-select"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option value="image">Hình ảnh</option>
                    <option value="video">Video</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    URL {formData.type === "video" ? "Video" : "Hình ảnh"}
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                    placeholder={
                      formData.type === "video"
                        ? "https://www.youtube.com/embed/..."
                        : "https://..."
                    }
                    required
                  />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="btn btn-primary">
                    Thêm mới
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn btn-outline"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Gallery Grid */}
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ marginBottom: "20px" }}>
              Danh sách hình ảnh ({images.length})
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
              }}
            >
              {images.map((item) => (
                <div
                  key={item.id}
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      padding: "10px",
                      background: "white",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "rgba(244, 67, 54, 0.9)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link to="/admin" className="btn btn-outline">
              Quay lại Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminGallery;
