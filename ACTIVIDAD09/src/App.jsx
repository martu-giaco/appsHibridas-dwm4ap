import './App.css'
import Card from './components/Card'
import Galeria from './components/Galeria'
import Logo from './components/Logo'
import Titulo from './components/Titulo'

function App() {


  return (
    <>
    <header>
      <Logo imgURL="vite.svg" nombre="Actividad 09"></Logo>
      <Titulo nombre="Actividad 09"></Titulo>
    </header>
    <main>
      <Titulo nombre="Galería de Imágenes"></Titulo>
      <Galeria></Galeria>
      <Card nombre="Mar" imagen="vite.svg" desc="test"></Card>
    </main>
    </>
  )
}

export default App
