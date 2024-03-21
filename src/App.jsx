import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  const saludo = {
    lunes: "Bienvenidos a Comprame, el geek Commerce que necesitabas!",
    martes: "Bienvenidos a mi ecommerce"
  }
  return (
      <div>
        <NavBar />             {/* Invocar */}
        <ItemListContainer saludo = { saludo } />  {/* Invocar */}

      </div>
  )
}

export default App
