import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.svg";
import "../App.css";

function Header(props) {
  const AvatarImage = <img src={Avatar} className="avatar-img" alt="Avatar" />;
  const navigate = useNavigate();

  return (
    <>
      <nav className="nav">
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-group-link">
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav === "makanansehat" ? "nav-link-active" : ""
            }`}
            to="/makanan-sehat-user"
          >
            Makanan Sehat
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav === "latihanfisik" ? "nav-link-active" : ""
            }`}
            to="/latihan-fisik-user"
          >
            Latihan Fisik
          </Link>
          <Link
            className={`nav-link nav-link-hover ${
              props.activeNav === "komunitas" ? "nav-link-active" : ""
            }`}
            to="/komunitas-user"
          >
            Komunitas
          </Link>
        </div>
        {props.name && (
          <Link to="/informasi-pribadi" className="login nav-link-hover">
            {AvatarImage}
          </Link>
        )}
      </nav>
    </>
  );
}

export default Header;
