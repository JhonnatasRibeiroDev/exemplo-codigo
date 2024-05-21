<h1>Aplicação de Listagem de Produtos</h1>

<p>Esta é uma aplicação React que lista produtos a partir de uma API REST. Caso a API não esteja disponível, os dados locais são utilizados como fallback.</p>
<h2>Link para API</h2>
<pre>https://b37fee6a-6356-40b7-b182-fb1327fe8778-00-1zlzbd4a9176c.janeway.replit.dev/api/produtos</pre>
<h2>Funcionalidades</h2>
<ul>
  <li>Exibe uma lista de produtos com nome, descrição, preço e imagem.</li>
  <li>Tenta obter os dados de produtos de uma API REST. Caso a API não esteja disponível, utiliza dados locais.</li>
  <li>Estrutura e organização de componentes em React.</li>
  <li>Estilos aplicados via CSS.</li>
</ul>

<h2>Dependências</h2>
<pre class="copyable">npm install react react-dom</pre>
<pre class="copyable">npm install cors</pre>
<h2>Verifique as Dependências</h2>
<h2>Estrutura do Projeto</h2>

<pre>
  /
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── data/
  │   ├── styles/
  │   ├── App.js
  │   ├── index.js
  ├── package.json
  ├── README.md
</pre>
<pre>
  src/
|-- components/
|   |-- Produto.js
|   |-- ListaProdutos.js
|   |-- PaginaInicial.js
|-- data/
|   |-- produtos.js
|-- App.js

</pre>

<h2>Instalação</h2>

<ol>
  <li>Clone o repositório para o seu ambiente local.</li>
  <pre class="copyable">git clone https://github.com/seuusuario/seurepositorio.git
  cd seurepositorio</pre>
  
  <li>Instale as dependências do projeto.</li>
  <pre class="copyable">npm install</pre>
  
  <li>Inicie o servidor de desenvolvimento.</li>
  <pre class="copyable">npm start</pre>
</ol>

<p>A aplicação estará rodando em <code>http://localhost:5173</code>.</p>

<h2>Contribuição</h2>

<p>Se você deseja contribuir com este projeto, siga as etapas abaixo:</p>

<ol>
  <li>Faça um fork do repositório.</li>
  <li>Crie uma nova branch com suas modificações: <code>git checkout -b minha-feature</code></li>
  <li>Faça commit das suas alterações: <code>git commit -m 'Minha nova feature'</code></li>
  <li>Faça push para a branch: <code>git push origin minha-feature</code></li>
  <li>Envie um pull request.</li>
</ol>
