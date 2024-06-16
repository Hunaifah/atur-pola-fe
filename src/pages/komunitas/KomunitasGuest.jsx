import "../../App.css";
import { Link } from "react-router-dom";
import ImageAlert from "../../assets/img-alert.svg";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function KomunitasGuest() {
  const activeNav = "komunitas";

  return (
    <>
      <Header activeNav={activeNav} />

      <Banner />
      <div className="content-komunitas-guest">
        <div className="centering">
          <div className="card-komunitas-guest">
            <div className="card-komunitas-guest-body">
              <img src={ImageAlert} alt="img-alert" />
              <h1>Ups! Kamu Memerlukan Akun untuk Mengakses Komunitas</h1>
              <p>
                Untuk bisa mengakses halaman komunitas dan berinteraksi dengan
                anggota lainnya, silakan masuk atau daftar ke akun AturPola
                kamu.
              </p>
              <Link
                className="btn-to-login btn-primary-hover btn-primary-focus"
                to="/login"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default KomunitasGuest;
