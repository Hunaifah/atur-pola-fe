const BodyContentSection = () => {
  return (
    <section className="w-[1156px] mt-[33px] flex gap-[43px]">
      <div className="flex flex-col gap-[35px]">
        {" "}
        <div className="w-[583px] h-[360px] rounded-[15px] overflow-hidden">
          <img
            src="/src/assets/rekomendasi-1.png"
            alt=""
            className="object-cover object-center size-full"
          />
        </div>
        <div id="filter-list" className="flex items-center gap-[18px]">
          <div className="w-fit h-fit px-6 py-[5px] rounded-full bg-[#A0C2BA] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Penurunan Berat Badan
          </div>
          <div className="w-fit h-[28px] px-6 flex items-center rounded-full bg-[#EA284B] text-[#F6F6F6] text-[15px] font-sans cursor-pointer select-none">
            Tinggi
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#FF9800] font-sans text-[25px] font-bold">
            Deskripsi Latihan :
          </h1>
          <p className="w-[530px] font-sans text-[19px] text-[#0F2A23]">
            Latihan ini adalah sesi High-Intensity Interval Training (HIIT) yang
            dapat dilakukan di rumah tanpa memerlukan peralatan khusus. Sesuai
            dengan namanya, latihan ini bertujuan untuk meningkatkan detak
            jantung dan membakar kalori secara efektif dengan serangkaian
            gerakan kardiovaskular yang intensif.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[#FF9800] font-sans text-[25px] font-bold">
            Tujuan Latihan :
          </h1>
          <p className="w-[530px] font-sans text-[19px] text-[#0F2A23]">
            Meningkatkan kapasitas kardiorespirasi, membakar lemak, dan
            meningkatkan stamina.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[#FF9800] font-sans text-[25px] font-bold">
            Durasi Latihan :
          </h1>
          <p className="w-[530px] font-sans text-[19px] text-[#0F2A23]">
            Meningkatkan kapasitas kardiorespirasi, membakar lemak, dan
            meningkatkan stamina.
          </p>
        </div>
        <div className="flex items-center gap-[7px]">
          <div className="size-[27px]">
            <img src="/src/assets/icon-clock.png" alt="" />
          </div>
          <h1 className="font-sans text-[19px] text-[#0F2A23]">15 menit x 3</h1>
        </div>
      </div>
    </section>
  );
};

export default BodyContentSection;
