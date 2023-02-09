import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/top/category-1.png",
      cateName: "Singles",
    },
    {
      cateImg: "./images/top/category-2.png",
      cateName: "Sellado",
    },
    {
      cateImg: "./images/ctop/category-3.png",
      cateName: "Graduadas",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
