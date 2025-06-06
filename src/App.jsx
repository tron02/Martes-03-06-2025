
import './App.css'

function Saludos() {
  return (
    <div>
      <h2>Saludos desde el componente Saludos</h2>
    </div>
  )
}
  
function App(){  

  return (
    <>
      <img src="./react/img/descarga.jpg" className='App-logo' alt='logo'/>
      <h1>Welcome to My App</h1>
      <Saludos/>
    </>
  )
}

export default App
