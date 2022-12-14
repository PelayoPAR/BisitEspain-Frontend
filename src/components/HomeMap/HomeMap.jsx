import useResizeObserver from "./hooks";

import provinces from "./assets/gadm41_ESP_2_TOPO.json";
import { useEffect, useRef, useMemo } from "react";
import { select, geoPath, geoMercator } from "d3";
import * as topojson from "topojson";
import "./HomeMap.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Map = ({ allProvinces, setHighlightedProvince }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const navigate = useNavigate();

  const baseGeoData = topojson.feature(
    provinces,
    provinces.objects.adminRegions
  );

  const geoData = useMemo(() => {
    const provinceHasContent = (feature) => {
      const featureName = feature.properties.NAME_2;
      const provinceHasContent = allProvinces.findIndex((province) => {
        return province.name === featureName;
      });
      return provinceHasContent === -1 ? false : true;
    };
    return {
      ...baseGeoData,
      features: baseGeoData.features.map((province) => {
        province.properties.hasContent = provinceHasContent(province);
        province.properties.color = province.properties.hasContent
          ? "#ffc107"
          : "gray";
        return province;
      }),
    };
  }, [baseGeoData, allProvinces]);

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

    const overlayRegionContainer = svg
      .selectAll(".overlayRegionContainer")
      .data(["overlay region container"])
      .join("g")
      .attr("class", "overlayRegionContainer");

    const projection = geoMercator()
      .fitSize([width, height], geoData)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);

    regionContainer
      .selectAll(".administrativeRegion")
      .data(geoData.features)
      .join("path")
      .attr(
        "class",
        (feature) => `administrativeRegion ${feature.properties.NAME_2}`
      )
      .attr("d", (feature) => pathGenerator(feature))
      .attr("fill", (feature) => feature.properties.color)
      .attr("stroke", "white")
      .style("cursor", (feature) =>
        feature.properties.hasContent ? "pointer" : "default"
      );

    overlayRegionContainer
      .selectAll(".overlayRegion")
      .data(geoData.features)
      .join("path")
      .attr("class", "overlayRegion")
      .attr("d", (feature) => pathGenerator(feature))
      .attr("fill", "transparent")
      .attr("stroke", "transparent")
      .style("cursor", (feature) =>
        feature.properties.hasContent ? "pointer" : "default"
      )
      .on("mouseover", function (event, feature) {
        const thisRegion = window.document.querySelector(
          `.${feature.properties.NAME_2}`
        );
        window.document
          .querySelector(".regionContainer")
          .appendChild(thisRegion);
        select(`.${feature.properties.NAME_2}`)
          .style("fill", "#ff143d")
          .transition(500)
          .style("transform", "translateX(-10px)");
        setHighlightedProvince(feature.properties.NAME_2);
      })
      .on("mouseout", function (event, feature) {
        select(`.${feature.properties.NAME_2}`)
          .style("fill", (feature) => feature.properties.color)
          .transition(500)
          .style("transform", "translateX(0px)");
        setHighlightedProvince("");
      })
      .on("click", function (event, feature) {
        if (feature.properties.hasContent) {
          const matchedProvince = allProvinces.find((province) => {
            return province.name === feature.properties.NAME_2;
          });
          navigate(`/${matchedProvince._id}`);
        } else {
          return;
        }
      });
  }, [geoData, dimensions, allProvinces, navigate, setHighlightedProvince]);

  const viewBoxCoords = ({ width, height }) => {
    const coefs = [0.28, 0, 0.72, 0.55];
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

export default React.memo(Map);
