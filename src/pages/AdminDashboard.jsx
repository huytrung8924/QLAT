import { Link } from "react-router-dom";

function AdminDashboard({ registrations }) {
  const stats = [
    {
      label: "Tổng sản phẩm",
      value: 9,
      icon: "🏠",
      link: "/admin/products",
    },
    {
      label: "Đăng ký mới",
      value: registrations?.length || 0,
      icon: "📝",
      link: "/admin/products",
    },
    {
      label: "Hình ảnh gallery",
      value: 12,
      icon: "🖼️",
      link: "/admin/gallery",
    },
    {
      label: "Lượt xem trang",
      value: 1234,
      icon: "👁️",
      link: "#",
    },
  ];

  return (
    <div className="admin-section">
      <div className="container">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Quản trị hệ thống</h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Chào mừng đến với trang quản trị ERO Riverside
            </p>
          </div>

          {/* Stats */}
          <div className="admin-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div style={{ fontSize: "36px", marginBottom: "10px" }}>
                  {stat.icon}
                </div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ marginBottom: "20px", color: "var(--primary)" }}>
              Quản lý nhanh
            </h2>
            <div className="admin-nav">
              <Link to="/admin/products">Quản lý sản phẩm</Link>
              <Link to="/admin/map">Quản lý bản đồ</Link>
              <Link to="/admin/gallery">Quản lý gallery</Link>
              <Link to="/">Xem trang web</Link>
            </div>
          </div>

          {/* Recent Registrations */}
          <div>
            <h2 style={{ marginBottom: "20px", color: "var(--primary)" }}>
              Đăng ký mới nhất
            </h2>
            {registrations && registrations.length > 0 ? (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Điện thoại</th>
                    <th>Email</th>
                    <th>Nhu cầu</th>
                    <th>Ngày đăng ký</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.slice(0, 5).map((reg, index) => (
                    <tr key={reg.id}>
                      <td>{index + 1}</td>
                      <td>{reg.fullName}</td>
                      <td>{reg.phone}</td>
                      <td>{reg.email}</td>
                      <td>{reg.interest}</td>
                      <td>
                        {new Date(reg.createdAt).toLocaleDateString("vi-VN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="info-card" style={{ textAlign: "center" }}>
                <p style={{ color: "var(--text-secondary)" }}>
                  Chưa có đăng ký nào
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
