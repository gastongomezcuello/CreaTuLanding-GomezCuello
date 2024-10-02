
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return(
    <>
      <header>
        <NavBar />
      </header> 
      <main>
        <ItemListContainer info="Bienvenidos a Socratech, Aqui podrás visualizar nuestros productos" />
      </main> 
    </> 
  )
}

export default App

