import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Updatepassword.css';
import img from "../../assets/logo.png";
import mata from "../../assets/eyes.png";
import mata2 from "../../assets/eyes2.png";

const Updatepassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses pengubahan password
    // Setelah selesai, navigasikan kembali ke halaman login
    navigate('/login');
  };

  return (
    <div className="updatepassword-wrapper">
      <form onSubmit={handleSubmit}>
        <img width="50px" src={img} alt="Logo1" />
        <h1>Ganti Password</h1>
        <div className="input-box">
          <p>Masukkan Password Baru</p>
          <input type="password" placeholder="Masukkan Password Baru" required />
          <img src={mata} alt="Toggle Visibility" />
        </div>
        <div className="input-box">
          <p>Konfirmasi Password</p>
          <input type="password" placeholder="Konfirmasi Password" required />
          <img src={mata2} alt="Toggle Visibility" />
        </div>
        <div className="button-submit">
          <button type="submit">Konfirmasi</button>
        </div>
      </form>
    </div>
  );
};

export default Updatepassword;
