const inputItem = document.getElementById("inputItem");
const inputQuantidade = document.getElementById("inputQuantidade");
const inputPreco = document.getElementById("inputPreco");
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const lista = document.getElementById("lista").getElementsByTagName('tbody')[0];

let listaItems = [];

const redesenhaLista = (lista, listaItems) => {
  lista.innerHTML = "";
  for (let index = 0; index < listaItems.length; ++index) {
    const itemText = document.createTextNode(listaItems[index].descricao);
    const qtdText = document.createTextNode(listaItems[index].qtd);
    const precoText = document.createTextNode(listaItems[index].preco);
    
    const listItem = document.createElement("tr");
    
    const descricaoItem = document.createElement("td");
    descricaoItem.appendChild(itemText);
    
    const qtdItem = document.createElement("td");
    qtdItem.appendChild(qtdText);
    
    const precoItem = document.createElement("td");
    precoItem.appendChild(precoText);
    
    listItem.appendChild(descricaoItem);
    listItem.appendChild(qtdItem);
    listItem.appendChild(precoItem);
    
    lista.appendChild(listItem);
  }
};

const handleBtAdicionarClick = () => {
  const item = inputItem.value;
  const qtd = inputQuantidade.value;
  const preco = inputPreco.value;
  
  if (!item) {
    alert("Necessário digitar um item!");
    return;
  }
  
  listaItems.push({descricao: item, qtd: qtd, preco: preco});
  
  inputItem.value = "";
  inputQuantidade.value = "";
  inputPreco.value = "";
  
  inputItem.focus();
  
  redesenhaLista(lista, listaItems);
};

const handleBtLimparClick = () => {
  listaItems = [];
  lista.innerHTML = "";
  
  inputItem.focus();
};

btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;