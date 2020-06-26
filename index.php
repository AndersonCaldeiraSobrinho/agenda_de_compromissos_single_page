<?php
	require_once("./class/seller.class.php");
	require_once("./class/appointment.class.php");
	require_once("./class/client.class.php");
	
	$msg = "";
	$action = "";
	if (isset($_GET["action"])) {
		$action = $_GET["action"];
		$criar = "";
		

		if ($action == "btnCadastraCliente" || $action == "btnBuscaCliente" || $action == "btnAlteraCliente" || $action == "btnExcluiCliente") {
			$criar = "cliente";
		} else if ($action == "btnBuscaVend" || $action == "btnCadastraVend" || $action == "btnAlteraVend" || $action == "btnExcluiVend") {
			$criar = "vendedor";
		} else {
			$criar = "compr";
		}

		if ($criar == "cliente") {
			$objCliente = new Cliente();
			$objCliente->cpf = $_REQUEST["cadClienteCPF"];
			$objCliente->nome = $_REQUEST["cadClienteNome"];
			$objCliente->rg = $_REQUEST["cadClienteRG"];
			$objCliente->cep = $_REQUEST["cadClienteCEP"];
			$objCliente->ende = $_REQUEST["cadClienteEnd"];
			$objCliente->num = $_REQUEST["cadClienteNum"];
			$objCliente->comp = $_REQUEST["cadClienteComp"];
			$objCliente->bairro = $_REQUEST["cadClienteBair"];
			$objCliente->uf = $_REQUEST["cadClienteEst"];
			$objCliente->dddUm = $_REQUEST["cadClienteDDD1"];
			$objCliente->telUm = $_REQUEST["cadClienteTel1"];
			$objCliente->dddDois = $_REQUEST["cadClienteDDD2"];
			$objCliente->telDois = $_REQUEST["cadClienteTel2"];
		} else if ($criar == "vendedor") {
			$objVendedor = new Seller();
			$objVendedor->cpf = $_REQUEST["cadVendCPF"];
			$objVendedor->nome = $_REQUEST["cadVendNome"];
			$objVendedor->rg = $_REQUEST["cadVendRG"];
			$objVendedor->cep = $_REQUEST["cadVendCEP"];
			$objVendedor->ende = $_REQUEST["cadVendEnd"];
			$objVendedor->num = $_REQUEST["cadVendNum"];
			$objVendedor->comp = $_REQUEST["cadVendComp"];
			$objVendedor->bairro = $_REQUEST["cadVendBair"];
			$objVendedor->uf = $_REQUEST["cadVendEst"];
			$objVendedor->dddUm = $_REQUEST["cadVendDDD1"];
			$objVendedor->telUm = $_REQUEST["cadVendTel1"];
			$objVendedor->dddDois = $_REQUEST["cadVendDDD2"];
			$objVendedor->telDois = $_REQUEST["cadVendTel2"];
		} else {
			$objCompr = new Appointment();
			$objCompr->id = $_REQUEST["cadComprID"];
			$objCompr->cpfVend = $_REQUEST["cadComprIdVend"];
			$objCompr->cpfCliente = $_REQUEST["cadComprCpfCliente"];
			$objCompr->event = $_REQUEST["cadComprEvent"];
			$objCompr->comprData = $_REQUEST["cadComprData"];
			$objCompr->comprHora = $_REQUEST["cadComprHora"];
		}

		switch($action) {
			case 'btnCadastraCliente':
				if ($objCliente->registerCliente()) {
					$msg = "<script>alert('Cliente cadastrado com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objCliente->getErr()."')</script>"; 
				}
			break;

			case 'btnBuscaCliente':
				$cliente = $objCliente->searchCliente();
				if ($cliente) {
					$buscarCliente = "
					<script>
						$('#cadClienteCPF').val('".$cliente["cpf"]."')
						$('#cadClienteNome').val('".$cliente["nome"]."')
						$('#cadClienteRG').val('".$cliente["rg"]."')
						$('#cadClienteCEP').val('".$cliente["cep"]."')
						$('#cadClienteEnd').val('".$cliente["endereco"]."')
						$('#cadClienteNum').val('".$cliente["num"]."')
						$('#cadClienteComp').val('".$cliente["comp"]."')
						$('#cadClienteBair').val('".$cliente["bairro"]."')
						$('#cadClienteEst').val('".$cliente["uf"]."')
						$('#cadClienteDDD1').val('".$cliente["dddUm"]."')
						$('#cadClienteTel1').val('".$cliente["telUm"]."')
						$('#cadClienteDDD2').val('".$cliente["dddDois"]."')
						$('#cadClienteTel2').val('".$cliente["telDois"]."')
					</script>";
				} else {
					$msg = "<script>alert('".$objCliente->getErr()."')</script>";
				}
			break;

			case 'btnAlteraCliente':
				$cliente = $objCliente->updateCliente();
				if ($cliente) {
					$msg = "<script>alert('Cliente alterado com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objCliente->getErr()."')</script>";
				}
			break;

			case 'btnExcluiCliente':
				if ($objCliente->deleteCliente()) {
					$msg = "<script>alert('Cliente removido com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objCliente->getErr()."')</script>";
				}
			break;

			case 'btnCadastraVend':
				if ($objVendedor->registerSeller()) {
					$msg = "<script>alert('Vendedor cadastrado com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objVendedor->getErr()."')</script>"; 
				}
			break;

			case 'btnBuscaVend':
				$vendedor = $objVendedor->searchSeller();
				if ($vendedor) {
					$buscarVendedor = "
					<script>
						$('#cadVendCPF').val('".$vendedor["cpf"]."')
						$('#cadVendNome').val('".$vendedor["nome"]."')
						$('#cadVendRG').val('".$vendedor["rg"]."')
						$('#cadVendCEP').val('".$vendedor["cep"]."')
						$('#cadVendEnd').val('".$vendedor["endereco"]."')
						$('#cadVendNum').val('".$vendedor["num"]."')
						$('#cadVendComp').val('".$vendedor["comp"]."')
						$('#cadVendBair').val('".$vendedor["bairro"]."')
						$('#cadVendEst').val('".$vendedor["uf"]."')
						$('#cadVendDDD1').val('".$vendedor["dddUm"]."')
						$('#cadVendTel1').val('".$vendedor["telUm"]."')
						$('#cadVendDDD2').val('".$vendedor["dddDois"]."')
						$('#cadVendTel2').val('".$vendedor["telDois"]."')
					</script>";
				} else {
					$msg = "<script>alert('".$objVendedor->getErr()."')</script>"; 
				}
			break;

			case 'btnAlteraVend':
				if ($objVendedor->updateSeller()) {
					$msg = "<script>alert('Vendedor alterado com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objVendedor->getErr()."')</script>"; 
				}
			break;

			case 'btnExcluiVend':
				if ($objVendedor->deleteSeller()) {
					$msg = "<script>alert('Vendedor removido com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objVendedor->getErr()."')</script>"; 
				}
			break;

			case 'btnCadastraCompr':
				if ($objCompr->registerCompr()) {
					$msg = "<script>alert('Compromisso cadastrado com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objCompr->getErr()."')</script>";
				}
			break;

			case 'btnBuscaCompr':
				$compromisso = $objCompr->searchCompr();
				if ($compromisso) {
					$buscarCompr = "
					<script>
						$('#cadComprID').val('".$compromisso["id"]."')
						$('#cadComprIdVend').val('".$compromisso["cpfVend"]."')
						$('#cadComprCpfCliente').val('".$compromisso["cpfCliente"]."')
						$('#cadComprEvent').val('".$compromisso["evento"]."')
						$('#cadComprData').val('".$compromisso["dataDia"]."')
						$('#cadComprHora').val('".$compromisso["hora"]."')
					</script>";
				} else {
					$msg = "<script>alert('".$objCompr->getErr()."')</script>";
				}
			break;

			case 'btnAlteraCompr':
				if ($objCompr->updateCompr()) {
					$msg = "<script>alert('Compromisso alterado com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objCompr->getErr()."')</script>";
				}
			break;

			case 'btnExcluiCompr':
				if ($objCompr->deleteCompr()) {
					$msg = "<script>alert('Compromisso removido com sucesso!')</script>";
				} else {
					$msg = "<script>alert('".$objCompr->getErr()."')</script>";
				}
			break;

			default:
				echo "<script>alert('Não sei como proceder')</script>";
			break;
		}
	}

