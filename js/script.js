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
var btnAlteraCompr = $("#btnAlteraCompr");
var btnExcluiCompr = $("#btnExcluiCompr");

// variaveis botões busca

var btnBuscaAgVend = $("#btnBuscaAgVend");
var btnBuscaAgCli = $("#btnBuscaAgCli");


//variaveis formulario cadastro clientes

var cadClienteCPF = $("#cadClienteCPF");
var cadClienteNome = $("#cadClienteNome");
var cadClienteRG = $("#cadClienteRG");
// var cadClienteEmis = $("#cadClienteEmis");
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
// var cadVendEmis = $("#cadVendEmis");
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
// var cadComprNomeVend = $("#cadComprNomeVend");
// var cadComprNomeCliente = $("#cadComprNomeCliente");
var cadComprData = $("#cadComprData");
var cadComprHora = $("#cadComprHora");

//variaveis busca da agenda

var buscaAgVend = $("#buscaAgVend");
var buscaAgCli = $("#buscaAgCli");


// chamadas das funções 
$(function(){
  //chamada das funções validar cliente
  clickValidaCad(btnLimpaCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);

  clickValidaCad(btnBuscaCliente, cadClienteCPF);

  clickValidaCad(btnCadastraCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);

  clickValidaCad(btnAlteraCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);

  clickValidaCad(btnExcluiCliente, cadClienteCPF);

  //chamada das funções validar cliente
  clickValidaCad(btnLimpaVend, cadVendCPF, cadVendNome, cadVendRG, cadVendCEP, cadVendEnd, cadVendNum, cadVendComp, cadVendBair, cadVendEst, cadVendDDD1, cadVendTel1, cadVendDDD2, cadVendTel2);

  clickValidaCad(btnBuscaVend, cadVendCPF);

  clickValidaCad(btnCadastraVend, cadVendCPF, cadVendNome, cadVendRG, cadVendCEP, cadVendEnd, cadVendNum, cadVendComp, cadVendBair, cadVendEst, cadVendDDD1, cadVendTel1, cadVendDDD2, cadVendTel2);

  clickValidaCad(btnAlteraVend, cadVendCPF, cadVendNome, cadVendRG, cadVendCEP, cadVendEnd, cadVendNum, cadVendComp, cadVendBair, cadVendEst, cadVendDDD1, cadVendTel1, cadVendDDD2, cadVendTel2);

  clickValidaCad(btnExcluiVend, cadVendCPF);

  //chamada das funções validar compromisso
  clickCadCompr(btnLimpaCompr, cadComprID, cadComprEvent, cadComprIdVend, cadComprCpfCliente, cadComprData, cadComprHora);

  clickCadCompr(btnBuscaCompr, cadComprID, cadComprIdVend, cadComprCpfCliente);

  clickCadCompr(btnCadastraCompr, cadComprID, cadComprEvent, cadComprIdVend, cadComprCpfCliente, cadComprData, cadComprHora);

  clickCadCompr(btnAlteraCompr, cadComprID, cadComprEvent, cadComprIdVend, cadComprCpfCliente, cadComprData, cadComprHora);

  clickCadCompr(btnExcluiCompr, cadComprID, cadComprIdVend, cadComprCpfCliente);

  //chamada das funções validar busca

  clickBusca(btnBuscaAgCli, buscaAgCli);

  clickBusca(btnBuscaAgVend, buscaAgVend);

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