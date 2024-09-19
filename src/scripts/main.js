document.addEventListener('DOMContentLoaded', function() {

    const pegadinha = document.querySelector(".question-subtitle");
    const fraseInicial = "Dá muitas voltas e não sai do lugar.";

    pegadinha.innerHTML = fraseInicial;

    pegadinha.addEventListener('click', clicar)
    pegadinha.addEventListener('mouseenter', entrar)
    pegadinha.addEventListener('mouseout', sair)

        function entrar(){
            pegadinha.innerHTML = "Clique para ver a resposta!"
            pegadinha.style.background = '#000'
            pegadinha.style.color = '#fff'
        }
        function clicar(){
            pegadinha.innerHTML = "O relógio!"
            pegadinha.style.background = '#ff4d4d'
        }
        function sair(){
            pegadinha.innerHTML = fraseInicial;
            pegadinha.style.background = '';
            pegadinha.style.color = '';
        }
})