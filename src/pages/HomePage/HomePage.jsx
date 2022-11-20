import ProvinceList from "../../components/ProvinceList/ProvinceList";
import styles from "./HomePage.module.css";
import HomeMap from "../../components/HomeMap";
import { useState } from "react";

function HomePage({ allProvinces, isError, isLoading }) {
  // For future use in order to link HomeMap and ProvinceList:
  const [highlightedProvince, setHighlightedProvince] = useState(null);

  return (
    <div className={`${styles.homeMain}`}>
      <div className={styles.provinceList}>
        <div className={styles.homeText}>
          <h1 className={styles.homeTitleH1}>Esplore. Esperience. Espain.</h1>

          <ProvinceList
            allProvinces={allProvinces}
            isError={isError}
            isLoading={isLoading}
            highlightedProvince={highlightedProvince}
            setHighlightedProvince={setHighlightedProvince}
          />
        </div>
        <div>
          <HomeMap
            allProvinces={allProvinces}
            setHighlightedProvince={setHighlightedProvince}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
