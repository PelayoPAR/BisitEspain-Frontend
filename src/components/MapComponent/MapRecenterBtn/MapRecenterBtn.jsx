import React from "react"

function MapRecenterBtn({ selectedProvince, viewport, setViewport }) {
  const handleClick = () => {
    setViewport({
      longitude: selectedProvince.center.longitude,
      latitude: selectedProvince.center.latitude,
      width: "100vw",
      height: "100vh",
      zoom: 8.5,
    })
  }

  return (
    <button
      className="recenterButton"
      style={{ position: "relative", top: "20px", left: "40%", zIndex: 500 }}
      onClick={handleClick}
    >
      Back to Center
    </button>
  )
}

export default MapRecenterBtn
