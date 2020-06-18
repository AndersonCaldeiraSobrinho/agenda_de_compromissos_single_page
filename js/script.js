//variaveis mensagens

// variaveis botões cliente

var btnLimpaCliente = $("#btnLimpaCliente");
var btnBuscaCliente = $("#btnBuscaCliente");
var btnCadastraCliente = $("#btnCadastraCliente");
var btnAlteraCliente = $("#btnAlteraCliente");
var btnExcluiCliente = $("#btnExcluiCliente");

// variaveis botões vendedor

var btnLimpaVend = $("#btnLimpaVend");
var btnBuscaVend = $("#btnBuscaVend");
var btnCadastraVend = $("#btnCadastraVend");
var btnAlteraVend = $("#btnAlteraVend");
var btnExcluiVend = $("#btnExcluiVend");

// variaveis botões compromisso

var btnCadastraCompr = $("#btnCadastraCompr");
var btnLimpaCompr = $("#btnLimpaCompr");
var btnBuscaCompr = $("#btnBuscaCompr");
var btnlAlteraCompr = $("btnlAlteraCompr");
var btnExcluiCompr = $("#btnExcluiCompr");

// variaveis botões busca

var btnbuscaVendedor = $("#btnbuscaVendedor");
var btnBuscaCliente = $("#btnBuscaCliente");


//variaveis formulario cadastro clientes

var cadClienteCPF = $("#cadClienteCPF");
var cadClienteNome = $("#cadClienteNome");
var cadClienteRG = $("#cadClienteRG");
var cadClienteEmis = $("#cadClienteEmis");
var cadClienteCEP = $("#cadClienteCEP");
var cadClienteEnd = $("#cadClienteEnd");
var cadClienteNum = $("#cadClienteNum");
var cadClienteComp = $("#cadClienteComp");
var cadClienteBair = $("#cadClienteBair");
var cadClienteEst = $("#cadClienteEst");
var cadClienteDDD1 = $("#cadClienteDDD1");
var cadClienteTel1 = $("#cadClienteTel1");
var cadClienteDDD2 = $("#cadClienteDDD2");
var cadClienteTel2 = $("#cadClienteTel2");



//variaveis formulario cadastro vendedor

var cadVendCod = $("#cadVendCod");
var cadVendNome = $("#cadVendNome");
var cadVendRG = $("#cadVendRG");
var cadVendEmis = $("#cadVendEmis");
var cadVendCPF = $("#cadVendCPF");
var cadVendCEP = $("#cadVendCEP");
var cadVendEnd = $("#cadVendEnd");
var cadVendNum = $("#cadVendNum");
var cadVendComp = $("#cadVendComp");
var cadVendBair = $("#cadVendBair");
var cadVendEst = $("#cadVendEst");
var cadVendDDD1 = $("#cadVendDDD1");
var cadVendTel1 = $("#cadVendTel1");
var cadVendDDD2 = $("#cadVendDDD2");
var cadVendTel2 = $("#cadVendTel2");

//variaveis formulario cadastro compromisso

var cadComprID = $("#cadComprID");
var cadComprIdVend = $("#cadComprIdVend");
var cadComprCpfCliente = $("#cadComprCpfCliente");
var cadComprEvent = $("#cadComprEvent");
var cadComprNomeVend = $("#cadComprNomeVend");
var cadComprNomeCliente = $("#cadComprNomeCliente");
var cadComprData = $("#cadComprData");
var cadComprHora = $("#cadComprHora");

//variaveis busca da agenda

var buscaVendedor = $("#buscaVendedor");
var buscaCliente = $("#buscaCliente");


// chamadas das funções 
$(function(){
  //chamada das funções validar cliente
  clickCadCliente(btnLimpaCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteEmis, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);

  clickCadCliente(btnBuscaCliente, cadClienteCPF);

  clickCadCliente(btnCadastraCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteEmis, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);

  clickCadCliente(btnAlteraCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteEmis, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);

  clickCadCliente(btnExcluiCliente, cadClienteCPF);

  //chamada das funções validar cliente
  clickCadVendedor(btnLimpaVend, cadVendCod, cadVendCPF, cadVendNome, cadVendRG, cadVendEmis, cadVendCEP, cadVendEnd, cadVendNum, cadVendComp, cadVendBair, cadVendEst, cadVendDDD1, cadVendTel1, cadVendDDD2, cadVendTel2);

  clickCadVendedor(btnBuscaVend, cadVendCod);

  clickCadVendedor(btnCadastraVend, cadVendCod, cadVendCPF, cadVendNome, cadVendRG, cadVendEmis, cadVendCEP, cadVendEnd, cadVendNum, cadVendComp, cadVendBair, cadVendEst, cadVendDDD1, cadVendTel1, cadVendDDD2, cadVendTel2);

  clickCadVendedor(btnAlteraVend, cadVendCod, cadVendCPF, cadVendNome, cadVendRG, cadVendEmis, cadVendCEP, cadVendEnd, cadVendNum, cadVendComp, cadVendBair, cadVendEst, cadVendDDD1, cadVendTel1, cadVendDDD2, cadVendTel2);

  clickCadVendedor(btnExcluiVend, cadVendCod);

  //chamada das funções validar compromisso
  clickCadCompr(btnLimpaCompr, idDesc, descr, idVend, nomeVend, cpfCli, nomeCli, data, hora);

  clickCadCompr(btnBuscaCompr, idDesc, idVend, cpfCli);

  clickCadCompr(btnCadastraCompr, idDesc, descr, idVend, nomeVend, cpfCli, nomeCli, data, hora);

  clickCadCompr(btnlAlteraCompr, idDesc, descr, idVend, nomeVend, cpfCli, nomeCli, data, hora);

  clickCadCompr(btnExcluiVend, idDesc, idVend, cpfCli);

  //chamada das funções validar busca

  clickBusca(btnbuscaVendedor, buscaVendedor);

  clickBusca(btnBuscaCliente, buscaCliente);

});




//inicio da secção funçoes materialize
$(document).ready(function() {
    M.updateTextFields();
  });

  $(document).ready(function() {
    $('input.input_text, textarea#textarea2').characterCounter();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });

  //fim da secção funçoes materialize