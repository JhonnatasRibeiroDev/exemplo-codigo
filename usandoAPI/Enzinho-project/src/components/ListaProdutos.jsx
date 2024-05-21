import { useEffect, useState } from 'react';
import Produto from "./Produto";
import { obterProdutos } from "../data/produtos";
import "../styles/style.listaProdutos.css";

function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            const produtosDaApi = await obterProdutos();
            setProdutos(produtosDaApi);
        }
        carregarProdutos();
    }, []);

    return (
        <div className="listaProdutos">
            {produtos.length > 0 ? (
                produtos.map(produto => (
                    <Produto
                        key={produto.id}
                        produto={produto} // Passando o objeto produto como uma propriedade chamada 'produto'
                    />
                ))
            ) : (
                <div>Nenhum produto disponível</div>
            )}
        </div>
    );
}

export default ListaProdutos;
