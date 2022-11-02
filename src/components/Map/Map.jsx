import useResizeObserver from "./hooks";

import provinces from "./assets/gadm41_ESP_2_TOPO.json";
import { useState, useEffect, useRef, useCallback } from "react";
import { select, geoPath, geoMercator } from "d3";
import * as topojson from "topojson";
import "./Map.css";

const Map = ({ allProvinces }) => {
  // console.log(allProvinces);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [geoData, setGeoData] = useState(null);

  const colorProvinces = useCallback(
    (feature) => {
      const featureName = feature.properties.NAME_2;
      const provinceHasContent = allProvinces.findIndex((province) => {
        return province.name === featureName;
      });
      return provinceHasContent !== -1 ? "green" : "gray";
    },
    [allProvinces]
  );

  useEffect(() => {
    setGeoData(topojson.feature(provinces, provinces.objects.adminRegions));
  }, []);

  useEffect(() => {
    if (!geoData) return;
    if (!dimensions) return;

    const { width, height } = dimensions;

    const svg = select(svgRef.current);
    const regionContainer = svg
      .selectAll(".regionContainer")
      .data(["region container"])
      .join("g")
      .attr("class", "regionContainer");

    const projection = geoMercator()
      .fitSize([width, height], geoData)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);

    // console.log(geoData);

    regionContainer
      .selectAll(".administrativeRegion")
      .data(geoData.features)
      .join("path")
      .attr("class", "administrativeRegion")
      .attr("d", (feature) => pathGenerator(feature))
      .attr("fill", colorProvinces)
      .attr("stroke", "white")
      .on("mouseover", async function (event, feature) {
        window.document.querySelector(".regionContainer").appendChild(this);
        select(this)
          .style("fill", "red")
          .transition(500)
          .style("transform", "translateX(-10px)");
      })
      .on("mouseout", function (event, feature) {
        select(this)
          .style("fill", colorProvinces)
          .transition(500)
          .style("transform", "translateX(0px)");
      });
    // .on("click", function( event, feature) {
    //  remember to import
    //   find(feature.properties.NAME_2) === allProvinces.name
    //   navigate
    // })
    // Homepage highlightedProvince state variable will be used to link the map with the provinceList
  }, [geoData, dimensions, colorProvinces]);

  // function to
  const viewBoxCoords = ({ width, height }) => {
    const coefs = [0.3, 0, 0.8, 0.6];
    return `
          ${width * coefs[0]} 
          ${height * coefs[1]} 
          ${width * coefs[2]} 
          ${height * coefs[3]}
    `;
  };

  return (
    <div
      ref={wrapperRef}
      style={{ marginBottom: "2rem", transform: "skewX(-10deg)" }}
      className="mapWrapper"
    >
      {dimensions ? (
        <svg
          className="mapCanvas"
          ref={svgRef}
          viewBox={viewBoxCoords(dimensions)}
        ></svg>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
};

export default Map;
