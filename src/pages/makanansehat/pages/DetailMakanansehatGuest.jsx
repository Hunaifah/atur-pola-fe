import React, { useState } from "react";
import "../dist/css/main.css";
import "../dist/css/style.css";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import Icon1 from "../assets/Logokalori.png";
import Authentification from "../../../components/Authentification";

const DetailMakanansehatGuest = () => {
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  const name = "username";
  const activeNav = "makanansehat";

  return (
    <div className="Makanan-sehat">
      <Header name={name} activeNav={activeNav} />
      <header className="w-100 in-vh-100 blur">
        <section className="container-makanan-sehat">
          <div className="text-sm breadcrumbs text-[#0F2A23]">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Latihan Fisik</a>
              </li>
              <li className="font-semibold">
                Latihan Cardio Intensif: HIIT Berbasis Lantai
              </li>
            </ul>
          </div>

          <div className="section-detail-1">
            <div className="section-title-detail-1">
              <h1>Chicken Avocado Wrap</h1>
              <div className="div-icon">
                <FontAwesomeIcon
                  onClick={handleFav}
                  icon={isFav ? heartSolid : faHeart}
                  className="cursor-pointer size-[47px] text-[#FF9800]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="section-detail-2">
              <img
                className="image-section"
                src="/src/assets/kebab.png"
                alt=""
              />
              <div className="section-detail-sec-group">
                <h1>Nutrition Facts :</h1>
                <div className="section-detail-group-score">
                  <div className="litle-card">
                    <img src={Icon1} alt="" />
                    <p>Kalori 350-450kal</p>
                  </div>
                  <div className="litle-card">
                    <img src={Icon1} alt="" />
                    <p>Lemak 15-25g</p>
                  </div>
                  <div className="litle-card">
                    <img src={Icon1} alt="" />
                    <p>Karbohidrat 35g</p>
                  </div>
                  <div className="litle-card">
                    <img src={Icon1} alt="" />
                    <p>Protein 20-30g</p>
                  </div>
                </div>
                <p className="section-detail-sec-desc">
                  Tortilla gandum yang disajikan dengan lapisan alpukat matang,
                  diberi taburan lada hitam dan garam laut, dan ditutupi dengan
                  telur rebus yang lembut. Tortilla yang lembut dipadukan dengan
                  alpukat yang lembut dan telur rebus yang sedap, menciptakan
                  kombinasi rasa yang sempurna untuk sarapan yang mengenyangkan.
                </p>
              </div>
            </div>
            <div className="filter-section-2">
              <div>
                <Link className="badge-filter-filter-makanan-sehat">
                  Breackfast
                </Link>
              </div>
              <div>
                <Link className="badge-filter-filter-makanan-sehat">
                  Launch
                </Link>
              </div>
            </div>
          </div>

          <div className="section-detail-3">
            <div className="section-detail-3-content-left">
              <h1>Bahan-bahan :</h1>
              <ul>
                <li>1 lembar tortilla gandung</li>
                <li>1 buah alpukat matang</li>
                <li>Daging ayam rebus, 100 gram</li>
                <li>Lada hitam dan garam laut secukupnya</li>
                <li>1 butir telur</li>
              </ul>
              <h1>Cara membuat :</h1>
              <ol>
                <li>
                  Potong alpukat menjadi dua, buang bijinya dan ambil dagingnya.
                </li>
                <li>Haluskan daging alpukat dengan garpu sampai halus</li>
                <li>
                  Panaskan tortila di atas wajan datar hingga sedikit mengembang
                  dan menjadi lebih lentur.
                </li>
                <li>Oleskan alpukat yang sudah dihaluskan ke sisi tortilla.</li>
                <li>
                  Tambahkan lapisan lada hitam dan garam laut sesuai selera.
                </li>
                <li>
                  Letakkan telur rebus yang sudah di potong potong diatasnya.
                </li>
                <li>Gulung tortilla dengan rapi.</li>
                <li>Potong menjadi dua bagian dan sajikan. </li>
              </ol>
            </div>
            <div className="section-detail-3-content-right">
              <h1>Gak Ada Waktu Buat Bikin Menu Ini?</h1>
              <p>
                Tidak perlu khawatir! Kami siap membantu Anda. Pesanlah Chicken
                Avocado Wrap dan hidangan sehat lainnya langsung dari kami.
              </p>
              <a className="btn-pesan-disini" href="">
                Pesan disini
              </a>
              <h1>Keuntungan membeli menu sehat di AturPola:</h1>
              <div className="section-detail-content-footer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="58"
                    viewBox="0 0 57 58"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_577_8402)">
                      <path
                        d="M55.0853 28.0505C53.8234 26.3653 52.0303 25.1546 49.9956 24.6139C50.9873 21.7311 51.7201 18.7657 52.1854 15.7528C52.3374 14.6576 52.2331 13.5421 51.8808 12.494C51.5284 11.446 50.9376 10.494 50.1548 9.71309C49.3721 8.93217 48.4187 8.3436 47.3699 7.99372C46.321 7.64384 45.2052 7.54219 44.1104 7.69678C43.8111 7.73716 42.9229 7.86778 41.7093 8.10291C42.4607 6.43912 42.8168 4.62392 42.7495 2.79953C42.7395 2.48764 42.6682 2.18077 42.5396 1.89644C42.4111 1.61212 42.2277 1.3559 42.0001 1.14241C41.7725 0.928932 41.5051 0.762368 41.2132 0.652234C40.9212 0.5421 40.6104 0.490552 40.2985 0.500532C39.9866 0.510513 39.6797 0.581826 39.3954 0.710402C39.1111 0.838978 38.8549 1.0223 38.6414 1.24989C38.4279 1.47749 38.2613 1.74491 38.1512 2.03687C38.0411 2.32884 37.9895 2.63964 37.9995 2.95153C38.04 4.09882 37.8046 5.23907 37.3131 6.27653C36.9696 5.34946 36.4797 4.48347 35.862 3.71153C34.8121 2.51666 33.4794 1.60408 31.9858 1.05724C30.4921 0.510401 28.8852 0.34676 27.312 0.581282C25.587 0.719747 23.9382 1.35125 22.562 2.40053C21.0062 1.23012 19.1241 0.574229 17.1779 0.524282C14.7083 0.284931 12.2445 1.03389 10.326 2.60716C9.35184 3.47444 8.56532 4.53176 8.01476 5.71414C7.46421 6.89653 7.16125 8.17902 7.1245 9.48278C7.05933 11.5705 7.66716 13.6238 8.85825 15.3395C7.40926 16.5819 6.28448 18.1583 5.58105 19.9326C4.87761 21.7069 4.61667 23.6258 4.82075 25.5235C2.94249 26.5702 1.47876 28.2278 0.672599 30.2212C-0.133558 32.2146 -0.233629 34.4237 0.389003 36.4818C2.0159 42.1426 5.04395 47.3018 9.19313 51.4823C13.1736 55.3636 18.5201 57.525 24.0796 57.5005H32.9194C38.4783 57.5254 43.8241 55.3639 47.8035 51.4823C51.9542 47.3026 54.9832 42.1432 56.61 36.4818C57.034 35.0552 57.117 33.549 56.8521 32.0845C56.5873 30.62 55.9821 29.2382 55.0853 28.0505ZM44.7706 12.3993C45.1382 12.3497 45.5122 12.3857 45.8635 12.5046C46.2148 12.6235 46.5339 12.822 46.7958 13.0846C47.0577 13.3472 47.2553 13.6668 47.3733 14.0184C47.4912 14.37 47.5263 14.7441 47.4758 15.1115C46.9777 18.2304 46.1701 21.2918 45.0651 24.2505H38.9828L42.0536 21.1797C42.4863 20.7317 42.7256 20.1318 42.7202 19.5091C42.7148 18.8864 42.465 18.2907 42.0247 17.8503C41.5844 17.41 40.9887 17.1602 40.366 17.1548C39.7432 17.1494 39.1433 17.3888 38.6954 17.8214L32.2663 24.2505H28.5874C28.4139 23.0014 28.533 21.729 28.9353 20.5338C29.3375 19.3386 30.012 18.2531 30.9054 17.363C31.9195 16.3394 35.8074 13.563 44.7706 12.3993ZM11.8745 9.64191C11.8888 8.98806 12.0362 8.34399 12.3077 7.74903C12.5793 7.15407 12.9693 6.62071 13.4539 6.18153C14.4337 5.45726 15.651 5.12983 16.862 5.26478C17.4469 5.24073 18.0303 5.34066 18.5739 5.55801C19.1175 5.77535 19.6089 6.1052 20.016 6.52591C20.3365 6.88397 20.7289 7.17038 21.1676 7.36641C21.6063 7.56245 22.0815 7.66369 22.562 7.66353C23.0414 7.66116 23.515 7.55803 23.952 7.36081C24.3889 7.1636 24.7796 6.87672 25.0985 6.51878C25.4527 6.14408 25.8778 5.84344 26.3491 5.6343C26.8204 5.42515 27.3285 5.31166 27.844 5.30041C28.6291 5.16057 29.4365 5.21754 30.1942 5.46622C30.9518 5.7149 31.636 6.14753 32.1855 6.72541C32.9065 7.64844 33.2828 8.79413 33.2495 9.96491C33.2495 10.1193 33.2495 10.4565 33.2495 10.4565C30.0967 11.5918 27.4034 13.7303 25.583 16.5437C24.0833 14.7683 22.0879 13.4809 19.8522 12.8462C17.6165 12.2116 15.2423 12.2585 13.0335 12.9812C12.2453 12.0509 11.8321 10.8604 11.8745 9.64191ZM9.4995 24.2505C9.4995 22.3609 10.2502 20.5486 11.5864 19.2124C12.9226 17.8762 14.7348 17.1255 16.6245 17.1255C18.5142 17.1255 20.3264 17.8762 21.6626 19.2124C22.9988 20.5486 23.7495 22.3609 23.7495 24.2505H9.4995ZM52.05 35.1494C50.631 40.0352 48.0193 44.4914 44.45 48.1169C41.3638 51.1154 37.2222 52.7797 32.9194 52.7505H24.0796C19.7756 52.7787 15.6329 51.1146 12.5443 48.1169C8.97483 44.4915 6.36312 40.0352 4.94425 35.1494C4.73134 34.4303 4.69004 33.6714 4.82368 32.9335C4.95732 32.1955 5.26218 31.4993 5.71375 30.9005C6.15191 30.3095 6.72277 29.8297 7.38033 29.4996C8.03789 29.1696 8.76378 28.9987 9.4995 29.0005H47.4995C48.2376 28.9964 48.9663 29.1663 49.6266 29.4964C50.2868 29.8265 50.8599 30.3076 51.2995 30.9005C51.7479 31.5009 52.0493 32.1979 52.1796 32.9358C52.31 33.6737 52.2656 34.4318 52.05 35.1494Z"
                        fill="#FF9800"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_8402">
                        <rect
                          width="57"
                          height="57"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h1>MENU SEHAT</h1>
                  <p>Bahan berkualitas & nutrisi terjaga.</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_577_8407)">
                      <path
                        d="M21.375 56.9985H2.375C1.74511 56.9985 1.14102 56.7483 0.695621 56.3029C0.250223 55.8575 0 55.2534 0 54.6235C0 53.9936 0.250223 53.3895 0.695621 52.9441C1.14102 52.4988 1.74511 52.2485 2.375 52.2485H21.375C22.0049 52.2485 22.609 52.4988 23.0544 52.9441C23.4998 53.3895 23.75 53.9936 23.75 54.6235C23.75 55.2534 23.4998 55.8575 23.0544 56.3029C22.609 56.7483 22.0049 56.9985 21.375 56.9985Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M16.625 47.5H2.375C1.74511 47.5 1.14102 47.2498 0.695621 46.8044C0.250223 46.359 0 45.7549 0 45.125C0 44.4951 0.250223 43.891 0.695621 43.4456C1.14102 43.0002 1.74511 42.75 2.375 42.75H16.625C17.2549 42.75 17.859 43.0002 18.3044 43.4456C18.7498 43.891 19 44.4951 19 45.125C19 45.7549 18.7498 46.359 18.3044 46.8044C17.859 47.2498 17.2549 47.5 16.625 47.5Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M11.875 38.0015H2.375C1.74511 38.0015 1.14102 37.7513 0.695621 37.3059C0.250223 36.8605 0 36.2564 0 35.6265C0 34.9966 0.250223 34.3925 0.695621 33.9471C1.14102 33.5017 1.74511 33.2515 2.375 33.2515H11.875C12.5049 33.2515 13.109 33.5017 13.5544 33.9471C13.9998 34.3925 14.25 34.9966 14.25 35.6265C14.25 36.2564 13.9998 36.8605 13.5544 37.3059C13.109 37.7513 12.5049 38.0015 11.875 38.0015Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M30.8757 56.8922C30.2458 56.9202 29.6305 56.6969 29.1653 56.2713C28.7001 55.8457 28.423 55.2528 28.395 54.6229C28.3669 53.993 28.5903 53.3778 29.0159 52.9126C29.4414 52.4473 30.0344 52.1702 30.6643 52.1422C35.1589 51.731 39.4432 50.0475 43.0155 47.2891C46.5878 44.5307 49.3002 40.8114 50.8349 36.567C52.3697 32.3226 52.6632 27.7287 51.6812 23.3235C50.6992 18.9183 48.4823 14.884 45.2901 11.6934C42.098 8.50266 38.0627 6.28759 33.6571 5.30761C29.2514 4.32762 24.6577 4.62329 20.414 6.15998C16.1703 7.69666 12.4523 10.4107 9.69549 13.9843C6.9387 17.5579 5.25724 21.8431 4.84806 26.3378C4.79137 26.9652 4.48778 27.5444 4.00408 27.9479C3.52038 28.3514 2.89618 28.5463 2.26881 28.4896C1.64144 28.4329 1.06229 28.1293 0.65876 27.6456C0.255229 27.1619 0.0603763 26.5377 0.117066 25.9103C0.779427 18.6032 4.23437 11.833 9.76271 7.00905C15.291 2.18511 22.4668 -0.320915 29.7963 0.0126484C37.1258 0.346212 44.0443 3.49366 49.1117 8.79981C54.179 14.106 57.0047 21.162 57.0006 28.4991C57.037 35.6201 54.3915 42.494 49.5904 47.7532C44.7892 53.0125 38.1843 56.2718 31.0894 56.8827C31.0182 56.8898 30.9445 56.8922 30.8757 56.8922Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M28.5 14.25C27.8701 14.25 27.266 14.5002 26.8206 14.9456C26.3752 15.391 26.125 15.9951 26.125 16.625V28.5C26.1251 29.1298 26.3754 29.7338 26.8209 30.1791L33.9459 37.3041C34.3938 37.7368 34.9937 37.9761 35.6165 37.9707C36.2392 37.9653 36.8348 37.7155 37.2752 37.2752C37.7155 36.8349 37.9653 36.2392 37.9707 35.6165C37.9761 34.9937 37.7367 34.3938 37.3041 33.9459L30.875 27.5168V16.625C30.875 15.9951 30.6248 15.391 30.1794 14.9456C29.734 14.5002 29.1299 14.25 28.5 14.25Z"
                        fill="#FF9800"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_8407">
                        <rect width="57" height="57" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h1>FAST DELIVERY</h1>
                  <p>Pengiriman cepat & layanan tepat tepat waktu.</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="61"
                    height="61"
                    viewBox="0 0 61 61"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_577_8411)">
                      <path
                        d="M10.301 13.7261C11.9141 8.34216 19.0189 2.06836 29.9335 2.01274C42.9074 1.946 41.6261 13.3145 45.9507 17.6972C49.852 21.6684 64.2561 34.9057 51.7283 46.619C43.0447 54.7505 40.8137 51.2354 26.0779 55.4179C12.1544 59.3557 -1.15136 42.4921 4.03135 35.5398C10.8501 26.4071 8.67635 19.1656 10.301 13.7261Z"
                        fill="white"
                      />
                      <path
                        d="M13.4245 35.5399C20.2319 26.4072 18.0009 19.1657 19.6827 13.7262C21.0327 9.22104 26.2269 4.10411 34.3041 2.51342C23.3895 -0.0784185 11.8686 7.17427 10.3012 13.7262C8.67657 19.1657 10.8503 26.4072 4.03158 35.5399C-1.2541 42.6034 12.555 59.6673 26.5014 55.2845C16.5479 52.359 9.34014 40.946 13.4245 35.5399Z"
                        fill="white"
                      />
                      <path
                        d="M37.9419 30.1669C37.942 31.1843 37.7341 32.1915 37.3303 33.1301C36.9264 34.0686 36.3347 34.9197 35.5895 35.6339C34.8443 36.3481 33.9605 36.9112 32.9895 37.2903C32.0184 37.6694 30.9796 37.857 29.9333 37.8423C19.4649 37.4752 19.4649 22.8586 29.9333 22.4804C30.9801 22.4671 32.0192 22.6562 32.9903 23.0365C33.9614 23.4168 34.8451 23.9809 35.5901 24.696C36.3352 25.4111 36.9267 26.2629 37.3305 27.2021C37.7342 28.1413 37.942 29.149 37.9419 30.1669Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M28.95 30.1669C28.9489 28.7195 29.3681 27.3011 30.1595 26.0751C30.9509 24.8491 32.0822 23.8653 33.4234 23.2368C32.2182 22.6722 30.8854 22.4142 29.5497 22.4869C28.214 22.5596 26.9191 22.9606 25.7863 23.6525C24.6535 24.3444 23.7198 25.3045 23.0726 26.4429C22.4254 27.5812 22.0859 28.8607 22.0859 30.1614C22.0859 31.4621 22.4254 32.7415 23.0726 33.8799C23.7198 35.0182 24.6535 35.9783 25.7863 36.6702C26.9191 37.3621 28.214 37.7632 29.5497 37.8359C30.8854 37.9086 32.2182 37.6505 33.4234 37.0859C32.0823 36.4604 30.9506 35.4788 30.159 34.2545C29.3675 33.0302 28.9483 31.6131 28.95 30.1669Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M29.9336 39.3553C27.4272 39.3553 25.0235 38.3873 23.2513 36.6641C21.479 34.941 20.4834 32.604 20.4834 30.1671C20.9982 17.931 38.8803 17.931 39.3952 30.1671C39.3921 32.605 38.3939 34.942 36.6199 36.6648C34.8458 38.3876 32.4409 39.3553 29.9336 39.3553ZM29.9336 23.9934C28.2515 23.9964 26.6394 24.6481 25.451 25.8056C24.2627 26.963 23.5953 28.5317 23.5953 30.1671C23.8928 38.3319 35.9858 38.3319 36.2832 30.1671C36.2802 28.5306 35.6103 26.962 34.4201 25.8049C33.23 24.6477 31.6167 23.9963 29.9336 23.9934Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M19.6369 40.868C19.4215 40.8692 19.2083 40.8261 19.0112 40.7418C18.8141 40.6575 18.6374 40.5337 18.4928 40.3786C16.5285 38.2836 15.2067 35.6958 14.6769 32.9081C14.1472 30.1204 14.4307 27.2442 15.4953 24.6051C15.647 24.2319 15.945 23.9326 16.3237 23.773C16.7024 23.6134 17.1307 23.6066 17.5146 23.7541C17.8984 23.9016 18.2063 24.1914 18.3704 24.5596C18.5346 24.9278 18.5415 25.3443 18.3898 25.7175C17.5364 27.8255 17.3081 30.1239 17.7308 32.3517C18.1535 34.5795 19.2102 36.6475 20.781 38.3207C20.9838 38.5382 21.1176 38.8081 21.1664 39.0979C21.2152 39.3876 21.1769 39.6849 21.0561 39.954C20.9352 40.2231 20.737 40.4525 20.4852 40.6147C20.2334 40.7768 19.9388 40.8648 19.6369 40.868Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M26.5014 44.8948C24.9684 44.5389 21.273 43.8603 22.2683 41.6689C23.3552 39.8001 25.3688 41.7357 26.8447 41.9137C27.2111 42.0017 27.5322 42.2164 27.7479 42.5175C27.9637 42.8187 28.0595 43.1858 28.0176 43.5506C27.9756 43.9153 27.7986 44.2528 27.5197 44.5001C27.2407 44.7474 26.8789 44.8877 26.5014 44.8948Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M21.8564 57.498C15.0948 57.498 8.56208 53.4712 4.69507 48.0651C1.03399 43.0816 0.313215 37.9425 2.773 34.6498C8.98539 26.3404 7.05189 20.8786 8.80234 13.3034C11.388 5.272 21.0784 0.38867 29.9336 0.499908C34.3841 0.499908 37.7592 1.70127 40.2304 4.24861C42.1299 6.41195 43.5722 8.91805 44.475 11.6237C45.4131 14.0042 46.1339 15.8062 47.7013 17.1855C50.9276 20.4114 58.4786 27.9756 58.3299 36.4408C58.2469 38.5816 57.7149 40.6835 56.7667 42.6173C55.8184 44.5512 54.4738 46.2763 52.8154 47.6869C46.8661 53.2488 43.594 53.716 38.1596 54.4835C34.2239 54.974 30.3337 55.7625 26.5242 56.8417C25.0075 57.2717 23.4362 57.4927 21.8564 57.498ZM11.7884 14.1154C10.1409 21.7797 11.9143 27.4639 5.30143 36.3629C3.66539 38.5877 4.40905 42.4365 7.18918 46.263C12.5321 53.6937 20.3347 55.4624 25.7005 53.8939C29.6486 52.7722 33.6802 51.9503 37.7592 51.4356C42.8961 50.7237 45.4818 50.3232 50.6988 45.4621C60.8469 36.3629 51.4425 25.0167 45.4703 19.2991C39.7499 13.7372 41.855 3.35871 30.0938 3.48108C22.7716 3.48108 13.8592 7.22978 11.7884 14.1043V14.1154Z"
                        fill="#FF9800"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_8411">
                        <rect
                          width="60"
                          height="60"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h1>VARIASI MENU</h1>
                  <p>Sarapan, makan siang, & makan malam.</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_577_8428)">
                      <path
                        d="M39.9378 22.6532C37.0286 19.4028 32.8596 17.5386 28.4999 17.5386C27.2892 17.5386 26.3076 18.5202 26.3076 19.7308C26.3076 20.9415 27.2892 21.9231 28.4999 21.9231C31.6142 21.9231 34.5923 23.255 36.6708 25.5773C37.1039 26.0611 37.703 26.3075 38.3051 26.3075C38.8257 26.3075 39.3482 26.1233 39.7665 25.7488C40.6686 24.9413 40.7453 23.5554 39.9378 22.6532Z"
                        fill="#FF9800"
                      />
                      <path
                        d="M47.8098 35.0769H50.423H54.8076C56.0183 35.0769 56.9999 34.0953 56.9999 32.8846C56.9999 31.6739 56.0183 30.6923 54.8076 30.6923H52.5144C51.5828 20.404 44.1631 11.9607 34.39 9.49816C34.8287 8.61745 35.0768 7.62596 35.0768 6.57703C35.0769 2.95041 32.1266 0 28.4999 0C24.8733 0 21.923 2.95041 21.923 6.57692C21.923 7.62585 22.1711 8.61734 22.6097 9.49805C12.8366 11.9606 5.41688 20.4038 4.48551 30.6922H2.19227C0.981578 30.6922 0 31.6738 0 32.8845C0 34.0952 0.981578 35.0767 2.19227 35.0767H3.59099C2.65751 37.5187 3.17151 40.3919 5.13622 42.3567L15.8555 53.0759C16.2667 53.487 16.8249 53.7182 17.4062 53.7182L40.5614 53.7185L43.2008 56.3579C43.6119 56.769 44.1695 57.0001 44.751 57.0001C45.3324 57.0001 45.8901 56.769 46.3012 56.3579L56.1458 46.5132C57.002 45.6571 57.002 44.2691 56.1458 43.4129L47.8098 35.0769ZM28.4999 4.38465C29.7087 4.38465 30.6922 5.36812 30.6922 6.57692C30.6922 7.78572 29.7087 8.76919 28.4999 8.76919C27.2911 8.76919 26.3077 7.78572 26.3077 6.57692C26.3077 5.36812 27.291 4.38465 28.4999 4.38465ZM28.4999 13.1538C38.6385 13.1538 47.0154 20.8408 48.1097 30.6922H9.97376C9.97175 30.6922 9.96997 30.6921 9.96797 30.6921C9.96596 30.6921 9.96418 30.6922 9.96218 30.6922H8.89031C9.98433 20.8408 18.3614 13.1538 28.4999 13.1538ZM19.8557 37.7495L17.1829 35.0767H20.3405C20.0278 35.8592 19.854 36.7115 19.854 37.604C19.8542 37.6528 19.8548 37.7012 19.8557 37.7495ZM44.751 51.7072L43.0197 49.9761C42.6085 49.565 42.051 49.3341 41.4694 49.3341L18.3134 49.3335L8.2366 39.2568C7.28207 38.3021 7.28207 36.7488 8.23648 35.7943C8.69838 35.3326 9.31202 35.078 9.96485 35.0772H9.97086C10.6237 35.078 11.2374 35.3326 11.699 35.7939L19.7001 43.7953C20.1113 44.2064 20.6688 44.4374 21.2503 44.4374H32.1885C33.3992 44.4374 34.3807 43.456 34.3807 42.2452C34.3807 41.0345 33.3992 40.0529 32.1885 40.0529L26.687 40.0528C26.0329 40.0528 25.4182 39.7982 24.9558 39.3357C24.4933 38.8733 24.2386 38.2584 24.2386 37.6046C24.2386 36.2545 25.3371 35.1562 26.6872 35.1562H41.6877L51.4951 44.9634L44.751 51.7072Z"
                        fill="#FF9800"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_8428">
                        <rect width="57" height="57" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h1>MUDAH</h1>
                  <p>tidak perlu repot mempersiapkan menu sendiri.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <Authentification />
      <Footer />
    </div>
  );
};

export default DetailMakanansehatGuest;
