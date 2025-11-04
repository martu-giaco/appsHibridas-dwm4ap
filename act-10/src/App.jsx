import './App.css';
import Contenedor from './components/contenedor.jsx';
import Card from './components/Card.jsx';
import Titulo from './components/Titulo.jsx';


const App = () => {

  return (
    <>
    <main>
      <Titulo nombre="Creadores Destacados"></Titulo>
      <Contenedor>
          <Card nombre="Danisnotonfire" imagen="vite.svg" desc="Creador de contenido" />
          <Card nombre="AmazingPhil" imagen="vite.svg" desc="Creador de contenido" />
          <Card nombre="Otro Creador" imagen="vite.svg" desc="Creador de contenido" />
      </Contenedor>
    </main>
    </>
  )
}

export default App
