//import React from 'react';
import Produto from "./Produto";
import produtos from "../data/produtos";
import "../styles/style.listaProdutos.css";

function ListaProdutos() {
  return (
    <div className="listaProdutos">
      {produtos.length>0 ? (
        produtos.map(produto => (
            <Produto
              key={produto.id}
              produto={produto} // Passando o objeto produto como uma propriedade chamada 'produto'
            />
          ))
      ): (
        <div>Nenhum produto disponível</div>
      )}
    </div>
  );
}

export default ListaProdutos;
