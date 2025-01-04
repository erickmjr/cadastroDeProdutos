$(document).ready(function(){

    const produtos = [];

    botao = $('#cadastrarBtn');

    botao.click(function(e){
        e.preventDefault();
        cadastrarProduto();
    })

    function cadastrarProduto () {
        const nome = $("#nomeProduto").val();
        const valor = $("#valorProduto").val();
        const descricao = $("#descricaoProduto").val();
        const disponibilidade = verificarSelecionado();

        const novoProduto = {
            nome: nome,
            descricao: descricao,
            valor: valor,
            disponibilidade: disponibilidade
        }

        console.log(disponibilidade);
        console.log(produtos);

        produtos.push(novoProduto);
    }


    function verificarSelecionado () {
        const selecionado = $('input[name="disponivel"]:checked').val();
        if (selecionado === "true") {
            return true;
        } else {
            return false;
        }
    }
})