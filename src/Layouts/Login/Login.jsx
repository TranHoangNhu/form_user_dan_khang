import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic đăng nhập

    // Chuyển hướng đến trang đăng ký
    navigate('/register');
  };

  return (
    <div className="login_form_container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="login-form col-md-8 col-xs-12 d-flex align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <img
                  className="mb-4"
                  src={process.env.PUBLIC_URL + "/images/logo_dan_khang.png"}
                  alt="Logo Dan Khang"
                  width={150}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label ms-2 fw-bold">
                  Tài khoản
                </label>
                <input
                  type="text"
                  id="text"
                  className="form-control"
                  placeholder="Hãy nhập tài khoản..."
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label ms-2 fw-bold">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Mật khẩu...."
                  required
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
