import './App.css';
import ListaProdutos from './components/ListaProdutos';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <section className='banner'>
      </section>
      <section className='descricao'>
        <h2>Descrição</h2>
        <p>Enzinho é um projeto de exemplo</p>
      </section>
      <div className="paginaProdutos">
        <h1>Produtos</h1>
        <ListaProdutos />
      </div>
      <footer>
        <p>Jhonnatas Ribeiro - Todos os direitos reservados</p>
      </footer>
    </div>
  )
} export default App;