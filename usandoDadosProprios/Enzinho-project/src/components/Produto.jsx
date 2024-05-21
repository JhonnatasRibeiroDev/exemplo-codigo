import PropTypes from 'prop-types';
import '../styles/style.produto.css';
function Produto({ produto }) {
    // Verifica se o objeto produto é definido antes de tentar acessar suas propriedades
    if (!produto) {
        return <div>Nenhum produto disponível</div>;
    }

    return (
        <div className='Produto'>
            <img src={produto.imagem} alt={produto.nome} />
            <h2 className='nome'>{produto.nome}</h2>
            <p className='descricao'>{produto.descricao}</p>
            <p className='preco'>{produto.preco}</p>
        </div>
    );
}

Produto.propTypes = {
    produto: PropTypes.object.isRequired,
};

export default Produto;
