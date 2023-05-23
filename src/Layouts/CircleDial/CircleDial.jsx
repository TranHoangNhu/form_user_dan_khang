import React, { useState, useEffect } from "react";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

export default function CircleDial({ additionalSpins }) {
  const [bonusSpins, setBonusSpins] = useState(0);
  const { handleSubmit, watch } = useFormContext();
  const spins = watch("additionalSpins", 0);

  useEffect(() => {
    // Xóa backdrop khi component unmount
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
    // Xóa thuộc tính overflow:hidden khi component unmount
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = ""; // Đặt lại thuộc tính overflow mặc định
    };
  }, []);

  const prizes = [
    { name: "voucher 500k", probability: 0.1 },
    { name: "100K", probability: 0.2 },
    { name: "voucher 300k", probability: 0.2 },
    { name: "thêm lượt 1", probability: 0.3, bonus: 1 },
    { name: "50K", probability: 0.2 },
    { name: "voucher 100K", probability: 0.2 },
    { name: "thêm lượt 2", probability: 0.3, bonus: 2 },
    { name: "150K", probability: 0.2 },
  ];

  const initialize = () => {
    setBonusSpins(0);
    // renderPercentageTable();
    // Các hàm update khác
  };

  const renderPercentageTable = () => {
    return prizes.map((prize, index) => (
      <div className="percentage-row" key={index}>
        <span>{prize.name}</span>
        <input
          type="number"
          min="0"
          max="100"
          step="1"
          value={(prize.probability * 100).toFixed(2)}
          readOnly
        />
      </div>
    ));
  };

  const updateSpinCount = () => {
    // Cập nhật số lượt quay
    // Lấy giá trị hiện tại của số lượt quay
    const currentSpins = spins;
    // Tăng giá trị số lượt quay lên 1
    const updatedSpins = currentSpins + 1;
    // Cập nhật giá trị số lượt quay
    // updateBonusSpins(updatedSpins);
  };

  const spinWheel = () => {
    // Hàm quay vòng quay
    // Gọi hàm startSpinning để bắt đầu quay
    startSpinning();
  };

  const startSpinning = () => {
    // Hàm bắt đầu quay
    // Gọi hàm spin để xử lý quay
    spin();
  };

  const spin = () => {
    // Hàm xử lý quay
    // Tạo ngẫu nhiên một số từ 0 đến 1
    const random = Math.random();
    let cumulativeProbability = 0;
    // Duyệt qua các giải thưởng
    for (const prize of prizes) {
      cumulativeProbability += prize.probability;
      // Kiểm tra xem random có thuộc vào khoảng xác suất hiện tại không
      if (random < cumulativeProbability) {
        // Kiểm tra xem giải thưởng có lượt quay thêm không
        if (prize.bonus) {
          // Cập nhật giá trị lượt quay thêm
          updateBonus(prize.bonus);
        }
        // Cập nhật số lượt quay
        updateSpinCount();
        // Thoát khỏi vòng lặp
        break;
      }
    }
    // Tạo hiệu ứng quay vòng quay
    startSpinningAnimation();
  };

  const updateBonus = (bonusValue) => {
    // Cập nhật giá trị lượt quay thêm
    setBonusSpins((prevBonusSpins) => prevBonusSpins + bonusValue);
  };

  const startSpinningAnimation = () => {
    // Hàm tạo hiệu ứng quay vòng quay
    // Các logic tạo hiệu ứng quay vòng quay
  };

  const onSubmit = (data) => {
    // Xử lý logic khi submit form React Hook Form
    console.log(data);
  };

  return (
    <FormProvider {...useForm({ defaultValues: { additionalSpins } })}>
      <div className="circle_dial">
        <div className="container">
          <h1>Spin Wheel Game</h1>
          <div className="game-section">
            <div className="circle">
              <div className="pointer"></div>
              <div id="wheel"></div>
              <div id="prizes" className="prizes"></div>
            </div>
            <button className="spin-button" onClick={handleSubmit(onSubmit)}>
              Spin
            </button>
            <div className="spin-count">{spins}</div>
          </div>
          <table id="result-table">
            <thead>
              <tr>
                <th>Thời gian thực</th>
                <th>Lần quay thứ n</th>
                <th>Tên giải thưởng</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <div className="percentage-section">
            <h2>Điều chỉnh tỉ lệ giải thưởng</h2>
            <div className="percentage-table">{renderPercentageTable()}</div>
          </div>
          <div className="bonus-section">
            <h2>
              số lần được quay thêm: <span>{bonusSpins}</span>
            </h2>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
