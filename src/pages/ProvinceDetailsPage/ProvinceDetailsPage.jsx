import React from "react"
import { useParams } from "react-router-dom"
import MapComponent from "../../components/MapComponent/MapComponent"
import TouristicItem from "../../components/TouristicItem/TouristicItem"

function ProvinceDetailsPage({ allProvinces, isError, isLoading }) {
  const { provinceId } = useParams()

  const singleProvince = allProvinces.filter((province) => {
    return province._id === provinceId
  })

  return (
    <div>
      <h2>{singleProvince[0].name}</h2>

      <div>
        {singleProvince[0].contents.landmarks && (
          <div>
            <h2>Landmarks</h2>
            <ul>
              {singleProvince[0].contents.landmarks.map((landmark) => {
                return <TouristicItem key={landmark._id} itemInfo={landmark} />
              })}
            </ul>
          </div>
        )}
        {singleProvince[0].contents.routes && (
          <div>
            <h2>Routes</h2>
            <ul>
              {singleProvince[0].contents.routes.map((route) => {
                return <TouristicItem key={route._id} itemInfo={route} />
              })}
            </ul>
          </div>
        )}
        <div>
          <MapComponent selectedProvince={singleProvince[0]} />
        </div>
      </div>
    </div>
  )
}

export default ProvinceDetailsPage
