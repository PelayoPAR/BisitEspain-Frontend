import ProvinceList from "../../components/ProvinceList/ProvinceList";
import "./HomePage.css";
import HomeMap from "../../components/Map";
// import { useState } from "react";

function HomePage({ allProvinces, isError, isLoading }) {
  // For future use in order to link HomeMap and ProvinceList
  // const [highlightedProvince, setHighlightedProvince] = useState(null);

  return (
    <div className="homeMain">
      <div className="provinceList">
        <ProvinceList
          allProvinces={allProvinces}
          isError={isError}
          isLoading={isLoading}
        />
        <HomeMap allProvinces={allProvinces} />
      </div>
    </div>
  );
}

export default HomePage;
