const PhysicalTrainingGoalsSection = () => {
  return (
    <>
      {" "}
      <section className="mt-[123px] w-[1136px]">
        <h1 className="text-[32px] font-semibold text-[#FF9800]">
          Ketahui Dulu{" "}
          <span className="text-[#2C7865]">
            Latihan Fisik Sesuai Tujuan Anda!
          </span>
        </h1>
        <h2 className="text-[15px] text-[#141414]">
          Kenali latihan fisik sesuai tujuan Anda! Temukan rekomendasi latihan
          terbaik untuk mencapai kesehatan optimal.
        </h2>
      </section>
      <div className="flex gap-[17px] ml-[26px] mt-[29px]">
        <div className="w-[350px] h-[192px] rounded-[10px] border border-[#BFBFBF] py-[31px] px-[28px] flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div className="size-[33px] rounded-full bg-[#8DB6AC] flex justify-center items-center">
              <img
                src="/src/assets/icon-1.png"
                alt=""
                className="scale-[.85]"
              />
            </div>
            <h1 className="font-semibold text-black">Peningkatan Kekuatan</h1>
          </div>
          <p className="text-[#141414] font-sans text-[14px] text-justify">
            Latihan ini bertujuan untuk memperkuat otot-otot tubuh, menggunakan
            berbagai gerakan dengan beban untuk meningkatkan kekuatan dan daya
            tahan.
          </p>
        </div>
        <div className="w-[350px] h-[192px] rounded-[10px] border border-[#BFBFBF] py-[31px] px-[28px] flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div className="size-[33px] rounded-full bg-[#8DB6AC] flex justify-center items-center">
              <img
                src="/src/assets/icon-2.png"
                alt=""
                className="scale-[.85]"
              />
            </div>
            <h1 className="font-semibold text-black">Penurunan Berat Badan</h1>
          </div>
          <p className="text-[#141414] font-sans text-[14px] text-justify">
            Latihan ini dirancang untuk membantu pembakaran kalori dan penurunan
            berat badan melalui kombinasi latihan kardiovaskular dan kekuatan.
          </p>
        </div>
        <div className="w-[367px] h-[192px] rounded-[10px] border border-[#BFBFBF] py-[31px] px-[28px] flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div className="size-[33px] rounded-full bg-[#8DB6AC] flex justify-center items-center">
              <img
                src="/src/assets/icon-3.png"
                alt=""
                className="scale-[.85]"
              />
            </div>
            <h1 className="font-semibold text-black">
              Peningkatan Kesehatan Jantung
            </h1>
          </div>
          <p className="text-[#141414] font-sans text-[14px] text-justify">
            Latihan kardiovaskular yang bertujuan untuk meningkatkan kesehatan
            jantung dan sirkulasi darah, dengan fokus pada peningkatan daya
            tahan kardiovaskular.
          </p>
        </div>
      </div>
    </>
  );
};

export default PhysicalTrainingGoalsSection;
