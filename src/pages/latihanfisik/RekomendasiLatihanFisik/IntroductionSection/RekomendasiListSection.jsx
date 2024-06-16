import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RekomendasiItem = ({
  img,
  duration,
  name,
  desc,
  interval,
  color,
  icon,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/detail-latihan-fisik-user")}
      className="w-[264px] h-[286px] rounded-[10px] flex flex-col overflow-hidden shadow-300 cursor-pointer hover:-translate-y-3 translate-all duration-300 font-sans"
    >
      <div className="w-full h-[125px] relative">
        <img src={img} alt="" className="object-cover object-center" />
        <div className="w-9 h-[15px] rounded-[2px] bg-black/70 z-10 absolute bottom-1 right-2 flex items-center justify-center">
          <h1 className="font-sans text-[10px]">{duration}</h1>
        </div>
      </div>
      <div className="px-3 pt-[19px] pb-[13px]">
        <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
          {name}
        </h1>
        <h2 className="font-sans text-[13px] text-[#454545]">{desc}</h2>
        <div className="flex justify-between mt-[10px]">
          <div className="flex gap-[7px]">
            <div className="size-[25px] rounded-full bg-[#8DB6AC] flex items-start justify-center">
              <img
                src={`/src/assets/icon-${icon}.png`}
                alt=""
                className="scale-[.75] select-none"
              />
            </div>
            <div className={`size-[25px] rounded-full bg-[#${color}]`}></div>
          </div>

          <div className="flex items-center gap-[7px]">
            <h1 className="font-sans text-[10px] text-[#454545]">{interval}</h1>
            <div className="size-[18px]">
              <img src="/src/assets/icon-clock.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RekomendasiItem.propTypes = {
  img: PropTypes.string,
  duration: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  interval: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
};

const RekomendasiListSection = () => {
  const [rekomendasiData, setRekomendasiData] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        img: "/src/assets/rekomendasi-1.png",
        duration: "15.20",
        name: "Latihan Cardio Intensif: HIIT Berbasis Lantai",
        desc: "Latihan ini memberikan latihan kardiovaskular yang intensif ....",
        interval: "10 Menit x 3",
        color: "EA284B",
        icon: "1",
      },
      {
        id: 2,
        img: "/src/assets/rekomendasi-2.png",
        duration: "10.08",
        name: "Jogging Pagi untuk Kesehatan Jantung",
        desc: "Latihan ini mengajak Anda untuk berlari santai di pagi hari ....",
        interval: "20 Menit x 3",
        color: "F0E700",
        icon: "3",
      },
      {
        id: 3,
        img: "/src/assets/rekomendasi-3.png",
        duration: "08.30",
        name: "Latihan Kardio HIIT untuk Pembakaran Lemak",
        desc: "Latihan ini menggabungkan interval intensitas tinggi dengan periode ....",
        interval: "5 Menit x 5",
        color: "EA284B",
        icon: "1",
      },
      {
        id: 4,
        img: "/src/assets/rekomendasi-4.png",
        duration: "20.30",
        name: "Latihan Kardio HIIT untuk Pembakaran Lemak",
        desc: "Latihan ini menggabungkan interval intensitas tinggi dengan periode ....",
        interval: "15 Menit x 3",
        color: "F0E700",
        icon: "2",
      },
      {
        id: 5,
        img: "/src/assets/rekomendasi-5.png",
        duration: "15.20",
        name: "Latihan Kekuatan Tubuh Bagian Atas: Dumbbell",
        desc: "Latihan ini difokuskan pada pengembangan kekuatan ....",
        interval: "15 Menit x 3",
        color: "F0E700",
        icon: "2",
      },
      {
        id: 6,
        img: "/src/assets/rekomendasi-6.png",
        duration: "10.08",
        name: "Latihan Kekuatan Tubuh Bagian Bawah",
        desc: "Pengembangan kekuatan otot-otot tubuh bagian bawah, termasuk ....",
        interval: "20 Menit x 3",
        color: "F0E700",
        icon: "2",
      },
      {
        id: 7,
        img: "/src/assets/rekomendasi-7.png",
        duration: "08.30",
        name: "Latihan Interval Kardio di Treadmill",
        desc: "Latihan ini menggabungkan interval latihan kardiovaskular yang ....",
        interval: "5 Menit x 5",
        color: "EA284B",
        icon: "1",
      },
      {
        id: 8,
        img: "/src/assets/rekomendasi-8.png",
        duration: "20.30",
        name: "Bersepeda Statis untuk Kesehatan Jantung",
        desc: "Latihan ini melibatkan bersepeda secara statis di atas sepeda ....",
        interval: "15 Menit x 3",
        color: "89BC07",
        icon: "3",
      },
      {
        id: 9,
        img: "/src/assets/rekomendasi-9.png",
        duration: "15.20",
        name: "Latihan Peregangan dan Yoga",
        desc: "Latihan ini menggabungkan gerakan peregangan dan yoga yang ....",
        interval: "10 Menit x 3",
        color: "89BC07",
        icon: "3",
      },
      {
        id: 10,
        img: "/src/assets/rekomendasi-10.png",
        duration: "10.08",
        name: "Latihan Kekuatan Total dengan Alat Berat",
        desc: "Latihan ini melibatkan penggunaan alat berat seperti barbell ....",
        interval: "10 Menit x 5",
        color: "EA284B",
        icon: "2",
      },
      {
        id: 11,
        img: "/src/assets/rekomendasi-11.png",
        duration: "08.30",
        name: "Latihan Aerobik dengan Langkah Sederhana",
        desc: "Latihan aerobik ini menghadirkan serangkaian gerakan langkah ....",
        interval: "5 Menit x 10",
        color: "EA284B",
        icon: "1",
      },
      {
        id: 12,
        img: "/src/assets/rekomendasi-12.png",
        duration: "20.30",
        name: "Latihan Kekuatan Otot Inti",
        desc: "Latihan ini bertujuan untuk memperkuat otot inti, termasuk  ....",
        interval: "5 Menit x 6",
        color: "89BC07",
        icon: "3",
      },
      {
        id: 13,
        img: "/src/assets/rekomendasi-13.png",
        duration: "15.20",
        name: "Latihan Kardio Berbasis Tangga",
        desc: "Latihan kardiovaskular ini memanfaatkan tangga sebagai ....",
        interval: "15 Menit x 3",
        color: "EA284B",
        icon: "3",
      },
      {
        id: 14,
        img: "/src/assets/rekomendasi-14.png",
        duration: "10.08",
        name: "Latihan Cardio Low Impact",
        desc: "Latihan kardiovaskular yang lembut namun efektif ini dirancang untuk ....",
        interval: "10 Menit x 3",
        color: "89BC07",
        icon: "3",
      },
      {
        id: 15,
        img: "/src/assets/rekomendasi-15.png",
        duration: "08.30",
        name: "Latihan Kekuatan dengan Resistance Band",
        desc: "Latihan ini ditujukan untuk meningkatkan kekuatan otot ....",
        interval: "10 menit x 4",
        color: "F0E700",
        icon: "2",
      },
      {
        id: 16,
        img: "/src/assets/rekomendasi-16.png",
        duration: "20.30",
        name: "Latihan Cardio dengan Skipping Rope",
        desc: "Latihan skipping rope atau loncat tali adalah cara yang efektif ....",
        interval: "5 Menit x 4",
        color: "EA284B",
        icon: "3",
      },
    ];

    setRekomendasiData(data);
  }, []);

  return (
    <section className="flex flex-col gap-[29px]">
      <div
        id="filter"
        className="w-[1136px] h-[60px] flex items-center pl-[29px] pr-[18px] mt-[72px] gap-[19px]"
      >
        {" "}
        <img
          src="/src/assets/filter-icon.png"
          alt=""
          className="object-center cursor-pointer size-6"
        />
        <div id="filter-list" className="flex items-center gap-[18px]">
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#A0C2BA] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Peningatan Kekuatan
          </div>
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#A0C2BA] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Penurunan Berat Badan
          </div>
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#A0C2BA] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Peningkatan Kesehatan Jantung
          </div>
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#89BC07] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Mudah
          </div>
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#F0E700] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Sedang
          </div>
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#EA284B] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Tinggi
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[32px] font-bold text-[#20584A]">
          Rekomendasi Latihan Fisik
        </h1>
        <div
          id="rekomendasi-list"
          className="w-[1136px] grid grid-cols-4 gap-y-[27px] gap-x-[26px] mt-[29px]"
        >
          {rekomendasiData.map((item) => (
            <RekomendasiItem
              key={item.id}
              img={item.img}
              duration={item.duration}
              name={item.name}
              desc={item.desc}
              interval={item.interval}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="flex items-center justify-between w-full mt-[61px]">
          <h1 className="text-neutral-600 font-sans font-medium text-[14px]">
            Showing 1-12 of 47
          </h1>
          <div className="flex">
            <button className="w-[43px] h-[30px] border-[0.1px] border-[#D5D5D5] rounded-l-lg flex items-center justify-center cursor-pointer hover:bg-gray-500/20 active:scale-90 transition-all duration-150">
              <img
                src="/src/assets/path-icon.png"
                alt=""
                className="rotate-180 opacity-50"
              />
            </button>
            <button className="w-[43px] h-[30px] border-[0.1px] border-[#D5D5D5] rounded-r-lg flex items-center justify-center cursor-pointer hover:bg-gray-500/20 active:scale-90 transition-all duration-150">
              <img src="/src/assets/path-icon.png" alt="" className="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RekomendasiListSection;
