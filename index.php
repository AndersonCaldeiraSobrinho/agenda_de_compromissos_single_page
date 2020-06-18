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
                              <a id="btnLimpaCliente" value="clear" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                              <a id="btnBuscaCliente" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                            </div>
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadClienteCPF" class="">
                                <label class="active" for="cadClienteCPF" maxlength=11>cpf</label>
                            </div>
                          </div>
                            <div class="input-field s12">
                              <div class="input-field col s7">
                                  <input value="" type="text" id="cadClienteNome" class="">
                                  <label class="active" for="cadClienteNome">nome completo</label>
                              </div>
                              <div class="input-field col s3">
                                    <input value="" type="text" id="cadClienteRG" class="">
                                    <label class="active" for="cadClienteRG">RG</label>
                                </div>
                                <div class="input-field col s2">
                                    <input value="" type="text" id="cadClienteEmis" class="">
                                    <label class="active" for="cadClienteEmis">emis.</label>
                                </div>
                            </div>

                            <div class="input-field s12">
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadClienteCEP" class="">
                                <label class="active" for="cadClienteCEP">C.E.P.</label>
                            </div>
                            </div>
                            <div class="input-field s12">
                                <div class="input-field col s9">
                                    <input value="" type="text" id="cadClienteEnd" class="">
                                    <label class="active input_text" for="cadClienteEnd">endereço</label>
                                </div>
                                <div class="input-field col s3">
                                    <input value="" type="text" id="cadClienteNum" class="">
                                    <label class="active" for="cadClienteNum">num.</label>
                                </div>
                            </div>
                            <div class="s12">
                                <div class="input-field col s4">
                                    <input value="" type="text" id="cadClienteComp" class="">
                                    <label class="active" for="cadClienteComp">Compl.</label>
                                </div>
                                <div class="input-field col s5">
                                    <input value="" type="text" id="cadClienteBair" class="">
                                    <label class="active" for="cadClienteBair">Bairro</label>
                                </div>
                                <div class="input-field col s3">
                                <select id="cadClienteEst">
                                    <option value="" disabled selected>Estado</option>
                                    <option value="acre">AC</option>
                                    <option value="alagoas">AL</option>
                                    <option value="amapa">AP</option>
                                    <option value="amazonas">AM</option>
                                    <option value="bahia">BA</option>
                                    <option value="distrito federal">DF</option>
                                    <option value="espirito santo">ES</option>
                                    <option value="goias">GO</option>
                                    <option value="maranhao">MA</option>
                                    <option value="mato grosso">MT</option>
                                    <option value="mato grosso do sul">MS</option>
                                    <option value="minas gerais">MG</option>
                                    <option value="para">PA</option>
                                    <option value="paraiba">PB</option>
                                    <option value="pernambuco">PE</option>
                                    <option value="piaui">PI</option>
                                    <option value="rio de janeiro">RJ</option>
                                    <option value="rio grande do norte">RN</option>
                                    <option value="rio grande do sul">RS</option>
                                    <option value="rondonia">RO</option>
                                    <option value="roraima">RR</option>
                                    <option value="santa catarina">SC</option>
                                    <option value="sao paulo">SP</option>
                                    <option value="sergipe">SE</option>
                                    <option value="tocantins">TO</option>
                                  </select>
                                </div>
                            </div>
                            <div class="input-field row s12">
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadClienteDDD1" class="">
                                  <label class="active" for="cadClienteDDD1">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadClienteTel1" class="">
                                  <label class="active" for="cadClienteTel1">telefone</label>
                              </div>
                              </div>
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadClienteDDD2" class="">
                                  <label class="active" for="cadClienteDDD2">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadClienteTel2" class="">
                                  <label class="active" for="cadClienteTel2">celular</label>
                              </div>
                              </div>
                            </div>
                            
                        </div>
                    </form>
                    <div class="menu_botao menu_botao_cliente">
                        <div class="menu_botoes_1">
                          <a id="btnCadastraCliente" value="3" class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>Cadastrar</a>
                        </div>
                        <div class="menu_botoes_2">
                          <a id="btnAlteraCliente" value="4" class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
                          <a id="btnExcluiCliente" value="5" class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
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
                              <a id="btnLimpaVend" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                              <a id="btnBuscaVend" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                            </div>
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadVendCod" class="">
                                <label class="active" for="cadVendCod">Codigo</label>
                            </div>
                          </div>
                            <div class="input-field s12">
                              <div class="input-field col s7">
                                  <input value="" type="text" id="cadVendNome" class="">
                                  <label class="active" for="cadVendNome">nome completo</label>
                              </div>
                              <div class="input-field col s3">
                                    <input value="" type="text" id="cadVendRG" class="">
                                    <label class="active" for="cadVendRG">RG</label>
                                </div>
                                <div class="input-field col s2">
                                    <input value="" type="text" id="cadVendEmis" class="">
                                    <label class="active" for="cadVendEmis">emis.</label>
                                </div>
                            </div>

                            <div class="input-field s12">
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadVendCPF" class="">
                                <label class="active" for="cadVendCPF">CPF</label>
                            </div>
                            <div class="input-field col s6">
                                <input value="" type="text" id="cadVendCEP" class="">
                                <label class="active" for="cadVendCEP">C.E.P.</label>
                            </div>
                            </div>
                            <div class="input-field s12">
                                <div class="input-field col s9">
                                    <input value="" type="text" id="cadVendEnd" class="">
                                    <label class="active input_text" for="cadVendEnd">endereço</label>
                                </div>
                                <div class="input-field col s3">
                                    <input value="" type="text" id="cadVendNum" class="">
                                    <label class="active" for="cadVendNum">num.</label>
                                </div>
                            </div>
                            <div class="s12">
                                <div class="input-field col s4">
                                    <input value="" type="text" id="cadVendComp" class="">
                                    <label class="active" for="cadVendComp">Compl.</label>
                                </div>
                                <div class="input-field col s5">
                                    <input value="" type="text" id="cadVendBair" class="">
                                    <label class="active" for="cadVendBair">Bairro</label>
                                </div>
                                <div class="input-field col s3">
                                <select id="cadvendEst">
                                    <option value="" disabled selected>Estado</option>
                                    <option value="acre">AC</option>
                                    <option value="alagoas">AL</option>
                                    <option value="amapa">AP</option>
                                    <option value="amazonas">AM</option>
                                    <option value="bahia">BA</option>
                                    <option value="distrito federal">DF</option>
                                    <option value="espirito santo">ES</option>
                                    <option value="goias">GO</option>
                                    <option value="maranhao">MA</option>
                                    <option value="mato grosso">MT</option>
                                    <option value="mato grosso do sul">MS</option>
                                    <option value="minas gerais">MG</option>
                                    <option value="para">PA</option>
                                    <option value="paraiba">PB</option>
                                    <option value="pernambuco">PE</option>
                                    <option value="piaui">PI</option>
                                    <option value="rio de janeiro">RJ</option>
                                    <option value="rio grande do norte">RN</option>
                                    <option value="rio grande do sul">RS</option>
                                    <option value="rondonia">RO</option>
                                    <option value="roraima">RR</option>
                                    <option value="santa catarina">SC</option>
                                    <option value="sao paulo">SP</option>
                                    <option value="sergipe">SE</option>
                                    <option value="tocantins">TO</option>
                                  </select>
                                </div>
                            </div>
                            <div class="input-field s12">
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadVendDDD1" class="">
                                  <label class="active" for="cadVendDDD1">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadVendTel1" class="">
                                  <label class="active" for="cadVendTel1">telefone</label>
                              </div>
                              </div>
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input value="" type="text" id="cadVendDDD2" class="">
                                  <label class="active" for="cadVendDDD2">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input value="" type="text" id="cadVendTel2" class="">
                                  <label class="active" for="cadVendTel2">celular</label>
                              </div>
                              </div>
                            </div>
                            
                        </div>
                    </form>
                    <div class="menu_botao">
                        <div class="menu_botoes_1">
                          <a id="btnCadastraVend" class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>Cadastrar</a>
                        </div>
                        <div class="menu_botoes_2">
                          <a id="btnAlteraVend" class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
                          <a id="btnExcluiVend" class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
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
                              <input value="" type="text" id="cadComprID" class="">
                              <label class="active" for="cadComprID">ID</label>
                            </div>
                            <div class="input-field s3">
                              <input value="" type="text" id="cadComprIdVend" class="">
                              <label class="active" for="cadComprIdVend">ID. Vend.</label>
                            </div>
                            <div class="input-field s3">
                              <input value="" type="text" id="cadComprCpfCliente" class="">
                              <label class="active" for="cadComprCpfCliente">CPF Cliente</label>
                            </div>
                          </div>
                          
                          <div class="parte_2 input-field s6"> 
                            <div class="input-field s6">
                              <input value="" type="text" id="cadComprEvent" class="">
                              <label class="active" for="cadComprEvent">Descrição do evento</label>
                            </div>
                            <div class="parte_3 input-field s6">
                              <div class="parte_3_1 input-field s6">
                                <div class="input-field s3">
                                  <input value="" type="text" id="cadComprNomeVend" class="">
                                  <label class="active" for="cadComprNomeVend">Nome do vendedor</label>
                                </div>
                                <div class="input-field s3">
                                  <input value="" type="text" id="cadComprNomeCliente" class="">
                                  <label class="active" for="cadComprNomeCliente">Nome do Cliente</label>
                                </div>
                              </div>
                              <div class="parte_3_2 input-field s6">
                                <div class="input-field s3">
                                  <input value="" type="date" id="cadComprData" class="">
                                  <label class="active" for="cadComprData">Data</label>
                                </div>
                                <div class="input-field s3">
                                  <input value="" type="time" id="cadComprHora" class="">
                                  <label class="active" for="cadComprHora">Horario</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </form>
                    <div class="compr_menu_botao s3">
                        <div class="menu_botoes_1">
                          <a id="btnCadastraCompr" class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>Cadastrar</a>
                        </div>
                        <div class="compr_menu_botoes_2">
                          <div class="compr_menu_botoes_2_parte_1">
                            <a id="btnLimpaCompr" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                            <a id="btnBuscaCompr" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                          </div>
                          <div class="compr_menu_botoes_2_parte_2">
                            <a id="btnlAlteraCompr" class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
                            <a id="btnExcluiCompr" class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
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
                      <input value="" id="buscaVendedor" type="text" class="">
                      <label class="active" for="buscaVendedor">Vendedor</label>
                    </div>
                    <a id="btnbuscaVendedor" class="input-field col s6 waves-effect waves-light btn-small" style="margin-left: 1vw"><i class="material-icons right">search</i>Buscar</a>
                  </div>

                  <div class="row">
                    <div  class="input-field col s11">
                      <input value="" id="buscaCliente" type="text" class="">
                      <label class="active" for="buscaCliente">Cliente</label>
                    </div>
                    <a id="btnbuscaCliente" class="input-field col s6 waves-effect waves-light btn-small" style="margin-left: 1vw"><i class="material-icons right">search</i>Buscar</a>
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