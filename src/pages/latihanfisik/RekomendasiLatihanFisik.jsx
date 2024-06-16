import Header from "../../components/Headeruser";
import HeroSection from "./LatihanFisik/HeroSection/HeroSection";
import IntroductionSection from "./RekomendasiLatihanFisik/IntroductionSection/IntroductionSection";
import RekomendasiListSection from "./RekomendasiLatihanFisik/IntroductionSection/RekomendasiListSection";

const RekomendasiLatihanFisik = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col mt-[60px] w-full items-center mb-[100px]">
        <HeroSection />
        <IntroductionSection />
        <RekomendasiListSection />
      </main>
    </>
  );
};

export default RekomendasiLatihanFisik;
