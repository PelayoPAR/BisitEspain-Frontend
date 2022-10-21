import React from "react";

function ProvinceItem({ province, navigate }) {
  return (
    <div
      onClick={() => {
        navigate(`/${province._id}`);
      }}
    >
      {province.name}
    </div>
  );
}

export default ProvinceItem;
