const HowImportantSection = () => {
  return (
    <div className="mt-6 flex gap-5 items-center">
      <img
        src="/src/assets/emoji.png"
        alt=""
        className="size-[160px] select-none"
      />
      <div className="flex flex-col">
        <h1 className="text-[40px] font-semibold text-[#FF9800]">
          Seberapa <span className="text-[#2C7865]">penting</span> olahraga bagi
          Anda?
        </h1>
        <h2 className="text-[15px] text-black">
          <span className="font-semibold">
            Olahraga penting untuk kesehatan tubuh dan pikiran.
          </span>{" "}
          Fakta ilmiah menunjukkan manfaat besar dari rutinitas <br />
          latihan fisik yang teratur. Mari kita telusuri lebih lanjut bersama!
        </h2>
      </div>
    </div>
  );
};

export default HowImportantSection;
