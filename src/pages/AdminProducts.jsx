import { useState } from "react";
import { Link } from "react-router-dom";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} from "../utils/localStorage";

function AdminProducts({ products, onRefresh }) {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "lien_ke",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    images: "",
  });

  const categories = [
    { value: "lien_ke", label: "Liền kề" },
    { value: "shophouse", label: "Shophouse" },
    { value: "biet_thu", label: "Biệt thự" },
  ];

  const formatPrice = (price) => {
    if (price >= 1000000000) {
      return (price / 1000000000).toFixed(1) + " tỷ";
    }
    return (price / 1000000).toFixed(0) + " triệu";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...formData,
      price: parseInt(formData.price),
      area: parseInt(formData.area),
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseInt(formData.bathrooms),
      images: formData.images
        .split(",")
        .map((url) => url.trim())
        .filter((url) => url),
    };

    if (editingId) {
      updateProduct(editingId, productData);
    } else {
      addProduct(productData);
    }

    onRefresh();
    resetForm();
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      area: product.area.toString(),
      bedrooms: product.bedrooms.toString(),
      bathrooms: product.bathrooms.toString(),
      description: product.description,
      images: product.images.join(", "),
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      deleteProduct(id);
      onRefresh();
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "lien_ke",
      price: "",
      area: "",
      bedrooms: "",
      bathrooms: "",
      description: "",
      images: "",
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="admin-section">
      <div className="container">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Quản lý sản phẩm</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn btn-primary"
            >
              {showForm ? "Đóng form" : "Thêm sản phẩm"}
            </button>
          </div>

          {/* Form */}
          {showForm && (
            <div className="admin-form" style={{ marginBottom: "40px" }}>
              <h3>{editingId ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div className="form-group">
                    <label>Loại sản phẩm</label>
                    <select
                      className="form-select"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Giá (VNĐ)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "20px",
                  }}
                >
                  <div className="form-group">
                    <label>Diện tích (m²)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.area}
                      onChange={(e) =>
                        setFormData({ ...formData, area: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Số phòng ngủ</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.bedrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, bedrooms: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Số phòng tắm</label>
                    <input
                      type="number"
                      className="form-control"
                      value={formData.bathrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, bathrooms: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Mô tả</label>
                  <textarea
                    className="form-control"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label>Hình ảnh (URL, cách nhau bởi dấu phẩy)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.images}
                    onChange={(e) =>
                      setFormData({ ...formData, images: e.target.value })
                    }
                    placeholder="https://..., https://..."
                  />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="btn btn-primary">
                    {editingId ? "Cập nhật" : "Thêm mới"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-outline"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Products Table */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Giá</th>
                <th>Diện tích</th>
                <th>Phòng ngủ</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>
                    {
                      categories.find((c) => c.value === product.category)
                        ?.label
                    }
                  </td>
                  <td>{formatPrice(product.price)}</td>
                  <td>{product.area} m²</td>
                  <td>{product.bedrooms}</td>
                  <td className="actions">
                    <button
                      onClick={() => handleEdit(product)}
                      className="btn btn-secondary"
                      style={{ padding: "5px 10px", fontSize: "12px" }}
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-outline"
                      style={{
                        padding: "5px 10px",
                        fontSize: "12px",
                        color: "var(--error)",
                        borderColor: "var(--error)",
                      }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: "20px" }}>
            <Link to="/admin" className="btn btn-outline">
              Quay lại Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
