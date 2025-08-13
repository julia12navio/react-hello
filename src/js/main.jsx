import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbortron';
import Card from './components/card';
import Footer from './components/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className="container flex-grow-1 pb-4">
        <div className="mb-4">
          <Jumbotron />
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <Card
              imagen="https://static.zara.net/assets/public/7b95/508d/643c438cb5ff/f100529cb31f/08220112121-p/08220112121-p.jpg?ts=1753370856432&w=1024"
              titulo="VESTIDO MIDI ESTAMPADO TUL FOULARD"
              descripcion="Vestido midi de escote pico y tirantes finos ajustables. Foulard en mismo tejido. Detalle de frunces. Forro interior combinado. Cierre lateral con cremallera oculta en costura."
              link="https://www.zara.com/es/es/vestido-midi-estampado-tul-foulard-p08220112.html?v1=459972068&v2=2420896"
              linktext="Ver vestido"
            />
          </div>
          <div className="col">
            <Card
              imagen="https://static.zara.net/assets/public/d690/7306/446747f79fb1/53927fb2ff03/08228811712-a1/08228811712-a1.jpg?ts=1753885462041&w=1125"
              titulo="VESTIDO MINI VOLANTES"
              descripcion="Vestido de cuello halter con la espalda descubierta. Bajo asimétrico. Cierre lateral con cremallera oculta en costura y botones en el cuello."
              link="https://www.zara.com/es/es/vestido-mini-volantes-p08228811.html?v1=459530030&v2=2420896"
              linktext="Ver vestido"
            />
          </div>
          <div className="col">
            <Card
              imagen="https://static.zara.net/assets/public/c72e/d1a8/58944eed9ba2/f2337fc7fd08/04661231084-p/04661231084-p.jpg?ts=1753180600376&w=1024"
              titulo="VESTIDO CORTO HALTER LUNARES"
              descripcion="Vestido corto de cuello halter y escote pico. Detalle de lazo en espalda. Forro interior combinado. Cierre lateral con cremallera oculta en costura."
              link="https://www.zara.com/es/es/vestido-corto-halter-lunares-p04661231.html?v1=463170073&v2=2420896"
              linktext="Ver vestido"
            />
          </div>
          <div className="col">
            <Card
              imagen="https://static.zara.net/assets/public/825f/b627/7c544f4396f0/0a41ede9a5c4/04661235429-a1/04661235429-a1.jpg?ts=1753180600580&w=1024"
              titulo="VESTIDO DRAPEADO CAPA"
              descripcion="Vestido largo confeccionado en tejido tipo punto. Cuello subido y manga asimétrica tipo capa y hombro descubierto. Detalle de frunces. Cierre lateral con cremallera lateral oculta en costura y botones en cuello."
              link="https://www.zara.com/es/es/vestido-drapeado-capa-p04661235.html?v1=463739066&v2=2420896"
              linktext="Ver vestido"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </React.StrictMode>,
)
