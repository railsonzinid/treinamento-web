let titulo = document.querySelector('h1');
titulo.innerHTML = ('Envio de Titulo, Ok!');

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = ('Envio de paragrafo, Ok!');


function soma(numero){

    if (numero > 100)
        return;
        console.log(numero);
        soma(numero + 2)
 
}
soma(1);

/* function exibirNaTela(tag){
    let campo = document.querySelector(tag);
    campo.innerHTML = 'Texto';

}
exibirNaTela('h1'); */