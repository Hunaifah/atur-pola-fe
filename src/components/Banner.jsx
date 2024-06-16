import "../App.css";
import ImgBanner from "../assets/bg-banner.svg";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-group">
          <img src={ImgBanner} alt="bg-banner" />
          <div>
            <h1>Selamat Datang di Komunitas</h1>
            <p>
              Di sini, Anda akan menemukan sumber daya, diskusi, dan dukungan
              untuk membantu Anda mencapai tujuan kesehatan dan kebugaran Anda.
              Mulailah petualangan Anda menuju gaya hidup yang lebih baik
              sekarang!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
