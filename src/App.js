//import './App.css';
import "./assets/css/App.css"
import datosLocal from "./datos/datos.js"

import Entrada from "./components/Entrada"
import Modal from "./components/Modal"

//console.log(datosLocal)
console.clear()

function App() {
  return (
    <div>
      <section className="entradas">
        <Entrada datos={datosLocal}/>
      </section>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
