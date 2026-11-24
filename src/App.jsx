import Hero from "./components/Hero/Hero.jsx"
import Header from "./components/Header/Header"
import { perfil } from "./data/perfil.js"
import Footer from "./components/Footer/Footer.jsx"
import Secao from './components/Secao/Secao.jsx'
import Perfil from './components/Perfil/Perfil.jsx'

function App() {

  return (
    <>
      <Header usuario={perfil.usuario} />
      <main>
        <Hero
          nome={perfil.nome}
          cargo={perfil.cargo}
          resumo={perfil.resumo}
          cidade={perfil.cidade}
        />
        
        <Secao>
          <p className="etiqueta-secao">01 / sobre</p>
          <h2 className="secao__titulo">Sou davi</h2>
          <div className="sobre">
            <Perfil
              nome={perfil.nome}
              cidade={perfil.cidade}
              resumo={perfil.resumo}
            />
          </div>
        </Secao>
      </main>
      <Footer nome={perfil.nome} email={perfil.email} />
    </>
  )
}
export default App
