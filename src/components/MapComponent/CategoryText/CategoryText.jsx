import React from "react"

function CategoryText({ category }) {
  return (
    <>
      {category === "Rural" && <p style={{ color: "green" }}>{category}</p>}
      {category === "Coastal" && (
        <p style={{ color: "dodgerblue" }}>{category}</p>
      )}
      {category === "Urban" && <p style={{ color: "#ffc107" }}>{category}</p>}
    </>
  )
}

export default CategoryText
