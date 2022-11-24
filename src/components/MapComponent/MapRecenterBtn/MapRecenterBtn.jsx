import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

function MapRecenterBtn({ selectedProvince, viewport, setViewport }) {
  const handleClick = () => {
    setViewport({
      longitude: selectedProvince.center.longitude,
      latitude: selectedProvince.center.latitude,
      zoom: 8.5,
    });
  };

  return (
    <button
      className="recenterButton"
      style={{ position: "relative", top: "20px", left: "49%", zIndex: 500 }}
      onClick={handleClick}
    >
      <CenterFocusStrongIcon />
      {/* <p>Center Map</p> */}
    </button>
  );
}

export default MapRecenterBtn;
