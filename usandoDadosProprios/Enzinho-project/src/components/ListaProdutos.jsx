//import React from 'react';
import Produto from "./Produto";
import produtos from "../data/produtos";

function ListaProdutos() {
  return (
    <div className="lista-produtos">
      {produtos.map(produto => (
        <Produto
          key={produto.id}
          produto={produto} // Passando o objeto produto como uma propriedade chamada 'produto'
        />
      ))}
    </div>
  );
}

export default ListaProdutos;
