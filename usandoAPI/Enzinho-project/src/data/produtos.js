const localProdutos = [
  { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 10.99, imagem: 'https://img.freepik.com/fotos-premium/fundo-branco-da-fotografia-do-produto-da-garrafa_136558-6926.jpg' },
  { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 20.49, imagem: 'https://img.freepik.com/fotos-premium/fundo-branco-da-fotografia-do-produto-da-garrafa_136558-6926.jpg' },
  { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 15.99, imagem: 'https://img.freepik.com/fotos-premium/fundo-branco-da-fotografia-do-produto-da-garrafa_136558-6926.jpg' },
];

export async function obterProdutos() {
  const API_URL = 'https://b37fee6a-6356-40b7-b182-fb1327fe8778-00-1zlzbd4a9176c.janeway.replit.dev/api/produtos';
  try {
      const response = await fetch(API_URL);
      if (!response.ok) {
          throw new Error('Erro ao obter os produtos da API');
      }
      const produtos = await response.json();
      console.log('Produtos obtidos da API:', produtos);
      return produtos;
  } catch (error) {
      console.error('Erro ao obter os produtos da API, usando dados locais:', error.message);
      return localProdutos;
  }
}

export default localProdutos;
