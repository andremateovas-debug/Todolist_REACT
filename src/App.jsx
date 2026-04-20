import { useState, useEffect} from 'react'



function Header() {
  return (
    <header>
      <h1>Lista de tareas!</h1>
    </header>
  )
}


// Aqui cree una funcion modificable a futuro para reutilizar css por ejemplo pero modificar texto,
// Cree una funcion Text y agregue una variable modificable ({texto})
// hice un return dentro del parrafo y ya en App eejcute las veces que quiera el Text
// y solo cambie en contenido de texto = "

function Text({texto}) {
  return (
    <p>{texto}</p>

  )
}

//  function lista({tareascontenido}) {
//    return (
//      <ul>
//        <li>{tareascontenido}</li>
//      </ul>
//    )
//  }

// Aqui intente hacer un nuevo componente sobre listas




// ----------------------- //



// Crea un componente llamado Contador que tenga:
// Un número que empiece en 0
// Un botón que diga "Agregar tarea"
// Cada vez que lo clickees, el número sube 1
// Muestra el número en pantalla así: Tareas: 0

function Contador() {
  const [Contador, setTareasiniciales] = useState(0)
  const [Infotarea, setContenidodelatarea] = useState("")
  const [Tareas, setTareas] = useState([])

  useEffect(() => {
      console.log("Tarea agregada: " + Infotarea);
    }, [Tareas]);



  function agregarTarea() {
    setTareasiniciales(Contador + 1)
    setTareas([...Tareas, Infotarea])
    setContenidodelatarea("")
    
  }



  function eliminarTarea(){
  if (Contador > 0) {
    setTareasiniciales(Contador - 1)
    setTareas(Tareas.slice(0, -1))
    }
  else {alert("No hay tareas para eliminar")}
  }
  
  
  
  function reiniciarContador() {
    setTareasiniciales(0)
    setTareas([]) 
  }

  return (
    <section>
    
    <div className = "titulodeldiv" >
    <h2>Panel para aregar tareas</h2>
    </div>
    
    <input type="text" placeholder='Ingrese el nombre de la tarea' value={Infotarea} onChange={(e) => setContenidodelatarea(e.target.value)} />
    <p>Vista previa del contenido: {Infotarea}</p>
    <button onClick={agregarTarea} >Agregar tarea </button> 
    <p></p>

    <button onClick = {reiniciarContador} > Reiniciar contador </button>
    <p></p> 
    <button onClick = {eliminarTarea} > Eliminar tarea mas reciente </button>
    
    <p>Cuantas tareas tienes? : {Contador} </p>
    
    

    <ul>
      {Tareas.map((tarea, index) => (
        <li key={index}>{tarea}</li>
      ))}
    </ul>
    
    </section>
  )

}



//FOOTER

function Footer() {
  return (
    <footer>
      <p>AM Devs</p>
    </footer>
  ) 
}


function App() {
  return (
    <div>
      <Header />
      <Text texto = "Texto editado por primera vez"/>
      <Text texto = "Hola esto es lo mismo pero editado el texto 2da vez"/>
      <Text texto = "APRENDI A HARCODEAR Y REEMPLZAR UN TEXTO VAMOS!!"/>
      <h1> ------------------------------------------------ </h1>
      <Contador />
      <h1> ------------------------------------------------ </h1>
      <Footer />
    </div>
  )
}

export default App