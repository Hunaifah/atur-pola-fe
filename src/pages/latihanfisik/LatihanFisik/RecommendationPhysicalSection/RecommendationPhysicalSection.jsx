import { Link } from "react-router-dom";

const RecommendationPhysicalSection = () => {
  return (
    <section className="mt-10 w-[1136px] flex flex-col gap-[30px]">
      <h1 className="text-[32px] font-bold text-[#20584A]">
        Rekomendasi Latihan Fisik
      </h1>
      <div className="flex gap-[27px]">
        <div className="w-[264px] h-[286px] rounded-[10px] flex flex-col overflow-hidden shadow-300">
          <div className="w-full h-[125px] relative">
            <img
              src="/src/assets/rekomendasi-1.png"
              alt=""
              className="object-cover object-center"
            />
            <div className="w-9 h-[15px] rounded-[2px] bg-black/70 z-10 absolute bottom-1 right-2 flex items-center justify-center">
              <h1 className="font-sans text-[10px]">15.20</h1>
            </div>
          </div>
          <div className="px-3 pt-[19px] pb-[13px]">
            <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
              Latihan Cardio Intensif: HIIT Berbasis Lantai
            </h1>
            <h2 className="font-sans text-[13px] text-[#454545]">
              Latihan ini memberikan latihan kardiovaskular yang intensif ....
            </h2>
            <div className="flex justify-between mt-[10px]">
              <div className="flex gap-[7px]">
                <div className="size-[25px] rounded-full bg-[#8DB6AC] flex items-start justify-center">
                  <img
                    src="/src/assets/icon-1.png"
                    alt=""
                    className="scale-[.75] select-none"
                  />
                </div>
                <div className="size-[25px] rounded-full bg-[#EA284B]"></div>
              </div>

              <div className="flex items-center gap-[7px]">
                <h1 className="font-sans text-[10px] text-[#454545]">
                  10 Menit x 3
                </h1>
                <div className="size-[18px]">
                  <img src="/src/assets/icon-clock.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[286px] rounded-[10px] flex flex-col overflow-hidden shadow-300">
          <div className="w-full h-[125px] relative">
            <img
              src="/src/assets/rekomendasi-2.png"
              alt=""
              className="object-cover object-center"
            />
            <div className="w-9 h-[15px] rounded-[2px] bg-black/70 z-10 absolute bottom-1 right-2 flex items-center justify-center">
              <h1 className="font-sans text-[10px]">10.08</h1>
            </div>
          </div>
          <div className="px-3 pt-[19px] pb-[13px]">
            <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
              Jogging Pagi untuk Kesehatan Jantung
            </h1>
            <h2 className="font-sans text-[13px] text-[#454545]">
              Latihan ini mengajak Anda untuk berlari santai di pagi hari ....
            </h2>
            <div className="flex justify-between mt-[10px]">
              <div className="flex gap-[7px]">
                <div className="size-[25px] rounded-full bg-[#8DB6AC] flex items-start justify-center">
                  <img
                    src="/src/assets/icon-3.png"
                    alt=""
                    className="scale-[.75] select-none"
                  />
                </div>
                <div className="size-[25px] rounded-full bg-[#F0E700]"></div>
              </div>

              <div className="flex items-center gap-[7px]">
                <h1 className="font-sans text-[10px] text-[#454545]">
                  20 Menit x 3
                </h1>
                <div className="size-[18px]">
                  <img src="/src/assets/icon-clock.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[286px] rounded-[10px] flex flex-col overflow-hidden shadow-300">
          <div className="w-full h-[125px] relative">
            <img
              src="/src/assets/rekomendasi-3.png"
              alt=""
              className="object-cover object-center"
            />
            <div className="w-9 h-[15px] rounded-[2px] bg-black/70 z-10 absolute bottom-1 right-2 flex items-center justify-center">
              <h1 className="font-sans text-[10px]">08.30</h1>
            </div>
          </div>
          <div className="px-3 pt-[19px] pb-[13px]">
            <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
              Latihan Kardio HIIT untuk Pembakaran Lemak
            </h1>
            <h2 className="font-sans text-[13px] text-[#454545]">
              Latihan ini menggabungkan interval intensitas tinggi dengan
              periode ....
            </h2>
            <div className="flex justify-between mt-[10px]">
              <div className="flex gap-[7px]">
                <div className="size-[25px] rounded-full bg-[#8DB6AC] flex items-start justify-center">
                  <img
                    src="/src/assets/icon-1.png"
                    alt=""
                    className="scale-[.75] select-none"
                  />
                </div>
                <div className="size-[25px] rounded-full bg-[#EA284B]"></div>
              </div>

              <div className="flex items-center gap-[7px]">
                <h1 className="font-sans text-[10px] text-[#454545]">
                  5 Menit x 5
                </h1>
                <div className="size-[18px]">
                  <img src="/src/assets/icon-clock.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[264px] h-[286px] rounded-[10px] flex flex-col overflow-hidden shadow-300">
          <div className="w-full h-[125px] relative">
            <img
              src="/src/assets/rekomendasi-4.png"
              alt=""
              className="object-cover object-center"
            />
            <div className="w-9 h-[15px] rounded-[2px] bg-black/70 z-10 absolute bottom-1 right-2 flex items-center justify-center">
              <h1 className="font-sans text-[10px]">20.30</h1>
            </div>
          </div>
          <div className="px-3 pt-[19px] pb-[13px]">
            <h1 className="font-sans font-bold text-[18px] text-[#2C7865]">
              Latihan Kekuatan Tubuh Bagian Atas
            </h1>
            <h2 className="font-sans text-[13px] text-[#454545]">
              Latihan ini difokuskan pada pengembangan kekuatan ....
            </h2>
            <div className="flex justify-between mt-[10px]">
              <div className="flex gap-[7px]">
                <div className="size-[25px] rounded-full bg-[#8DB6AC] flex items-start justify-center">
                  <img
                    src="/src/assets/icon-2.png"
                    alt=""
                    className="scale-[.75] select-none"
                  />
                </div>
                <div className="size-[25px] rounded-full bg-[#EA284B]"></div>
              </div>

              <div className="flex items-center gap-[7px]">
                <h1 className="font-sans text-[10px] text-[#454545]">
                  15 Menit x 3
                </h1>
                <div className="size-[18px]">
                  <img src="/src/assets/icon-clock.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default RecommendationPhysicalSection;
