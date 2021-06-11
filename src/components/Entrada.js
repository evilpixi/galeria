import React from 'react'
/*
class Entrada extends Component {
  render() { 

    return datos.map(dato => { return (
    <div>
      <div className="entrada">
        hola, soy un componente react :D
        <br></br><br></br>
        <img src={dato.imagen}></img>
        <div className="entradaTitulo">{dato.titulo}</div>
        <div className="entradaDescripcion">{dato.descripcion}</div>
        {
          dato.tags.map((tag) => {
            return (<span className="hashtag">#{tag} </span>)
          })
        }
      </div>
    </div>
    )})
  }
}*/

let Entrada = (props) => {
  return props.datos.map(dato => { return (
    <div className="entrada">
      <div className="imgContainer">
        <img src={dato.imagen} alt={`imagen ${dato.imagen}`}></img>
        <div className="seeFullOverlay" onPointerDown={pix}>
          <div className="seeFullText">Click to<br />see full</div>
        </div>
      </div>
      
      <div className="entradaTitulo">{dato.titulo}</div>
      <div className="entradaDescripcion">{dato.descripcion}</div>
      {
        dato.tags.map((tag) => {
          return (<span className="hashtag">#{tag} </span>)
        })
      }
    </div>
  )})
}

let pix = ()=> {
  console.log("pix")
}

export default Entrada