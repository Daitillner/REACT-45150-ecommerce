import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>PokeStore</h1>
            <p>lorem</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Sobre nosotros</h2>
            <ul>
              <li>bla bla bla</li>
              <li>viriviriviri</li>
              <li>lorem1</li>
              <li>lorem2</li>
              <li>lorem3</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Centro de atención</h2>
            <ul>
              <li>lorem1</li>
              <li>lorem2</li>
              <li>lorem3</li>
              <li>lorem4</li>
              <li>lorem5</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contacto</h2>
            <ul>
              <li>Calle falsa 123</li>
              <li>email: tillnerdaiana@gmail.com</li>
              <li>teléfono: 1111122222</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
