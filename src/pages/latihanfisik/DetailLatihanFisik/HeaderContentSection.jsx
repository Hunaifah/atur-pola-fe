import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HeaderContentSection = () => {
  const [isFav, setIsFav] = useState(false);

  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <section className="flex flex-col gap-[30px] text-black w-[1136px]">
      <div className="text-sm breadcrumbs text-[#0F2A23]">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Latihan Fisik</a>
          </li>
          <li className="font-semibold">
            Latihan Cardio Intensif: HIIT Berbasis Lantai
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <h1 className="text-[62px] font-bold text-[#2C7865]">
          Latihan Cardio Intensif: HIIT Berbasis Lantai
        </h1>
        <FontAwesomeIcon
          onClick={handleFav}
          icon={isFav ? heartSolid : faHeart}
          className="cursor-pointer size-[47px] text-[#FF9800]"
        />
      </div>
    </section>
  );
};

export default HeaderContentSection;
