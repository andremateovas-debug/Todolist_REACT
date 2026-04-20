import { useState, useEffect} from 'react'



function Header() {
  return (
    <header className='rounded-lg border-2 border-black bg-white p-7 text-center text-black text-5xl font-bold m-3'>
      <h1 className=''>Lista de tareas!</h1>
    </header>
  )
}


// ESTILOS: bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer font-medium

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
    if (Infotarea.trim() === "") {
      alert("No es posible ingresar una tarea vacia");
      return;
    }
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
    <section className='rounded-lg border-black-500 border-2 bg-white p-4 m-4 text-left container mx-auto max-w-lg'>
    
      <div className='text-left text-white text-2xl font-bold mb-4 p-3 pl-3 '>
        <h2 className='text-black '>Panel para agregar tareas</h2>
      </div>
      
      <input className='border-1 rounded-lg pl-9 pr-9 w-100'type="text" placeholder='Ingresar el nombre de la tarea/contenido' value={Infotarea} onChange={(e) => setContenidodelatarea(e.target.value)} />
      
      <p className='p-3'>Vista previa del contenido: {Infotarea}</p>
      
      <button className='border-1 bg-green-300 rounded-lg pl-9 pr-9 w-70 p-2 mt-1' onClick={agregarTarea} >Agregar tarea </button> 
      <p></p>

      <button className='border-1 bg-red-300 rounded-lg pl-9 pr-9 w-70 p-2 mt-3' onClick = {reiniciarContador} > Reiniciar contador </button>
      <p></p> 
      <button className='border-1 bg-yellow-300 rounded-lg pl-9 pr-9 w-100 p-2 mt-3' onClick = {eliminarTarea} > Eliminar tarea mas reciente </button>
      
      <p className='border-1 rounded-lg pl-9 pr-9 w-100 mt-5'>Cantidad de tareas actuales: {Contador} </p>
      
      

      <ul className='border-1 rounded-lg pl-9 pr-9 w-100 mt-5'>
        {Tareas.map((tarea, index) => (
          <li key={index}> {index} - {tarea}</li>
        ))}
      </ul>
      
    </section>
  )

}



//FOOTER

function Footer() {
  return (
    <footer className='bg-black text-white text-center p-4'>
      <p>AM Devs - Andre Mateo Vasquez Mosqueda</p>
    </footer>
  ) 
}




function App() {
  return (
    <section className='bg-blue-100 min-h-screen flex flex-col justify-between'>
      <Header />
      <Contador />
      <Footer />
    </section>
  )
}

export default App