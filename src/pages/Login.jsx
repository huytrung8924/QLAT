import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAdmin } from "../utils/localStorage";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Vui lòng nhập tên đăng nhập và mật khẩu");
      return;
    }

    if (checkAdmin(username, password)) {
      onLogin();
      navigate("/admin");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login-section">
      <div className="container">
        <div className="login-container">
          <div className="login-logo">
            <svg width="60" height="60" viewBox="0 0 50 50" fill="none">
              <rect width="50" height="50" rx="10" fill="#1a237e" />
              <path d="M25 10L40 35H10L25 10Z" fill="#ff6f00" />
              <rect x="20" y="25" width="10" height="10" fill="white" />
            </svg>
          </div>

          <h2>Đăng nhập Quản trị</h2>

          <form onSubmit={handleSubmit}>
            {error && (
              <div
                style={{
                  padding: "12px",
                  background: "#ffebee",
                  color: "var(--error)",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
