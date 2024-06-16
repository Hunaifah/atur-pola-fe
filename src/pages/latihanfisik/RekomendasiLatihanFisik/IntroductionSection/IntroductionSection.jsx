const IntroductionSection = () => {
  return (
    <section className="flex flex-col gap-[3px] mt-16 w-[1114px]">
      <div className="flex flex-col">
        <h1 className="text-[32px] font-semibold text-[#2C7865]">
          <span className="font-bold text-[#FF9800]">Ketahui Dulu</span> Latihan
          Fisik Sesuai Tujuan Anda!
        </h1>
        <h1 className="text-[15px] text-[#141414]">
          Kenali latihan fisik sesuai tujuan Anda! Temukan rekomendasi latihan
          terbaik untuk mencapai kesehatan optimal.
        </h1>
      </div>
      <div
        id="tujuan-latihan-fisik-list"
        className="flex gap-[87px] ml-7 mt-[29px]"
      >
        <div
          id="tujuan-item"
          className="w-[304px] h-[258px] rounded-[10px] border border-[#593500] overflow-hidden flex flex-col justify-between"
        >
          <div className="flex flex-col items-center gap-3 mt-[22px] ml-[22px] mr-[21.89px]">
            <div className="flex items-center gap-[10px]">
              <div className="size-[46px] rounded-full bg-[#8DB6AC] flex items-center justify-center">
                <img
                  src="/src/assets/icon-2.png"
                  alt=""
                  className="size-[37.5px]"
                />
              </div>
              <h1 className="font-bold text-black">Peningkatan Kekuatan</h1>
            </div>
            <p className="text-[14px] font-sans text-[#141414] max-w-[249px] text-justify">
              Bangun kekuatan inti dan stabilitas tubuh dengan latihan beban
              yang efektif.
            </p>
          </div>
          <div className="w-full h-[105px] relative">
            <div className="size-full absolute inset-0 bg-[#0B1E19] z-10 opacity-50"></div>
            <img
              src="/src/assets/rekomendasi-item-1.png"
              alt=""
              className="size-full"
            />
          </div>
        </div>
        <div
          id="tujuan-item"
          className="w-[304px] h-[258px] rounded-[10px] border border-[#593500] overflow-hidden flex flex-col justify-between"
        >
          <div className="flex flex-col items-center gap-3 mt-[22px] ml-[22px] mr-[21.89px]">
            <div className="flex items-center gap-[10px]">
              <div className="size-[46px] rounded-full bg-[#8DB6AC] flex items-center justify-center">
                <img
                  src="/src/assets/icon-1.png"
                  alt=""
                  className="size-[37.5px]"
                />
              </div>
              <h1 className="font-bold text-black max-w-[197px]">
                Penurunan Berat Badan
              </h1>
            </div>
            <p className="text-[14px] font-sans text-[#141414] max-w-[249px] text-justify">
              Cepat dan efektif! Latihan kardio HIIT untuk membakar lemak dan
              meningkatkan metabolisme.
            </p>
          </div>
          <div className="w-full h-[105px] relative">
            <div className="size-full absolute inset-0 bg-[#0B1E19] z-10 opacity-50"></div>
            <img
              src="/src/assets/rekomendasi-item-2.png"
              alt=""
              className="size-full"
            />
          </div>
        </div>
        <div
          id="tujuan-item"
          className="w-[304px] h-[258px] rounded-[10px] border border-[#593500] overflow-hidden flex flex-col justify-between"
        >
          <div className="flex flex-col items-center gap-3 mt-[22px] ml-[22px] mr-[21.89px]">
            <div className="flex items-center gap-[10px]">
              <div className="size-[46px] rounded-full bg-[#8DB6AC] flex items-center justify-center">
                <img
                  src="/src/assets/icon-3.png"
                  alt=""
                  className="size-[37.5px]"
                />
              </div>
              <h1 className="font-bold text-black max-w-[200px]">
                Peningkatan Kesehatan Jantung
              </h1>
            </div>
            <p className="text-[14px] font-sans text-[#141414] max-w-[260px] text-justify">
              Latihan aerobik menyenangkan untuk meningkatkan kesehatan jantung
              secara keseluruhan.
            </p>
          </div>
          <div className="w-full h-[105px] relative">
            <div className="size-full absolute inset-0 bg-[#0B1E19] z-10 opacity-50"></div>
            <img
              src="/src/assets/rekomendasi-item-3.png"
              alt=""
              className="size-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
