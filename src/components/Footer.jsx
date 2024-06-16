import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import IconInstagram from "../assets/icon-instagram.svg";
import IconX from "../assets/icon-x.svg";
import IconLinkedin from "../assets/icon-linkedin.svg";
import "../App.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-group">
          <div className="footer-content-left">
            <img src={Logo} alt="Logo" />
            <h1>Buat hidup sehat jadi kebiasaan tanpa drama!</h1>
            <p>
              Optimalkan performa hidupmu dengan rekomendasi gizi dan rencana
              latihan yang disesuaikan.
            </p>
          </div>
          <div className="footer-content-right">
            <div className="footer-part footer-part-1">
              <h1>Aku ingin:</h1>
              <ol>
                <li>
                  <Link className="footer-link">Buat Akun</Link>
                </li>
                <li>
                  <Link className="footer-link">Masuk Akun</Link>
                </li>
                <li>
                  <Link className="footer-link">Rekomendasi Nutrisi</Link>
                </li>
                <li>
                  <Link className="footer-link">Rekomendasi Latihan</Link>
                </li>
                <li>
                  <Link className="footer-link">Komunitas</Link>
                </li>
              </ol>
            </div>
            <div className="footer-part footer-part-2">
              <h1>Kontak kami:</h1>
              <div className="footer-group-contact">
                <h3>Email:</h3>
                <p>info@aturpola.com</p>
              </div>

              <div className="footer-group-contact">
                <h3>Phone:</h3>
                <p>+62 123 4567 890</p>
              </div>

              <div className="footer-group-contact">
                <h3>Alamat:</h3>
                <p>Jalan Jendral Sudirman No. 123, Jakarta Pusat, Indonesia</p>
              </div>
            </div>
            <div className="footer-part footer-part-3">
              <div className="footer-group-social">
                <h1>Temukan Kami di Media Sosial</h1>
                <div className="footer-group-icon">
                  <Link>
                    <img src={IconInstagram} alt="icon-instagram" />
                  </Link>
                  <Link>
                    <img src={IconX} alt="icon-x" />
                  </Link>
                  <Link>
                    <img src={IconLinkedin} alt="icon-linkedin" />
                  </Link>
                </div>
              </div>
              <div className="footer-support">
                <h1>Didukung Oleh</h1>
                <p>Celerates Acceleration Program</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          <p>2024@ All rights reserved. Design by Six Broters Team</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
