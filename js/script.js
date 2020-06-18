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

var cadVendCod = $("#cadVendCod").val();
var cadVendNome = $("#cadVendNome").val();
var cadVendRG = $("#cadVendRG").val();
var cadVendEmis = $("#cadVendEmis").val();
var cadVendCPF = $("#cadVendCPF").val();
var cadVendCEP = $("#cadVendCEP").val();
var cadVendEnd = $("#cadVendEnd").val();
var cadVendNum = $("#cadVendNum").val();
var cadVendComp = $("#cadVendComp").val();
var cadVendBair = $("#cadVendBair").val();
var cadVendEst = $("#cadVendEst").val();
var cadVendDDD1 = $("#cadVendDDD1").val();
var cadVendTel1 = $("#cadVendTel1").val();
var cadVendDDD2 = $("#cadVendDDD2").val();
var cadVendTel2 = $("#cadVendTel2").val();

//variaveis formulario cadastro compromisso

var cadComprID = $("#cadComprID").val();
var cadComprIdVend = $("#cadComprIdVend").val();
var cadComprCpfCliente = $("#cadComprCpfCliente").val();
var cadComprEvent = $("#cadComprEvent").val();
var cadComprNomeVend = $("#cadComprNomeVend").val();
var cadComprNomeCliente = $("#cadComprNomeCliente").val();
var cadComprData = $("#cadComprData").val();
var cadComprHora = $("#cadComprHora").val();

//variaveis busca da agenda

var buscaVendedor = $("#buscaVendedor").val();
var buscaCliente = $("#buscaCliente").val();


// chamadas das funções 
$(function(){
  clickCadCliente(btnLimpaCliente, cadClienteCPF, cadClienteNome, cadClienteRG, cadClienteEmis, cadClienteCEP, cadClienteEnd, cadClienteNum, cadClienteComp, cadClienteBair, cadClienteEst, cadClienteDDD1, cadClienteTel1, cadClienteDDD2, cadClienteTel2);
  clickCadCliente(btnBuscaCliente, cadClienteCPF);


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