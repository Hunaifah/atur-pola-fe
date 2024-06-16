const MainContentSection = () => {
  return (
    <section className="w-[1148px] px-[56px] pt-[22px] pb-[52px] flex flex-col gap-7 bg-[rgba(255, 209, 140, 0.25)] rounded-[20px]">
      <div className="flex flex-col gap-[14px]">
        <h1 className="font-sans font-bold text-[32px] text-[#FF9800]">
          Persiapan:
        </h1>
        <ol className="text-[21px] font-sans text-[#0F2A23] list-decimal ml-6">
          <li>
            Pilih area yang lapang di rumah Anda, pastikan lantainya rata dan
            aman untuk bergerak.
          </li>
          <li>
            Kenakan pakaian olahraga yang nyaman dan sesuai dengan intensitas
            latihan.
          </li>
          <li>
            Pastikan Anda memiliki air minum yang cukup dan handuk untuk
            menyerap keringat.
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-[14px]">
        <h1 className="font-sans font-bold text-[32px] text-[#FF9800]">
          Persiapan:
        </h1>
        <ol className="text-[20px] font-sans text-[#0F2A23] list-decimal ml-6">
          <li>
            <span className="font-bold">Pemanasan (5 menit):</span> Mulailah
            dengan pemanasan untuk mempersiapkan tubuh Anda. Anda dapat
            melakukan peregangan dinamis seperti lompatan kecil, gerakan lingkar
            lengan, dan lunges ringan.
          </li>
          <li>
            <span className="font-bold">Inti Latihan (15 menit):</span> Mulailah
            sesi latihan HIIT dengan interval latihan intensif selama 30-60
            detik, diikuti dengan istirahat singkat atau aktif recovery selama
            15-30 detik. Lakukan gerakan-gerakan seperti burpees, mountain
            climbers, jumping jacks, high knees, squat jumps, dan push-ups
            dengan intensitas tinggi.
          </li>
          <li>
            <span className="font-bold">Pendinginan (5 menit):</span> Setelah
            selesai dengan inti latihan, lakukan pendinginan dengan melakukan
            gerakan peregangan statis untuk merilekskan otot-otot Anda. Fokuskan
            pada otot-otot yang bekerja selama latihan, seperti punggung, kaki,
            dan bahu.
          </li>
          <li>
            <span className="font-bold">Hidrasi dan Istirahat (10 menit):</span>{' '}
            Minumlah air minum untuk menghidrasi tubuh Anda dan beristirahat
            sejenak untuk memulihkan napas dan denyut jantung Anda.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default MainContentSection;
