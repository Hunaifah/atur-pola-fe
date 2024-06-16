import React from "react";
import logooo from "./../../assets/logooo.png";
import user from "./../../assets/user.png";
import cardgym6 from "./../../assets/cardgym6.png";
import tersediainstruktur from "./../../assets/tersediainstruktur.png";
import Header from "../../components/Headeruser";
import Footer from "../../components/Footer";

const Detailgymuser = () => {
  const activeNav = "latihanfisik";
  const name = "username";

  const handleButtonClick = () => {
    const whatsappUrl = "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20memesan%20layanan%20ini.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <Header name={name} activeNav={activeNav} />

      <div
        className="information-gymuser"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        <a href="#">Home </a>
        <a href="#">Latihan Fisik </a>
        <a href="#">Elite Fitness Center </a>
        <h1>Elite Fitness Center</h1>
        <div className="information-gymuser-container">
          <img src={cardgym6} alt="Gym"></img>
          <h1>Deskripsi Gym:</h1>
          <p>
            Elite Fitness Center merupakan pusat kebugaran yang lengkap dengan
            berbagai fasilitas modern dan instruktur berkualitas. Terletak di
            pusat kota Surabaya, gym ini menyediakan berbagai macam peralatan
            fitness dan program pelatihan untuk membantu Anda mencapai tujuan
            kesehatan dan kebugaran Anda. Dengan suasana yang nyaman dan ramah,
            Elite Fitness Center adalah tempat yang sempurna untuk meningkatkan
            kebugaran Anda.
          </p>
        </div>
        <div className="information-gymuser-container">
          <div className="information-gymcard">
            <h1>Alamat Gym:</h1>
            <p>
              Jl. Raya Darmo Permai III No. 45, Surabaya, Jawa Timur Kode Pos:
              60241
            </p>
            <h1>Fasilitas Gym:</h1>
            <p>-Area latihan bebas</p>
            <p>-Peralatan kardio dan kekuatan terbaru</p>
            <p>-Studio kelas grup</p>
            <p>-Ruang personal training</p>
            <p>-Sauna dan kolam renang</p>
            <p>-Kafe dan area lounge</p>
            <div className="instruktur-gymcard">
              <h1>Tersedia Instruktur</h1>
            </div>
            <p>
              Instruktur kami adalah para profesional yang berpengalaman dan
              berdedikasi dalam membantu Anda mencapai potensi kebugaran Anda
              yang terbaik. Mereka siap memberikan bimbingan dan dukungan untuk
              membantu Anda meraih hasil yang diinginkan.
            </p>
            <div className="logo-instruktur-gym">
              <img width="8%" src={tersediainstruktur} alt="Instruktur"></img>
            </div>
          </div>
          <div className="information-gymcard2">
            <h1>Mulailah Perjalanan Kebugaran Anda di Elite Fitness Center!</h1>
            <p>
              Jadwalkan sesi latihan Anda sekarang dan mulailah perjalanan Anda
              menuju tubuh yang sehat dan bugar di Elite Fitness Center!
            </p>
            <button className="button-gymcard2" onClick={handleButtonClick}>
              Pesan Disini
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detailgymuser;
