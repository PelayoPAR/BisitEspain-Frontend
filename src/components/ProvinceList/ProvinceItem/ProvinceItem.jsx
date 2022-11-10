import React from "react";
import "./ProvinceItem.css";

function ProvinceItem({ province, navigate, highlightedProvince }) {
  function isHighlighted() {
    return highlightedProvince === province.name;
  }

  function defineStyle(highlighted) {
    if (highlighted) {
      return { color: "#ff143d" };
    } else {
      return {};
    }
  }

  return (
    <div
      className="provinceName"
      style={defineStyle(isHighlighted())}
      onClick={() => {
        navigate(`/${province._id}`);
      }}
    >
      {province.name}
    </div>
  );
}

export default ProvinceItem;
