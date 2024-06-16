import React, { useState } from "react";
import axios from "axios";
import "../../login.css";
import images2 from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/v1/user/reset-password", { email });
      if (response.status === 200) {
        navigate('/forgot-password-code', { state: { email } });
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Error sending verification code");
    }
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSendCode}>
          <img width="50px" src={images2} alt="Logo" />
          <h1>Lupa Password!</h1>
          <div className="input-box">
            <p>Masukkan Email</p>
            <input 
              type="email" 
              placeholder="Masukkan Email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="div-button-submit">
            <button type="submit">Kirim Kode Verifikasi</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
