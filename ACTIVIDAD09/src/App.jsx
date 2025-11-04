import './App.css';
import Card from './components/Card.jsx';
import Galeria from './components/Galeria.jsx';
import Logo from './components/Logo.jsx';
import Titulo from './components/Titulo.jsx';

const imgs = ['vite.svg', 'vite.svg', 'vite.svg', 'vite.svg', 'vite.svg'];

const App = () => {

  return (
    <>
    <header>
      <Logo imgURL="vite.svg" nombre="Actividad 09"></Logo>
      <Titulo nombre="Actividad 09"></Titulo>
    </header>
    <main>
      <Titulo nombre="Creadores Destacados"></Titulo>
      <Card nombre="Danisnotonfire" imagen="vite.svg" desc="test"></Card>
      <Card nombre="AmazingPhil" imagen="vite.svg" desc="test"></Card>
      <Card nombre="dsfdsf" imagen="vite.svg" desc="test"></Card>
      <Titulo nombre="Galería de Imágenes"></Titulo>
      <Galeria imagenes={imgs}></Galeria>
    </main>
    </>
  )
}

export default App
