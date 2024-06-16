import Header from "../../components/Header";
import BodyContentSection from "./DetailLatihanFisik/BodyContentSection";
import EndContentSection from "./DetailLatihanFisik/EndContentSection";
import HeaderContentSection from "./DetailLatihanFisik/HeaderContentSection";
import MainContentSection from "./DetailLatihanFisik/MainContentSection";

const DetailLatihanFisikGuest = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col mt-[60px] w-full items-center mb-[100px]">
        <HeaderContentSection />
        <BodyContentSection />
        <MainContentSection />
        <EndContentSection />
      </main>
    </>
  );
};

export default DetailLatihanFisikGuest;
