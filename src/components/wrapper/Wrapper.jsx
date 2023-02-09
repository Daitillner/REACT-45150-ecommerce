import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Envíos a todo el país",
      decs: "excepto a Garín porque los de ahí me caen mal",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Pagá seguro",
      decs: "Descuento en efectivo así no nos agarra la afip",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Comprá con confianza!",
      decs: "O no, soy un cartel.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "soporte las 24 horas",
      decs: "jajaja claro",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
