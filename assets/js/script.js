'use strict';

// Função de alternância de elemento
const elementoToggleFunc = function (elem) {elem.classList.toggle("active");}

// Variáveis da Barra lateral
const barraLateral = document.querySelector("[data-sidebar]");
const barraLateralBtn = document.querySelector("[data-sidebar-btn]");

// Funcionalidade de alternância da barra lateral para dispositivos móveis

barraLateralBtn.addEventListener("click", function () {elementoToggleFunc(barraLateral);});

// Variáveis da Paleta de Cores
const paletaItem = document.querySelectorAll("[data-paleta-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variáveis da Modal da Paleta de Cores
const modalImg = document.querySelector("[data-modal-img]");
const modalTitulo = document.querySelector("[data-modal-titulo]");
const modalTexto = document.querySelector("[data-modal-texto]");

// Função de alternância da modal
const paletaModalFunc = function (){
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Adicionar evento de clique à todas as modais
for (let i = 0; i < paletaItem.length; i++){
  
  paletaItem[i].addEventListener("click", function () {
    
    modalImg.src = this.querySelector("[data-paleta-image]").src;
    modalImg.alt = this.querySelector("[data-paleta-image]").alt;
    modalTitulo.innerHTML = this.querySelector("[data-paleta-titulo]").innerHTML;
    modalTexto.innerHTML = this.querySelector("[data-paleta-texto]").innerHTML;
    
    paletaModalFunc();
  })
}

// Adicionar evento de clique ao botão de fechamento modal

modalCloseBtn.addEventListener("click", paletaModalFunc);
overlay.addEventListener("click", paletaModalFunc);
// Variáveis de seleção personalizadas
const select = document.querySelector("[data-select]");
const selectItens = document.querySelectorAll("[data-select-item]");
const selectValor = document.querySelector("[data-select-valor]");
const filtroBtn = document.querySelectorAll("[data-filter-btn]");

// Alternância da caixa de seleção
select.addEventListener("click", function() {
  elementoToggleFunc(this);
});

// Adicionar evento a todos os itens do select
for (let i = 0; i < selectItens.length; i++) {
  selectItens[i].addEventListener("click", function () {

    let selectedValor = this.innerText.toLowerCase();
    selectValor.innerText = this.innerText;

    elementoToggleFunc(select);
    filtroFunc(selectedValor);
  });
}

// Variáveis de filtro
const filtrosItens = document.querySelectorAll("[data-filter-item]");

// Função de filtragem
const filtroFunc = function(selectedValor) {
  for (let i = 0; i < filtrosItens.length; i++) {

    const categoria = filtrosItens[i].dataset.category.toLowerCase();

    if (selectedValor === "todos" || selectedValor === categoria) {
      filtrosItens[i].classList.add("active");
    } else {
      filtrosItens[i].classList.remove("active");
    }
  }
};

// Adicionar evento em todos os itens do botão de filtro para tela grande
let lastClickedBtn = filtroBtn[0];

for (let i = 0; i < filtroBtn.length; i++){
  filtroBtn[i].addEventListener("click", function(){
    let selectedValor = this.innerText.toLowerCase();
    selectValor.innerText = this.innerText;
    filtroFunc(selectedValor);
    
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Variáveis de navegação de página
const navegacaoLinks = document.querySelectorAll("[data-nav-link]");
const paginas = document.querySelectorAll("[data-page]");

// Adicionar evento a todos os links de navegação
for (let i = 0; i < navegacaoLinks.length; i++){
  navegacaoLinks[i].addEventListener("click", function () {
    
    for (let i = 0; i < paginas.length; i++){
    
      if (this.innerHTML.toLowerCase() === paginas[i].dataset.page){
        paginas[i].classList.add("active");
        navegacaoLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      }else{
        paginas[i].classList.remove("active");
        navegacaoLinks[i].classList.remove("active");
      }
    }
  });
}
