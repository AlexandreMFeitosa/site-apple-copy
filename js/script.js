
const bVerde = document.querySelector(".btn-verde");
const fotoCelular = document.querySelector("#celular");
const bPrateado = document.querySelector(".btn-prateado");
const bDourado = document.querySelector(".btn-dourado");
const bGrafite = document.querySelector(".btn-grafite");
const bAzul = document.querySelector(".btn-azul");


bVerde.addEventListener("click" , () => {

    fotoCelular.src = "imagens/iphone_green.jpg" ;

});

bPrateado.addEventListener("click" , () => {

    fotoCelular.src = "imagens/iphone_silver.jpg" ;

});

bDourado.addEventListener("click" , () => {

    fotoCelular.src = "imagens/iphone_golden.jpg" ;

});

bGrafite.addEventListener("click" , () => {

    fotoCelular.src = "imagens/iphone_grafite.jpg" ;

});

bAzul.addEventListener("click" , () => {

    fotoCelular.src = "imagens/iphone_blue.jpg" ;

});



