import React from "react"

function ProvinceItem({ province, navigate, highlightedProvince }) {
  function isHighlighted() {
    return highlightedProvince === province.name
  }

  function defineStyle(highlighted) {
    if (highlighted) {
      return { color: "#ffc107" }
    } else {
      return {}
    }
  }

  return (
    <div
      style={defineStyle(isHighlighted())}
      onClick={() => {
        navigate(`/${province._id}`)
      }}
    >
      {province.name}
    </div>
  )
}

export default ProvinceItem
