import React from "react"
import ProvinceItem from "./ProvinceItem/ProvinceItem"
import { useNavigate } from "react-router-dom"

function ProvinceList({ allProvinces, isError, isLoading }) {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Province List</h2>
      <ul>
        {allProvinces.map((province) => {
          return (
            <ProvinceItem
              province={province}
              key={province._id}
              navigate={navigate}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ProvinceList
