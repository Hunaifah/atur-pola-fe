import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../App.css";

function Header(props) {
  const BtnText = "masuk";
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav">
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
        </div>
        <div className="nav-group-link">
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav === "makanansehat" ? "nav-link-active" : ""
            }`}
            to="/"
          >
            Makanan Sehat
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav === "latihanfisik" ? "nav-link-active" : ""
            }`}
            to="/latihan-fisik"
          >
            Latihan Fisik
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav === "komunitas" ? "nav-link-active" : ""
            }`}
            to="/komunitas-guest"
          >
            Komunitas
          </Link>
        </div>
        <Link
          to="/login"
          className="login nav-link-hover"
        >
          {BtnText}
        </Link>
      </nav>
    </>
  );
}

export default Header;
