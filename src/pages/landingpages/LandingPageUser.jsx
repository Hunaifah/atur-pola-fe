import "../../App.css";
import React, { useState } from "react";
import makanansehat from "./../../assets/makanansehat.png";
import peningkatan from "./../../assets/peningkatan.png";
import gambarfitur1 from "./../../assets/gambarfitur1.png";
import gambarfitur2 from "./../../assets/gambarfitur2.png";
import gambarfitur3 from "./../../assets/gambarfitur3.png";
import gambarfitur4 from "./../../assets/gambarfitur4.png";
import gambaryouare from "./../../assets/gambaryouare.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Landingpageguest = () => {
  const activeNav = "makanansehat";
  const name = "username";

  const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="border-b border-gray-200">
        <button
          className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
          onClick={toggleAccordion}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">{title}</span>
            <span>{isOpen ? "-" : "+"}</span>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 bg-white">
            <p className="text-gray-700">{content}</p>
          </div>
        )}
      </div>
    );
  };

  const items = [
    {
      title: "Apa yang membedakan AturPola dari platform kesehatan lainnya?",
      content:
        "Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.",
    },
    {
      title: "Bagaimana saya bisa memulai menggunakan AturPola?",
      content:
        "Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.",
    },
    {
      title: "Apakah AturPola tersedia untuk semua usia?",
      content:
        "Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.",
    },
    {
      title:
        "Apakah saya perlu memiliki pengetahuan kesehatan sebelum menggunakan AturPola?",
      content:
        "Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.",
    },
    {
      title:
        "Apakah ada biaya atau langganan bulanan untuk menggunakan AturPola?",
      content:
        "Aturpola menyediakan rekomendasi gizi dan rencana latihan yang disesuaikan dengan kebutuhan unik setiap pengguna, serta menyediakan fitur peta nutrisi interaktif yang membantu pengguna membuat pilihan makanan yang sehat.",
    },
  ];

  return (
    <div className="Landingpageuser">
      <div className="container-landingpageguest">
        <Header name={name} activeNav={activeNav} />
        <div style={{ marginLeft: "70px", marginRight: "70px" }}>
          <div className="group-hero-section-guest">
            <div className="hero-section-guest">
              <div className="text-herosection">
                <h1>Gizi Yang</h1>
                <h1>Menyehatkan</h1>
              </div>
              <div className="text-herosection1">
                <h1>Olahraga Yang</h1>
                <h1>Membahagiakan!</h1>
              </div>
              <div className="text-herosection2">
                <h1>
                  Di AturPola, kami percaya bahwa kombinasi gizi yang tepat dan{" "}
                </h1>
                <h1>kegiatan fisik yang menyenangkan adalah kunci untuk</h1>
                <h1>yang lebih baik.</h1>
              </div>
              <button className="button-herosection">
                Bergabunglah Sekarang!
              </button>
            </div>
            <div className="makanan-herosection">
              <img src={makanansehat} alt="Makanan Sehat"></img>
            </div>
          </div>

          <div className="pola-hidup">
            <div className="kenapa-polahidup">
              <span>Kenapa Pola Hidup Sehat</span>
              <span className="penting-polahidup">Penting?</span>
            </div>
            <div className="teks-polahidup">
              <p>
                Ingatlah bahwa kesehatan adalah aset terbesar yang dimiliki
                setiap individu.
              </p>
            </div>
            <div className="icon-polahidup">
              <div className="icon">
                <img
                  src="/src/assets/peningkatan.png"
                  alt="Peningkatan Energi"
                ></img>
                <h1>Peningkatan Energi</h1>
                <div className="icon-text">
                  Pola hidup sehat dapat mengurangi risiko berbagai penyakit
                  kronis seperti diabetes, kanker, dan penyakit jantung.
                </div>
              </div>
              <div className="icon">
                <img
                  src="/src/assets/emosional.png"
                  alt="Emosional Sejahtera"
                ></img>
                <h1>Emosional Sejahtera</h1>
                <div className="icon-text">
                  Dengan pola hidup sehat, Anda dapat merasakan peningkatan
                  kesejahteraan emosional dan kebahagiaan dalam kehidupan
                  sehari-hari.
                </div>
              </div>
              <div className="icon">
                <img
                  src="/src/assets/jantung.png"
                  alt="Penurunan Risiko Penyakit"
                ></img>
                <h1>Penurunan Risiko Penyakit</h1>
                <div className="icon-text">
                  Pola hidup sehat dapat mengurangi risiko berbagai penyakit
                  kronis seperti diabetes, kanker, dan penyakit jantung.
                </div>
              </div>
              <div className="icon">
                <img src="/src/assets/waktu.png" alt="Banyak Waktu Luang"></img>
                <h1>Banyak Waktu Luang</h1>
                <div className="icon-text">
                  Dengan pola hidup sehat, Anda dapat merasakan peningkatan
                  kesejahteraan emosional dan kebahagiaan dalam kehidupan
                  sehari-hari.
                </div>
              </div>
            </div>
          </div>
          <div className="fitur-landingpageguest">
            <h1>Fitur Unggulan Kami</h1>
            <p>Cari beragam rekomendasi nutrisi dan latihan fisik untuk Anda</p>
          </div>
          <div className="card-landingpageguest">
            <div className="card-1">
              <div>
                <img src={gambarfitur1} alt="Fitur 1"></img>
                <h1>Rekomendasi Nutrisi Kamu</h1>
                <p>
                  Temukan menu makanan sehat dan rahasia nutrisinya. Pesan
                  hidangan favoritmu dalam sekejap.
                </p>
              </div>
              <button className="button-fitur">Mulai!</button>
            </div>
            <div className="card-1">
              <div>
                <img src={gambarfitur2} alt="Fitur 2"></img>
                <h1>Rencanakan Latihanmu</h1>
                <p>
                  Akses latihan yang disesuaikan dengan kebutuhanmu. Mulai dari
                  video workout hingga penemuan gym terdekat.
                </p>
              </div>
              <button className="button-fitur">Mulai!</button>
            </div>
            <div className="card-1">
              <div>
                <img src={gambarfitur3} alt="Fitur 3"></img>
                <h1>Bergabunglah Dengan Komunitas</h1>
                <p>
                  Temukan inspirasi, berbagi kisah, dan dapatkan dukungan dalam
                  komunitas sehat kami.
                </p>
              </div>
              <button className="button-fitur">Mulai!</button>
            </div>
            <div className="card-1">
              <div>
                <img src={gambarfitur4} alt="Fitur 4"></img>
                <h1>Pesan Makanan & Booking Gym</h1>
                <p>
                  Pesan makanan sehat favoritmu dan booking gym secara langsung
                  dalam satu platform yang praktis.
                </p>
              </div>
              <button className="button-fitur">Mulai!</button>
            </div>
          </div>
          <div className="question-landingpage">
            <h1>Frequently Asked Questions</h1>
            <p>Temukan jawaban untuk pertanyaan Anda di sini.</p>
            <div className="w-full mx-auto mt-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
          <div className="youare-landingpageguest">
            <div className="content-youare">
              <img src={gambaryouare} alt="You Are"></img>
              <h1>
                “We are what we repeatedly eat. Healthy eating is not an act,
                but a habit.”
              </h1>
              <p>Mari Kita Mulai Perjalanan Sehat Kita bersama-sama</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landingpageguest;
