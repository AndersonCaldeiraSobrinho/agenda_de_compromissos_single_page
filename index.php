<?php



?>



<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="shortcut icon" href="img/agenda.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>agenda dos vendedores</title>
    <link rel="stylesheet" type="text/css" href="css/materialize.css">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/cliente.css">
    <link rel="stylesheet" type="text/css" href="css/vendedor.css">
    <link rel="stylesheet" type="text/css" href="css/compromisso.css">
    <link rel="stylesheet" type="text/css" href="css/agenda.css">   
</head>
<body class="corpo">
    <header class="cabecalho">
        <h1>Agenda de compromissos entre clientes e vendedores</h1>
    </header>
    <main class="principal">
        <section class="metade-esquerda">
            <div class="cadastro-superior">
                <article class="cliente">
                    <div class="titulo">
                        <h2>Cadastro cliente</h2>
                    </div>
                    <form id="formCliente">
                        <div class="row">
                          <div class="input-field s12 pr_list">
                            <div class="input-field col s12 pr_lis_btn">
                              <a class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                              <a class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                            </div>
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadClienteCPF" class="validate input_text"  data-length="11">
                                <label class="active" for="cadClienteCPF">cpf</label>
                            </div>
                          </div>
                            <div class="input-field s12">
                              <div class="input-field col s7">
                                  <input value="" type="text" id="cadClienteNome" class="validate input_text" data-length="50">
                                  <label class="active" for="cadClienteNome">nome</label>
                              </div>
                              <div class="input-field col s3">
                                    <input value="" type="text" id="cadClienteRG" class="validate input_text"  data-length="15">
                                    <label class="active" for="cadClienteRG">RG</label>
                                </div>
                                <div class="input-field col s2">
                                    <input value="" type="text" id="cadClienteEmis" class="validate input_text"  data-length="7">
                                    <label class="active" for="cadClienteEmis">emis.</label>
                                </div>
                            </div>

                            <div class="input-field s12">
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadClienteCEP" class="validate input_text"  data-length="9">
                                <label class="active" for="cadClienteCEP">C.E.P.</label>
                            </div>
                            </div>
                            <div class="input-field s12">
                                <div class="input-field col s9">
                                    <input value="" type="text" id="cadClienteEnd" class="validate input_text" data-length="70">
                                    <label class="active input_text" for="cadClienteEnd">endereço</label>
                                </div>
                                <div class="input-field col s3">
                                    <input value="" type="text" id="cadClienteNum" class="validate input_text"  data-length="11">
                                    <label class="active" for="cadClienteNum">num.</label>
                                </div>
                            </div>
                            <div class="s12">
                                <div class="input-field col s6">
                                    <input value="" type="text" id="cadClienteComp" class="validate input_text" data-length="30">
                                    <label class="active" for="cadClienteComp">Compl.</label>
                                </div>
                                <div class="input-field col s4">
                                    <input value="" type="text" id="cadClienteBair" class="validate input_text"  data-length="30">
                                    <label class="active" for="cadClienteBair">Bairro</label>
                                </div>
                                <div class="input-field col s2">
                                    <input value="" type="text" id="cadClienteEst" class="validate input_text"  data-length="2">
                                    <label class="active" for="cadClienteEst">Est.</label>
                                </div>
                            </div>
                            <div class="input-field s12">
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadClienteDDD" class="validate input_text"  data-length="3">
                                  <label class="active" for="cadClienteDDD">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadClienteTel" class="validate input_text"  data-length="10">
                                  <label class="active" for="cadClienteTel">telefone</label>
                              </div>
                              </div>
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadClienteDDD" class="validate input_text"  data-length="3">
                                  <label class="active" for="cadClienteDDD">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadClienteTel" class="validate input_text"  data-length="10">
                                  <label class="active" for="cadClienteTel">celular</label>
                              </div>
                              </div>
                            </div>
                            
                        </div>
                    </form>
                    <div class="menu_botao">
                        <div class="menu_botoes_1">
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>Cadastrar</a>
                        </div>
                        <div class="menu_botoes_2">
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
                        </div>
                    </div>
                </article>
                <article class="vendedor">
                    <div class="titulo">
                        <h2>Cadastro vendedor</h2>
                    </div>
                    <form id="formVendedor">
                        <div class="row">
                          <div class="input-field s12 pr_list">
                            <div class="input-field col s12 pr_lis_btn">
                              <a class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                              <a class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                            </div>
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadVendCod" class="validate input_text"  data-length="11">
                                <label class="active" for="cadVendCod">Codigo</label>
                            </div>
                          </div>
                            <div class="input-field s12">
                              <div class="input-field col s7">
                                  <input value="" type="text" id="cadVendNome" class="validate input_text" data-length="70">
                                  <label class="active" for="cadVendNome">nome</label>
                              </div>
                              <div class="input-field col s3">
                                    <input value="" type="text" id="cadVendRG" class="validate input_text"  data-length="15">
                                    <label class="active" for="cadVendRG">RG</label>
                                </div>
                                <div class="input-field col s2">
                                    <input value="" type="text" id="cadVendEmis" class="validate input_text"  data-length="7">
                                    <label class="active" for="cadVendEmis">emis.</label>
                                </div>
                            </div>

                            <div class="input-field s12">
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadVendCPF" class="validate input_text"  data-length="11">
                                <label class="active" for="cadVendCPF">CPF</label>
                            </div>
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadVendCEP" class="validate input_text"  data-length="10">
                                <label class="active" for="cadVendCEP">C.E.P.</label>
                            </div>
                            </div>
                            <div class="input-field s12">
                                <div class="input-field col s9">
                                    <input value="" type="text" id="cadVendEnd" class="validate input_text" data-length="120">
                                    <label class="active input_text" for="cadVendEnd">endereço</label>
                                </div>
                                <div class="input-field col s3">
                                    <input value="" type="text" id="cadVendNum" class="validate input_text"  data-length="11">
                                    <label class="active" for="cadVendNum">num.</label>
                                </div>
                            </div>
                            <div class="s12">
                                <div class="input-field col s6">
                                    <input value="" type="text" id="cadVendComp" class="validate input_text" data-length="30">
                                    <label class="active" for="cadVendComp">Compl.</label>
                                </div>
                                <div class="input-field col s4">
                                    <input value="" type="text" id="cadVendBair" class="validate input_text"  data-length="30">
                                    <label class="active" for="cadVendBair">Bairro</label>
                                </div>
                                <div class="input-field col s2">
                                    <input value="" type="text" id="cadVendEst" class="validate input_text"  data-length="2">
                                    <label class="active" for="cadVendEst">Est.</label>
                                </div>
                            </div>
                            <div class="input-field s12">
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadVendDDD" class="validate input_text"  data-length="3">
                                  <label class="active" for="cadVendDDD">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadVendTel" class="validate input_text"  data-length="10">
                                  <label class="active" for="cadVendTel">telefone</label>
                              </div>
                              </div>
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadVendDDD" class="validate input_text"  data-length="3">
                                  <label class="active" for="cadVendDDD">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadVendTel" class="validate input_text"  data-length="10">
                                  <label class="active" for="cadVendTel">celular</label>
                              </div>
                              </div>
                            </div>
                            
                        </div>
                    </form>
                    <div class="menu_botao">
                        <div class="menu_botoes_1">
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>Cadastrar</a>
                        </div>
                        <div class="menu_botoes_2">
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
                        </div>
                    </div>
                </article>
            </div>
            <div class="cadastro-inferior">
                <article class="compromisso">
                    <div class="titulo">
                        <h2>Cadastro compromisso</h2>
                    </div>
                    <div class="corpo_compr input-field col s12">
                    <form class="input-field s9" id="formCompr">
                        <div class="row">
                          <div class="parte_1 input-field s3"> 
                            <div class="input-field s3">
                              <input value="" type="text" id="cadComprID" class="validate input_text"  data-length="11">
                              <label class="active" for="cadComprID">ID</label>
                            </div>
                            <div class="input-field s3">
                              <input value="" type="text" id="cadComprIdVend" class="validate input_text"  data-length="11">
                              <label class="active" for="cadComprIdVend">ID. Vend.</label>
                            </div>
                            <div class="input-field s3">
                              <input value="" type="text" id="cadComprCpfCliente" class="validate input_text"  data-length="11">
                              <label class="active" for="cadComprCpfCliente">CPF Cliente</label>
                            </div>
                          </div>
                          
                          <div class="parte_2 input-field s6"> 
                            <div class="input-field s6">
                              <input value="" type="text" id="cadComprEvent" class="validate input_text"  data-length="70">
                              <label class="active" for="cadComprEvent">Descrição do evento</label>
                            </div>
                            <div class="parte_3 input-field s6">
                              <div class="parte_3_1 input-field s6">
                                <div class="input-field s3">
                                  <input value="" type="text" id="cadComprNomeVend" class="validate input_text"  data-length="120">
                                  <label class="active" for="cadComprNomeVend">Nome do vendedor</label>
                                </div>
                                <div class="input-field s3">
                                  <input value="" type="text" id="cadComprNomeCliente" class="validate input_text"  data-length="120">
                                  <label class="active" for="cadComprNomeCliente">Nome do Cliente</label>
                                </div>
                              </div>
                              <div class="parte_3_2 input-field s6">
                                <div class="input-field s3">
                                  <input value="" type="text" id="cadComprData" class="validate input_text"  data-length="120">
                                  <label class="active" for="cadComprData">Data</label>
                                </div>
                                <div class="input-field s3">
                                  <input value="" type="text" id="cadComprHora" class="validate input_text"  data-length="120">
                                  <label class="active" for="cadComprHora">Horario</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </form>
                    <div class="compr_menu_botao s3">
                        <div class="menu_botoes_1">
                          <a class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>Cadastrar</a>
                        </div>
                        <div class="compr_menu_botoes_2">
                          <div class="compr_menu_botoes_2_parte_1">
                            <a class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                            <a class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                          </div>
                          <div class="compr_menu_botoes_2_parte_2">
                            <a class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
                            <a class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
                          </div>
                        </div>
                    </div>
                  </div>
                </article>
            </div>
        </section>
        <section class="metade-direita">
            <article class="agenda">
                <div class="titulo">
                    <h2>Agenda</h2>
                </div>

                <div class="row menu_busca">
                <div class="sub_menu_busca">
                  <div class="row">
                    <div class="input-field col s11">
                      <input value="" id="buscaVendedor" type="text" class="validate input_text" data-length="120">
                      <label class="active" for="buscaVendedor">Vendedor</label>
                    </div>
                    <a class="input-field col s6 waves-effect waves-light btn-small" style="margin-left: 1vw"><i class="material-icons right">search</i>Buscar</a>
                  </div>

                  <div class="row">
                    <div  class="input-field col s11">
                      <input value="" id="buscaCliente" type="text" class="validate input_text" data-length="120">
                      <label class="active" for="buscaCliente">Cliente</label>
                    </div>
                    <a class="input-field col s6 waves-effect waves-light btn-small" style="margin-left: 1vw"><i class="material-icons right">search</i>Buscar</a>
                  </div>
                </div>
                </div>
                <div class="scroll-agenda">
                <div class="agenda-compromisso">
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente1</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="parte_1">
                      <div class="parte_2">
                        <h3>Cliente</h3>
                        <div class="parte_3">
                          <p>CPF</p>
                          <p>Nome</p>
                          <p>Telefone</p>
                        </div>
                      </div>
                      <div class="parte_4">
                        <div class="parte_5">
                          <h3>Vendedor</h3>
                          <div class="parte_6">
                            <p>ID</p>
                            <p>Nome</p>
                          </div>
                        </div>
                        <div class="parte_7">
                          <h3>Descrição</h3>
                          <div class="parte_8">
                            <p>Data:</p>
                            <p>Hora:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                </div>
            </article>
        </section>
    </main>
</body>
<script src="js/jQuery.js"></script>
<script src="js/materialize.js"></script>
<script src="js/script.js"></script>
<script src="js/verificar.js"></script>
</html>