?>



<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <link rel="shortcut icon" href="img/agenda.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda dos Vendedores</title>
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
                    <form id="formCliente" action="" method="post">
                        <div class="row">
                          <div class="input-field s12 pr_list">
                            <div class="input-field col s12 pr_lis_btn">
                              <a id="btnLimpaCliente" value="clear" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                              <a id="btnBuscaCliente" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                            </div>
                            <div class="input-field col s6">
                                <input tabindex="1" value="" type="text" id="cadClienteCPF" name="cadClienteCPF" class="" maxlength="11">
                                <label class="active" for="cadClienteCPF">cpf</label>
                            </div>
                          </div>
                            <div class="input-field s12">
                              <div class="input-field col s7">
                                  <input tabindex="2" value="" type="text" id="cadClienteNome" name="cadClienteNome" class="" maxlength="50">
                                  <label class="active" for="cadClienteNome">nome completo</label>
                              </div>
                              <div class="input-field col s3">
                                    <input tabindex="3" value="" type="text" id="cadClienteRG" name="cadClienteRG" class="" maxlength="11">
                                    <label class="active" for="cadClienteRG">RG</label>
                                </div>
                                <!-- <div class="input-field col s2">
                                    <input tabindex="4" value="" type="text" id="cadClienteEmis" class="">
                                    <label class="active" for="cadClienteEmis">emis.</label>
                                </div> -->
                            </div>

                            <div class="input-field s12">
                            <div class="input-field col s6">
                                <input tabindex="5" value="" type="text" id="cadClienteCEP" name="cadClienteCEP" class="" maxlength="8">
                                <label class="active" for="cadClienteCEP">C.E.P.</label>
                            </div>
                            </div>
                            <div class="input-field s12">
                                <div class="input-field col s9">
                                    <input tabindex="6" value="" type="text" id="cadClienteEnd" name="cadClienteEnd" class="" maxlength="70">
                                    <label class="active input_text" for="cadClienteEnd">endereço</label>
                                </div>
                                <div class="input-field col s3">
                                    <input tabindex="7" value="" type="text" id="cadClienteNum" name="cadClienteNum" class="" maxlength="15">
                                    <label class="active" for="cadClienteNum">num.</label>
                                </div>
                            </div>
                            <div class="s12">
                                <div class="input-field col s4">
                                    <input tabindex="8" value="" type="text" id="cadClienteComp" name="cadClienteComp" class="" maxlength="15">
                                    <label class="active" for="cadClienteComp">Compl.</label>
                                </div>
                                <div class="input-field col s5">
                                    <input tabindex="9" value="" type="text" id="cadClienteBair" name="cadClienteBair" class="" maxlength="25">
                                    <label class="active" for="cadClienteBair">Bairro</label>
                                </div>
                                <div tabindex="10" class="input-field col s3">
                                <select id="cadClienteEst" name="cadClienteEst">
								<option value="" selected>Estado</option>
									<option value="ac">AC</option>
									<option value="al">AL</option>
									<option value="ap">AP</option>
									<option value="am">AM</option>
									<option value="ba">BA</option>
									<option value="df">DF</option>
									<option value="es">ES</option>
									<option value="go">GO</option>
									<option value="ma">MA</option>
									<option value="mt">MT</option>
									<option value="ms">MS</option>
									<option value="mg">MG</option>
									<option value="pa">PA</option>
									<option value="pb">PB</option>
									<option value="pe">PE</option>
									<option value="pi">PI</option>
									<option value="rj">RJ</option>
									<option value="rn">RN</option>
									<option value="rs">RS</option>
									<option value="ro">RO</option>
									<option value="rr">RR</option>
									<option value="sc">SC</option>
									<option value="sp">SP</option>
									<option value="se">SE</option>
									<option value="to">TO</option>
                                  </select>
                                </div>
                            </div>
                            <div class="input-field row s12">
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input tabindex="11" value="" type="text" id="cadClienteDDD1" name="cadClienteDDD1" class="" maxlength="3">
                                  <label class="active" for="cadClienteDDD1">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input tabindex="12" value="" type="text" id="cadClienteTel1" name="cadClienteTel1" class="" maxlength="8">
                                  <label class="active" for="cadClienteTel1">telefone</label>
                              </div>
                              </div>
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input tabindex="13" value="" type="text" id="cadClienteDDD2"  name="cadClienteDDD2" class="" maxlength="3">
                                  <label class="active" for="cadClienteDDD2">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input tabindex="14" value="" type="text" id="cadClienteTel2" name="cadClienteTel2" class="" maxlength="9">
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
                        <h2>Cadastro Vendedor</h2>
                    </div>
                    <form id="formVendedor" action="" method="post">
                        <div class="row">
                          <div class="input-field s12 pr_list">
                            <div class="input-field col s12 pr_lis_btn">
                              <a id="btnLimpaVend" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">clear_all</i>Limpar</a>
                              <a id="btnBuscaVend" class="col s5 waves-effect waves-light btn-small"><i class="material-icons right">search</i>Buscar</a>
                            </div>
                            <div class="input-field col s6">
                                <input tabindex="15" value="" type="text" id="cadVendCPF" name="cadVendCPF" class="" maxlength="11">
                                <label class="active" for="cadVendCPF">CPF</label>
                            </div>
                          </div>
                            <div class="input-field s12">
                              <div class="input-field col s7">
                                  <input tabindex="16" value="" type="text" id="cadVendNome" name="cadVendNome" class="" maxlength="50">
                                  <label class="active" for="cadVendNome">nome completo</label>
                              </div>
                              	<div class="input-field col s3">
                                    <input tabindex="17" value="" type="text" id="cadVendRG" name="cadVendRG" class="" maxlength="11">
                                    <label class="active" for="cadVendRG">RG</label>
                                </div>
                                <!-- <div class="input-field col s2">
                                    <input tabindex="18" value="" type="text" id="cadVendEmis" class="">
                                    <label class="active" for="cadVendEmis">emis.</label>
                                </div> -->
                            </div>

                            <div class="input-field s12">
                            <div class="input-field col s6">
                                <input tabindex="19" value="" type="text" id="cadVendCEP" name="cadVendCEP" class="" maxlength="8">
                                <label class="active" for="cadVendCEP">C.E.P.</label>
                            </div>
                            </div>
                            <div class="input-field s12">
                                <div class="input-field col s9">
                                    <input tabindex="20" value="" type="text" id="cadVendEnd" name="cadVendEnd" class="" maxlength="70">
                                    <label class="active input_text" for="cadVendEnd">endereço</label>
                                </div>
                                <div class="input-field col s3">
                                    <input tabindex="21" value="" type="text" id="cadVendNum" name="cadVendNum" class="" maxlength="15">
                                    <label class="active" for="cadVendNum">num.</label>
                                </div>
                            </div>
                            <div class="s12">
                                <div class="input-field col s4">
                                    <input tabindex="22" value="" type="text" id="cadVendComp" name="cadVendComp" class="">
                                    <label class="active" for="cadVendComp">Compl.</label>
                                </div>
                                <div class="input-field col s5">
                                    <input tabindex="23" value="" type="text" id="cadVendBair" name="cadVendBair" class="" maxlength="25">
                                    <label class="active" for="cadVendBair">Bairro</label>
                                </div>
                                <div tabindex="24" class="input-field col s3">
                                <select id="cadVendEst" name="cadVendEst">
								<option value="" selected>Estado</option>
									<option value="ac">AC</option>
									<option value="al">AL</option>
									<option value="ap">AP</option>
									<option value="am">AM</option>
									<option value="ba">BA</option>
									<option value="df">DF</option>
									<option value="es">ES</option>
									<option value="go">GO</option>
									<option value="ma">MA</option>
									<option value="mt">MT</option>
									<option value="ms">MS</option>
									<option value="mg">MG</option>
									<option value="pa">PA</option>
									<option value="pb">PB</option>
									<option value="pe">PE</option>
									<option value="pi">PI</option>
									<option value="rj">RJ</option>
									<option value="rn">RN</option>
									<option value="rs">RS</option>
									<option value="ro">RO</option>
									<option value="rr">RR</option>
									<option value="sc">SC</option>
									<option value="sp">SP</option>
									<option value="se">SE</option>
									<option value="to">TO</option>
                                  </select>
                                </div>
                            </div>
                            <div class="input-field s12">
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input tabindex="25" value="" type="text" id="cadVendDDD1" name="cadVendDDD1" class="" maxlength="3">
                                  <label class="active" for="cadVendDDD1">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input tabindex="26" value="" type="text" id="cadVendTel1" name="cadVendTel1" class="" maxlength="8">
                                  <label class="active" for="cadVendTel1">telefone</label>
                              </div>
                              </div>
                              <div class="s6">
                              <div class="input-field col s2">
                                  <input tabindex="27" value="" type="text" id="cadVendDDD2" name="cadVendDDD2" class="" maxlength="3">
                                  <label class="active" for="cadVendDDD2">ddd</label>
                              </div>
                              <div class="input-field col s4">
                                  <input tabindex="28" value="" type="text" id="cadVendTel2" name="cadVendTel2" class="" maxlength="9">
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
                    <form class="input-field s9" id="formCompr" action="" method="post">
                        <div class="row">
                          <div class="parte_1 input-field s3"> 
                            <div class="input-field s3">
                              <input tabindex="29" value="" type="text" id="cadComprID" name="cadComprID" class="" maxlength="10">
                              <label class="active" for="cadComprID" >ID</label>
                            </div>
                            <div class="input-field s3">
                              <input tabindex="31" value="" type="text" id="cadComprIdVend"  name="cadComprIdVend" class="" maxlength="11">
                              <label class="active" for="cadComprIdVend">cpf Vendedor</label>
                            </div>
                            <div class="input-field s3">
                              <input tabindex="33" value="" type="text" id="cadComprCpfCliente" name="cadComprCpfCliente" class="" maxlength="11">
                              <label class="active" for="cadComprCpfCliente">CPF Cliente</label>
                            </div>
                          </div>
                          
                          <div class="parte_2 input-field s6"> 
                            <div class="input-field s6">
                              <input tabindex="30" value="" type="text" id="cadComprEvent" name="cadComprEvent" class="" maxlength="120">
                              <label class="active" for="cadComprEvent">Descrição do evento</label>
                            </div>
                            <div class="parte_3 input-field s6">
                              <div class="parte_3_1 input-field s6">
                                <!-- <div class="input-field s3">
                                  <input tabindex="32" value="" type="text" id="cadComprNomeVend" class="">
                                  <label class="active" for="cadComprNomeVend">Nome do vendedor</label>
                                </div> -->
                                <!-- <div class="input-field s3">
                                  <input tabindex="34" value="" type="text" id="cadComprNomeCliente" class="">
                                  <label class="active" for="cadComprNomeCliente">Nome do Cliente</label>
                                </div> -->
                              </div>
                              <div class="parte_3_2 input-field s6">
                                <div class="input-field s3">
                                  <input tabindex="35" value="" type="date" id="cadComprData" name="cadComprData" class="">
                                  <label class="active" for="cadComprData">Data</label>
                                </div>
                                <div class="input-field s3">
                                  <input tabindex="36" value="" type="time" id="cadComprHora" name="cadComprHora" class="">
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
							<div>
								<a id="btnAlteraCompr" class="waves-effect waves-light btn-small"><i class="material-icons right">refresh</i>Alterar</a>
							</div>
							<div>
								<a id="btnExcluiCompr" class="waves-effect waves-light btn-small"><i class="material-icons right">delete_forever</i>Excluir</a>
							</div>
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

                <!-- <div class="row menu_busca">
                  <div class="sub_menu_busca">
                    <div class="row">
                      <div class="input-field col s11">
                        <input tabindex="37" value="" id="buscaAgVend" type="text" class="">
                        <label class="active" for="buscaAgVend">Vendedor</label>
                      </div>
                      <a id="btnBuscaAgVend" class="input-field col s6 waves-effect waves-light btn-small" style="margin-left: 1vw"><i class="material-icons right">search</i>Buscar</a>
                    </div>

                    <div class="row">
                      <div  class="input-field col s11">
                        <input tabindex="38" value="" type="text" class="" id="buscaAgCli">
                        <label class="active" for="buscaAgCli">Cliente</label>
                      </div>
                      <a class="input-field col s6 waves-effect waves-light btn-small" style="margin-left: 1vw" id="btnBuscaAgCli"><i class="material-icons right">search</i>Buscar</a>
                    </div>
                  </div>
                </div> -->
                <div class="scroll-agenda">
                <div class="agenda-compromisso">
                    
					<?php
						$connection = mysqli_connect('localhost', 'root', 'brasileiroo951...', 'projectds'); //The Blank string is the password
						mysqli_select_db($connection, 'projectds');

						$query = "SELECT * FROM compromisso"; //You don't need a ; like you do in SQL
						$data = mysqli_query($connection ,$query);

						while ($compromisso = mysqli_fetch_array($data)) {
						echo "
						<div class='parte_1'>
							<div class='parte_2'>
							<h3>Cliente</h3>
							<div class='parte_3'>
								<p>CPF: ".$compromisso['cpfCliente']."</p>
							</div>
							</div>
							<div class='parte_4'>
							<div class='parte_5'>
								<h3>Vendedor</h3>
								<div class='parte_6'>
								<p>CPF: ".$compromisso['cpfVend']."</p>
								</div>
							</div>
							<div class='parte_7'>
								<h3>Descrição: ".$compromisso['evento']."</h3>
								<div class='parte_8'>
								<p>Data: ".$compromisso['dataDia']."\nHora: ".$compromisso['hora']."</p>
								</div>
							</div>
							</div>
						</div>";
						}

						mysqli_close($connection);
					?>
                    
					<p><?php
							echo $msg;
					?></p>
                </div>
            </article>
        </section>
    </main>
</body>
<script src="js/jQuery.js"></script>
<script src="js/materialize.js"></script>
<script src="js/script.js"></script>
<script src="js/validaCad.js"></script>
<script src="js/verificarCompr.js"></script>
<script src="js/verificarAgenda.js"></script>
<?php
	if ($buscarCliente) {
		print $buscarCliente;
	} else if ($buscarVendedor) {
		print $buscarVendedor;
	} else if ($buscarCompr) {
		print $buscarCompr;
	}
?>
</html>