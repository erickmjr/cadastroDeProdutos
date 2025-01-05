$(document).ready(function(){

    const produtos = [];
    let form = $("form");
    let botaoSecundarioCadastro = $('#cadastrarBtnSecundario');

    botaoSecundarioCadastro.on('click', function(){
        $('html, body').animate({
            scrollTop: $('#cadastrarProdutos').offset().top - 100
        },500);
    });

    form.validate({

        rules: {
            nomeProduto: {
                required: true
            },

            descricaoProduto: {
                required: true
            },

            valorProduto: {
                required: true,
                number: true,
                min: 0.01
            },

            disponivel: {
                required: true
            }
        },

        messages: {
            nomeProduto: {
                required: "Por favor, insira o nome do produto"
            },
            descricaoProduto: {
                required: "Por favor, insira a descrição do produto"
            },
            valorProduto: {
                required: "Por favor, insira o valor do produto",
                number: "Por favor, insira um valor válido",
                min: "O valor deve ser maior que zero"
            },
            disponivel: {
                required: "Por favor, selecione a disponibilidade do produto"
            }
        },

        submitHandler: function(form) {
            cadastrarProduto();
            $('html, body').animate({
                scrollTop: $('#listarProdutos').offset().top - 100
            }, 500);
        }

    })

    function cadastrarProduto () {
        let nome = $("#nomeProduto").val();
        let valor = $("#valorProduto").val();
        let descricao = $("#descricaoProduto").val();
        let disponibilidade = $('#disponivel option:selected').text();

        const novoProduto = {
            nome: nome,
            descricao: descricao,
            valor: valor,
            disponibilidade: disponibilidade
        }

        produtos.push(novoProduto);

        adicionarProdutoLista();

        limparFormulario();

    }

    function adicionarProdutoLista () {
        
        $('#listaDeProdutos').empty();

        $('#listaDeProdutos').prepend(`
            <div class="col-12 col-md-3 col-sm-4 mb-2">
                <button type="button" class="btn d-flex align-items-center fw-bold justify-content-center w-100 h-100 fs-6 m-0 px-3 py-0" id="cadastrarBtnSecundario">
                        <i class="bi bi-plus fs-1 m-0 p-0">
                        </i>
                </button>
            </div>
        `);

        $('#cadastrarBtnSecundario').on('click', function(){
            $('html, body').animate({
                scrollTop: $('#cadastrarProdutos').offset().top - 90
            },500);
        });

        produtos.sort(function(a, b) {  
            return a.valor - b.valor;
        })
        
        produtos.forEach(function(produto){
            $('#listaDeProdutos').prepend(`
                <div class="col-12 col-md-4 col-sm-4 mb-2">
                    <article class="card p-0 m-0">
                        <h4 class="card-title p-2 bg-dark text-light rounded-top m-0">
                            ${produto.nome}
                        </h4>
                        <div class="card-body p-2 bg-light d-flex gap-1 align-items-center">
                            <h3 class="fs-5 text-dark m-0">
                                <i class="bi bi-info-circle"></i>
                                ${produto.descricao}
                            </h3>
                            
                        </div>
                        <div class="card-footer bg-dark text-light p-2 rounded-bottom">
                            <h3 class="fs-5">
                                R$${produto.valor},00
                            </h3>
                            <h3 class="fs-6 text-light">
                                Disponível: ${produto.disponibilidade}
                            </h3>
                        </div>
                    </article>
                </div>
            `);
        })
        
    }

    function limparFormulario() {
        $("#nomeProduto").val('');
        $("#valorProduto").val('');
        $("#descricaoProduto").val('');
        $('#disponivel').val('');
    }

    
})