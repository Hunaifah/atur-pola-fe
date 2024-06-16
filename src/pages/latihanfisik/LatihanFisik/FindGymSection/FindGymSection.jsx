const FindGymSection = () => {
  return (
    <div className="w-[1136px] h-[347px] rounded-t-[10px] rounded-b-2xl overflow-hidden shadow-500 mt-[153px]">
      <div className="w-full h-[267px] relative flex pl-[59px] items-center">
        <div className="absolute inset-0 size-full bg-gradient-to-r from-[#0B1E19] from-[19%] to-transparent z-[2] select-none"></div>
        <div className="absolute inset-0 size-full select-none">
          <img
            src="/src/assets/find-your-gym-2.png"
            alt=""
            className="object-cover size-full"
          />
        </div>
        <h1 className="text-[48px] font-semibold text-[#FF9800] z-30">
          Mari kita mulai <br />
          bergerak bersama!
        </h1>
      </div>
      <div className="flex items-center justify-center py-[28px]">
        <h1 className="font-sans text-[20px] text-black">
          Temukan gym terdekat dan mulai bergerak! Ayo, jadikan langkah pertama
          menuju gaya hidup sehat hari ini.
        </h1>
      </div>
    </div>
  );
};

export default FindGymSection;
