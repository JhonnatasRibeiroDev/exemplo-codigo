import './App.css';
import ListaProdutos from './components/ListaProdutos';
function App() {
  return (
    <div>
      <h1>Enzinho</h1>
      <p>Enzinho é um projeto de um site de notícias que tem como objetivo informar sobre os acontecimentos do mundo de forma rápida e prática.</p>
      <div className="pagina-inicial">
        <h1>Produtos</h1>
        <ListaProdutos/>
      </div>
    </div>
  )
} export default App;