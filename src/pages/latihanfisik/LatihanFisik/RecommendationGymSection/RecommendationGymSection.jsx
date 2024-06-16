import { Link } from "react-router-dom";

const RecommendationGymSection = () => {
  return (
    <section className="mt-10 w-[1136px] flex flex-col gap-[30px]">
      <h1 className="text-[32px] font-bold text-[#20584A]">
        Rekomendasi Tempat Gym
      </h1>
      <div className="flex gap-[27px]">
        <Link to="/detail-gym-user">
          <div className="w-[264px] h-[274px] rounded-[10px] flex flex-col overflow-hidden shadow-300 cursor-pointer active:scale-90 transition-all duration-300 hover:-translate-y-4">
            <div className="w-full h-[125px] relative">
              <img
                src="/src/assets/gym-1.png"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div className="px-3 pt-[19px] pb-[13px]">
              <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
                Fit & Flex Gym
              </h1>
              <h2 className="font-sans text-[13px] text-[#454545]">
                Senin-Jumat: 06.00 - 22.00, <br />
                Sabtu-Minggu: 08.00 - 20.00
              </h2>
              <div className="flex justify-between mt-[19px]">
                <div className="flex gap-[7px]">
                  <div className="size-[31px] rounded-full bg-[#89BC07] flex items-start justify-center">
                    <img
                      src="/src/assets/gym-icon.png"
                      alt=""
                      className="scale-[.65] select-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[7px]">
                  <h1 className="font-sans text-[12px] font-bold text-[#454545]">
                    Jakarta Selatan
                  </h1>
                  <div className="size-[18px]">
                    <img src="/src/assets/location.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/detail-gym-user">
          <div className="w-[264px] h-[274px] rounded-[10px] flex flex-col overflow-hidden shadow-300 cursor-pointer active:scale-90 transition-all duration-300 hover:-translate-y-4">
            <div className="w-full h-[125px] relative">
              <img
                src="/src/assets/gym-2.png"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div className="px-3 pt-[19px] pb-[13px]">
              <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
                Iron Strength Gym
              </h1>
              <h2 className="font-sans text-[13px] text-[#454545]">
                Senin-Sabtu: 05.00 - 23.00, <br />
                Minggu: 07.00 - 21.00
              </h2>
              <div className="flex justify-between mt-[19px]">
                <div className="flex gap-[7px]">
                  <div className="size-[31px] rounded-full bg-[#FF6554] flex items-start justify-center">
                    <img
                      src="/src/assets/gym-icon.png"
                      alt=""
                      className="scale-[.65] select-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[7px]">
                  <h1 className="font-sans text-[12px] font-bold text-[#454545]">
                    Surabaya
                  </h1>
                  <div className="size-[18px]">
                    <img src="/src/assets/location.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/detail-gym-user">
          <div className="w-[264px] h-[274px] rounded-[10px] flex flex-col overflow-hidden shadow-300 cursor-pointer active:scale-90 transition-all duration-300 hover:-translate-y-4">
            <div className="w-full h-[125px] relative">
              <img
                src="/src/assets/gym-3.png"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div className="px-3 pt-[19px] pb-[13px]">
              <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
                ActiveLife Fitness Center
              </h1>
              <h2 className="font-sans text-[13px] text-[#454545]">
                Senin-Jumat: 07.00 - 21.00, <br />
                Sabtu: 08.00 - 18.00, Minggu: Tutup
              </h2>
              <div className="flex justify-between mt-[19px]">
                <div className="flex gap-[7px]">
                  <div className="size-[31px] rounded-full bg-[#89BC07] flex items-start justify-center">
                    <img
                      src="/src/assets/gym-icon.png"
                      alt=""
                      className="scale-[.65] select-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[7px]">
                  <h1 className="font-sans text-[12px] font-bold text-[#454545]">
                    Bandung
                  </h1>
                  <div className="size-[18px]">
                    <img src="/src/assets/location.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/detail-gym-user">
          <div className="w-[264px] h-[274px] rounded-[10px] flex flex-col overflow-hidden shadow-300 cursor-pointer active:scale-90 transition-all duration-300 hover:-translate-y-4">
            <div className="w-full h-[125px] relative">
              <img
                src="/src/assets/gym-4.png"
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div className="px-3 pt-[19px] pb-[13px]">
              <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
                PowerFit Gym
              </h1>
              <h2 className="font-sans text-[13px] text-[#454545]">
                Setiap Hari: 06.00 - 23.00
              </h2>
              <div className="flex justify-between mt-[34px]">
                <div className="flex gap-[7px]">
                  <div className="size-[31px] rounded-full bg-[#89BC07] flex items-start justify-center">
                    <img
                      src="/src/assets/gym-icon.png"
                      alt=""
                      className="scale-[.65] select-none"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[7px]">
                  <h1 className="font-sans text-[12px] font-bold text-[#454545]">
                    Yogyakarta
                  </h1>
                  <div className="size-[18px]">
                    <img src="/src/assets/location.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Link
        to="/rekomendasi-latihan-fisik"
        className="text-[#FF9800] underline self-end"
      >
        Lebih Banyak Rekomendasi
      </Link>
    </section>
  );
};

export default RecommendationGymSection;
