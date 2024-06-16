
const EndContentSection = () => {
  return (
    <section className="w-[1148px] h-[188px] flex items-center gap-8 pl-12 rounded-xl shadow-300">
      <h1 className="w-[249px] text-[32px] font-bold font-sans text-[#2C7865]">
        Bingung dengan Gerakanmu?
      </h1>
      <p className="w-fit text-[21px] text-[#0F2A23] text-justify">
        Jika Anda kebingungan tentang cara melakukan gerakan <br />
        dengan benar, jangan khawatir! Anda dapat menemukan <br />
        panduan visual melalui tutorial video di YouTube.
      </p>
      <button
        className="size-fit w-[168px] py-[10px] px-6 rounded-[24px] bg-[#FF9800] text-[15px] font-sans font-bold"
        onClick={() => window.location.href = 'https://youtu.be/J8RZliDvRJM?si=_4kvBamNI9kRWBeb/'}
      >
        Lihat Disini
      </button>
    </section>
  );
};

export default EndContentSection;
