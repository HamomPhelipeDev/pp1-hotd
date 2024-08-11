// dar um jeito de pegar o elemento HTML dis botões
const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes");

// identificar o clique do usuário
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

// desmarcar botão selecionado
        desativarBotaoSelecionado();

// marcar o botao clicado como se estivesse selecionado
        marcarBotaoSelecionado(botao);

// esconder a imagem anterior selecionada
        esconderImagemAtiva();

//fazer aparecer a imagem correspondente ao botao selecionado
        mostrarImagemDeFundo(indice);

//esconder a informacao do dragao
        esconderInformacoesAtivas();

// aparecer informcao correta de acordo com a imagem
        mostraInformacoes(indice);

    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostraInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

