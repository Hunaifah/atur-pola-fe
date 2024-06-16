import Image from "../../../../assets/bg-hero.png";

const HeroSection = () => {
  return (
    <div className="w-[1240px] h-[280px] rounded-[10px] bg-black pt-[77px] pb-[106] flex flex-col pl-[66px] relative overflow-hidden">
      <div className="absolute inset-0 size-full bg-gradient-to-r from-[#02271D] to-transparent z-[2] select-none"></div>
      <div className="absolute inset-0 size-full select-none">
        <img src={Image} alt="" className="" />
      </div>
      <h1 className="font-semibold text-[48px] text-[#FF9800] z-10">
        Hei, Teman Sehat!
      </h1>
      <h2 className="text-[24px] text-white z-10">
        Mari Bergabung dalam Rutinitas Latihan Fisik Anda!
      </h2>
    </div>
  );
};

export default HeroSection;
