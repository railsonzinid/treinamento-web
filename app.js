let titulo = document.querySelector('h1');
titulo.innerHTML = ('Envio de Titulo, Ok!');

/* let paragrafo1 = document.getElementById('paragrafo-trabalho')
paragrafo1.innerHTML = 'Envio de paragrafo area trabalho, Ok!';

let paragrafo2 = document.getElementById('paragrafo-usuario')
paragrafo2.innerHTML = 'Envio de paragrafo do usuario, Ok!'; */

function exibirParagrafoNaTela(id, texto){
    console.log(id, texto);
    let paragrafo = document.getElementById(id)
    paragrafo.innerText = texto;
}
exibirParagrafoNaTela( 'paragrafo-usuario', 'Ola, Railson');
exibirParagrafoNaTela( 'paragrafo-trabalho', 'Calculo de dois numetos:');

function calcularDoblo(){
    let n1 = document.getElementById('numero1').value;
    n1 = Number(n1);
    doblo = n1 * 2;
    document.getElementById('resultado').innerText = `O dobro de ${n1} é ${doblo}`  
   
}

function calcularMedia(){
    let n1 = Number(document.getElementById('numero1').value);
    let n2 = Number(document.getElementById('numero2').value);
    let n3 = Number(document.getElementById('numero3').value);

    if(isNaN(n1)||isNaN(n2)||isNaN(n3)){
        document.getElementById('media').innerHTML = 'Você digitou um valor invalido, tente novamente.';
        return;
    }

    let media = (n1+n2+n3)/3;

        document.getElementById('media').innerHTML = `A médio dos numeros digitados é ${media.toFixed(2)}`; 

    console.log(media);
}




/* function exibirNaTela(tag){
    let campo = document.querySelector(tag);
    campo.innerHTML = 'Texto';

}
exibirNaTela('h1'); */