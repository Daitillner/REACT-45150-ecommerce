import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label>123123123</label>
            <i className='fa fa-envelope'></i>
            <label>tillnerdaiana@gmail.com</label>
          </div>
          <div className='right row RText'>
            <label>Preguntas frecuentes</label>
            <label>Ayuda?</label>
            <span>🏳️‍🌈</span>
            <label>ES</label>
            <span>🏳️‍⚧️</span>
            <label>ARS</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
