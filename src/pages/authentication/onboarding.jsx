// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./onboarding.css";
import { Navigate, useNavigate } from "react-router-dom";

function Onboarding() {
  const [formData, setFormData] = useState({
    kelamin: "",
    activities: "",
    goals: "",
    weight: "",
    height: "",
    age: "",
  });

  const formFields = [
    {
      label: "Jenis Kelamin",
      placeholder: "Jenis Kelamin",
      name: "kelamin",
      type: "text",
    },
    {
      label: "Jenis Kegiatan",
      placeholder: "Jenis Kegiatan",
      name: "activities",
      type: "text",
    },
    {
      label: "Berat Badan",
      placeholder: "Berat Badan",
      name: "weight",
      type: "number",
    },
    {
      label: "Tinggi Badan",
      placeholder: "Tinggi Badan",
      name: "height",
      type: "number",
    },
    { label: "Umur", placeholder: "Umur", name: "age", type: "number" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/login");
    Navigate.e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Lakukan apa pun dengan data form di sini
  };

  return (
    <div className="body">
      <div className="container">
        <div className="content">
          <h1>Temukan kekuatan dan inspirasi untuk mengubah hidup Anda.</h1>
          <p>
            Sebelum kita mulai, mari lengkapi beberapa informasi penting untuk
            mempersonalisasi pengalaman Anda.
          </p>
        </div>
        <div className="onboarding">
          <header className="headeronboarding">
            <img src={Logo} alt="" />
            <h1 className="judul">Silakan Lengkapi Data Diri Anda</h1>
          </header>
          <form className="formonboarding" onSubmit={handleSubmit}>
            {formFields.slice(0, 2).map((field) => (
              <div key={field.name}>
                <label className="Label1">
                  {field.label}:
                  <input
                    className="inputform"
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                  />
                </label>
              </div>
            ))}
            <div>
              <label className="Label1">
                Goals :
                <select
                  style={{ paddingTop: "8px" }}
                  className="inputform"
                  name="goals"
                >
                  <option value="1">Menurunkan Berat Badan</option>
                  <option value="2">Pengen Tidur</option>
                  <option value="3">Menaikkan Berat Badan</option>
                </select>
              </label>
            </div>
            <div className="horizontal-fields">
              {formFields.slice(2).map((field) => (
                <div key={field.name} className="horizontal-field">
                  <label className="Label2">
                    {field.label}:
                    <input
                      className="inputform2"
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button className="div-submit" type="submit">
              Lanjutkan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
