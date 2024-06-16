import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "../../login.css";
import images2 from "../../assets/logo.png";

const ForgotpasswordCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleNavigateToUpdatePassword = () => {
    navigate('/Updatepassword', { state: { email } });
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form>
          <img width="50px" src={images2} alt="Logo" />
          <h1>Lupa Password!</h1>
          <div className="input-box">
            <p>Masukkan Kode Verifikasi</p>
            <input 
              type="text" 
              placeholder="Kode Verifikasi" 
              required 
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="button-submit">
            <button type="button" onClick={handleNavigateToUpdatePassword}>Verifikasi</button>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="register-link">
            <p>Tidak menerima kode?</p> <a href="#">Kirim Ulang</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotpasswordCode;
