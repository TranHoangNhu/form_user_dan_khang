import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CircleDial from "./CircleDial";

export default function Register() {
  const [valueBill, setValueBill] = useState("");
  // const navigate = useNavigate();

  const handleChangeValueBill = (event) => {
    setValueBill(event.target.value);
  };

  let countDial = 1;
  if (valueBill >= 5000000 && valueBill < 10000000) {
    countDial = 3;
  } else if (valueBill >= 10000000 && valueBill < 15000000) {
    countDial = 7;
  } else if (valueBill >= 15000000) {
    countDial = 12;
  }

  const handleSubmit = () => {
    // Xử lý logic khi nhấn submit ở đây

    // Chuyển hướng đến trang CircleDial sau khi submit
    // navigate("/vongquaymayman");
    // navigate("https://dan-khang-quay-trung-thuong.vercel.app/", { replace: true });
  };

  return (
    <>
      <div className="register_form_container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="login-form col-md-8 col-xs-12 d-flex align-items-center">
              <form>
                <div className="text-center">
                  <img
                    className="mb-4"
                    src={process.env.PUBLIC_URL + "/images/logo_dan_khang.png"}
                    alt="Logo Dan Khang"
                    width={150}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="maKH" className="form-label ms-2 fw-bold">
                    Mã khách hàng
                  </label>
                  <input
                    type="text"
                    id="maKH"
                    className="form-control"
                    placeholder="Mã khách hàng...."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tenKH" className="form-label ms-2 fw-bold">
                    Tên Khách hàng
                  </label>
                  <input
                    type="text"
                    id="tenKH"
                    className="form-control"
                    placeholder="Tên khách hàng..."
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="valueBill"
                    className="form-label ms-2 fw-bold"
                  >
                    Giá trị đơn hàng
                  </label>
                  <input
                    type="number"
                    id="valueBill"
                    className="form-control"
                    placeholder="giá trị đơn hàng..."
                    value={valueBill}
                    onChange={handleChangeValueBill}
                    required
                  />
                  {parseInt(valueBill) >= 2000000 && (
                    <p className="mt-3 text-center">
                      Số lần quay <u id="count_dial" className="fw-bold fs-5 ps-1">{countDial}</u>
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary w-100 mt-4"
                    data-bs-toggle="modal"
                    data-bs-target="#modalRegister"
                  >
                    xác nhận
                  </button>
                </div>
                <div className="modal" tabIndex={-1} id="modalRegister">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <p className="text-center">
                          bạn có chắc chắn tiếp tục ?
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          NO
                        </button>
                        <button type="button" className="btn btn-primary">
                          <a href="https://dan-khang-quay-trung-thuong.vercel.app/" className="text-white">YES</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* {parseInt(valueBill) >= 2000000 && (
        <CircleDial additionalSpins={countDial} />
      )} */}
    </>
  );
}
