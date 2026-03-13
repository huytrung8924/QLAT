import { useState } from "react";
import { Link } from "react-router-dom";
import { addRegistration } from "../utils/localStorage";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    interest: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Họ và tên là bắt buộc";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại là bắt buộc";
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email là bắt buộc";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.interest) {
      newErrors.interest = "Vui lòng chọn nhu cầu quan tâm";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      addRegistration(formData);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitted) {
    return (
      <div className="register-section">
        <div className="container">
          <div className="register-container">
            <div className="form-success">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "var(--success)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <h3>Đăng ký thành công!</h3>
              <p
                style={{ color: "var(--text-secondary)", marginBottom: "20px" }}
              >
                Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn trong thời
                gian sớm nhất.
              </p>
              <Link to="/" className="btn btn-primary">
                Về trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-section">
      <div className="container">
        <div className="register-container">
          <h2>Đăng ký nhận thông tin</h2>
          <p className="section-subtitle">
            Điền thông tin để nhận tư vấn miễn phí về dự án ERO Riverside
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">
                Họ và tên <span>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-control ${errors.fullName ? "error" : ""}`}
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="form-error">{errors.fullName}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Số điện thoại <span>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-control ${errors.phone ? "error" : ""}`}
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "error" : ""}`}
                placeholder="Nhập địa chỉ email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Địa chỉ</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                placeholder="Nhập địa chỉ (tùy chọn)"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest">
                Nhu cầu quan tâm <span>*</span>
              </label>
              <select
                id="interest"
                name="interest"
                className={`form-select ${errors.interest ? "error" : ""}`}
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="">Chọn loại sản phẩm</option>
                <option value="liền kề">Liền kề</option>
                <option value="shophouse">Shophouse</option>
                <option value="biệt thự">Biệt thự</option>
              </select>
              {errors.interest && (
                <p className="form-error">{errors.interest}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Đăng ký ngay
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "var(--text-secondary)",
                fontSize: "14px",
              }}
            >
              Bằng việc đăng ký, bạn đồng ý với{" "}
              <a href="#" style={{ color: "var(--primary)" }}>
                chính sách bảo mật
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
