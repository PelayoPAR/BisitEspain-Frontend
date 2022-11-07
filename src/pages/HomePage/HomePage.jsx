import ProvinceList from "../../components/ProvinceList/ProvinceList"
import "./HomePage.css"
import HomeMap from "../../components/HomeMap"
import { useState } from "react"

function HomePage({ allProvinces, isError, isLoading }) {
  // For future use in order to link HomeMap and ProvinceList:
  const [highlightedProvince, setHighlightedProvince] = useState(null)

  return (
    <div className="homeMain">
      <div className="provinceList">
        <ProvinceList
          allProvinces={allProvinces}
          isError={isError}
          isLoading={isLoading}
          highlightedProvince={highlightedProvince}
          setHighlightedProvince={setHighlightedProvince}
        />

        <HomeMap
          allProvinces={allProvinces}
          setHighlightedProvince={setHighlightedProvince}
        />
      </div>
    </div>
  )
}

export default HomePage
