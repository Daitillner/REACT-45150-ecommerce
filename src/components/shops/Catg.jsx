import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/tipo-fuego.png",
      cateName: "Fuego",
    },
    {
      cateImg: "./images/category/tipo-planta.png",
      cateName: "Planta",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>tipo </h1>
          <h1>rareza </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Ver todos los tipos</button>
        </div>
      </div>
    </>
  )
}

export default Catg
