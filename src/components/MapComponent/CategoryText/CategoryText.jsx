import React from "react"

function CategoryText({ category }) {
  return (
    <>
      {category === "Rural" && <p className="ruralTag">{category}</p>}
      {category === "Coastal" && <p className="coastalTag">{category}</p>}
      {category === "Urban" && <p className="urbanTag">{category}</p>}
    </>
  )
}

export default CategoryText
