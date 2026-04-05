import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRegistrations } from "../utils/localStorage";

function AdminDashboard({ registrations, onRefresh }) {
  const [localRegistrations, setLocalRegistrations] = useState([]);

  useEffect(() => {
    setLocalRegistrations(getRegistrations());
  }, [registrations, onRefresh]);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đăng ký này?")) {
      const updated = localRegistrations.filter((r) => r.id !== id);
      localStorage.setItem("ero_registrations", JSON.stringify(updated));
      setLocalRegistrations(updated);
      onRefresh();
    }
  };

  const handleDeleteAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tất cả đăng ký?")) {
      localStorage.setItem("ero_registrations", JSON.stringify([]));
      setLocalRegistrations([]);
      onRefresh();
    }
  };

  const currentRegs = registrations || localRegistrations;

  return (
    <div className="admin-section">
      <div className="container">
        <div className="admin-container">
          <div className="admin-header">
            <h1>📊 Quản lý đăng ký khách hàng</h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Danh sách khách hàng đã đăng ký tư vấn dự án
            </p>
          </div>

          <div className="admin-btn-group">
            <Link to="/" className="admin-btn admin-btn-primary">
              ← Về trang chủ
            </Link>
            {currentRegs.length > 0 && (
              <button onClick={handleDeleteAll} className="admin-btn admin-btn-danger">
                🗑️ Xóa tất cả
              </button>
            )}
          </div>

          {/* Stats Cards */}
          <div className="admin-stats">
            <div className="stat-card">
              <div>📝</div>
              <h3>{currentRegs.length}</h3>
              <p>Tổng đăng ký</p>
            </div>
            <div className="stat-card">
              <div>📅</div>
              <h3>{currentRegs.filter(r => new Date(r.createdAt || r.date).toDateString() === new Date().toDateString()).length}</h3>
              <p>Đăng ký hôm nay</p>
            </div>
          </div>

          {/* Registrations Table */}
          <div>
            <h2 style={{ marginBottom: "25px", color: "var(--primary)", fontSize: "22px" }}>
              📋 Danh sách đăng ký
            </h2>
            {currentRegs.length > 0 ? (
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Họ và tên</th>
                      <th>Điện thoại</th>
                      <th>Email</th>
                      <th>Ngày đăng ký</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRegs
                      .slice()
                      .reverse()
                      .map((reg, index) => (
                        <tr key={reg.id}>
                          <td><strong>{currentRegs.length - index}</strong></td>
                          <td style={{ fontWeight: "500" }}>{reg.name || reg.fullName}</td>
                          <td><a href={`tel:${reg.phone}`} style={{ color: "var(--primary)" }}>{reg.phone}</a></td>
                          <td>{reg.email ? <a href={`mailto:${reg.email}`} style={{ color: "var(--primary)" }}>{reg.email}</a> : "-"}</td>
                          <td>
                            {reg.createdAt || reg.date
                              ? new Date(reg.createdAt || reg.date).toLocaleDateString("vi-VN", {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })
                              : "-"}
                          </td>
                          <td>
                            <button
                              onClick={() => handleDelete(reg.id)}
                              className="admin-action-btn delete"
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="admin-empty">
                <div className="admin-empty-icon">📭</div>
                <p>Chưa có đăng ký nào</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;