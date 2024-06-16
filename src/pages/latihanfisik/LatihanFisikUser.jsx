import { useParams } from "react-router-dom";
import Header from "../../components/Headeruser";
import FindGymSection from "./LatihanFisik/FindGymSection/FindGymSection";
import HeroSection from "./LatihanFisik/HeroSection/HeroSection";
import HowImportantSection from "./LatihanFisik/HowImportantSection/HowImportantSection";
import PhysicalTrainingGoalsSection from "./LatihanFisik/PhysicalTrainingGoalsSection/PhysicalTrainingGoalsSection";
import RecommendationGymSection from "./LatihanFisik/RecommendationGymSection/RecommendationGymSection";
import RecommendationPhysicalSection from "./LatihanFisik/RecommendationPhysicalSection/RecommendationPhysicalSection";

const LatihanFisik = () => {
  const activeNav = "latihanfisik";
  const name = "username";

  return (
    <>
      <Header name={name} activeNav={activeNav} />

      <main className="flex flex-col mt-[60px] w-full items-center mb-[100px]">
        <HeroSection />
        <HowImportantSection />
        <PhysicalTrainingGoalsSection />
        <RecommendationPhysicalSection />
        <FindGymSection />
        <RecommendationGymSection />
      </main>
    </>
  );
};

export default LatihanFisik;
