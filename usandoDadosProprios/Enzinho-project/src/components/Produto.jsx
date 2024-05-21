import PropTypes from 'prop-types';

function Produto({ produto }) {
    // Verifica se o objeto produto é definido antes de tentar acessar suas propriedades
    if (!produto) {
        return <div>Nenhum produto disponível</div>;
    }

    return (
        <div>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
        </div>
    );
}

Produto.propTypes = {
    produto: PropTypes.object.isRequired,
};

export default Produto;
