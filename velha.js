var jogador, vencedor = null;

/*variáveis criadas, cada variável representa um id*/
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

/*o primeiro valor que vai iniciar é o X*/
mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    /*variável criada que representa o id*/
    var quadrado = document.getElementById(id);

    /*se o quadrado for diferente do traço, significa que ele não pode trocar o seu valor*/
    if (quadrado.innerHTML !== '-') {
        return;
    }

    /*vai pegar todo o conteúdo do jogador*/
    quadrado.innerHTML = jogador;

    /*cor do quadrado*/
    quadrado.style.color = '#000';

    /*quando clicar no X vai mudar para O e quando for O vai mudar para X*/
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    /*vai passar essa lógica para mudarJogador*/
    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(valor) {
    /*jogador recebe o valor*/
    jogador = valor;

    /*o jogadorSelecionado vai receber o conteúdo do jogador*/
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    /*pegando todos os quadrados*/
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    /*se a sequência for igual, vai mudar a cor dos quadrados e vai retornar um vencedor*/
    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
    }
}

function mudarVencedor(quadrado) {
    /*vai mudar o conteúdo do vencedor, vai receber o conteúdo do quadrado vencedor*/
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    /*vai mudar a cor de fundo dos quadrados*/
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    /*se o conteúdo do quadrado 1, 2 e 3 forem iguais e o conteúdo do quadrado 1 for diferente do traço significa que é true*/
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar()
{
    /*quando reiniciar o jogo não vai ter vencedor*/
    vencedor = null;

    /*vai remover o vencedor*/
    vencedorSelecionado.innerHTML = '';

    /*vai começar com 1 e vai executar até 9*/
    for (var i = 1; i <= 9; i++) {
        /*vai fazer isso para cada quadrado*/
        var quadrado = document.getElementById(i);

        /*vai mudar a cor de fundo*/
        quadrado.style.background = '#eee';

        /*vai mudar a cor do texto*/
        quadrado.style.color = '#eee';

        /*vai mudar o conteúdo do quadrado*/
        quadrado.innerHTML = '-';
    }

    /*jogador vai começar com X*/
    mudarJogador('X');
}