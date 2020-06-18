function clickCadCompr(btn, idDesc, descr, idVend, nomeVend, cpfCli, nomeCli, data, hora) {
    

    btn.on("click", () => {

    switch(btn.text()){
        
        //caso limpar campos

        case 'clear_allLimpar':
            idDesc = idDesc.val("");
            descr = descr.val("");
            idVend=idVend.val("");
            nomeVend =nomeVend.val("");
            cpfCli=cpfCli.val("");
            nomeCli=nomeCli.val("");
            data=data.val("");
            hora=hora.val("");

            const momentoToast = M.toast({
                   html: "Campos limpos com sucesso"
               });

            break;

        //caso validar campo de busca
        
        case 'searchBuscar':
            if(idVend.val()!=0){ 
                if(isNaN(idVend.val()) == true || (idVend.val().length<11 && idVend.val().length>11)){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo codigo"
                    });
                    idVend.addClass("invalid");
                    idVend.removeClass("validate");
                    idVend.focus();
                } else {
                    cod.addClass("validate");
                    cod.removeClass("invalid");
                }

                if(cpfCli.val()!=0){ 
                    if(isNaN(cpfCli.val()) == true || (cpfCli.val().length<11 && cpfCli.val().length>11)){
                        const momentoToast = M.toast({
                            html: "Preencha corretamente o campo CPF"
                        });
                        cpfCli.addClass("invalid");
                        cpfCli.removeClass("validate");
                        cpfCli.focus();
                    } else {
                        cpfCli.addClass("validate");
                        cpfCli.removeClass("invalid");
                    }

                if(idDesc.val()!=0){ 
                    if(isNaN(idDesc.val()) == true || (idDesc.val().length<11 && idDesc.val().length>11)){
                        const momentoToast = M.toast({
                            html: "Preencha corretamente o campo CPF"
                        });
                        idDesc.addClass("invalid");
                        idDesc.removeClass("validate");
                        idDesc.focus();
                    } else {
                        cod.addClass("validate");
                        cod.removeClass("invalid");
                    }
            } else {
                cpfCli.addClass("invalid");
                cpfCli.removeClass("validate");
                idVend.addClass("invalid");
                idVend.removeClass("validate");
                idDesc.addClass("invalid");
                idDesc.removeClass("validate");
                idDesc.focus();
            }
            break;

        //caso validar campos cadastro

        case 'sendCadastrar':
            if(isNaN(idVend.val()) == true || idVend.val().length!=11){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo ID vendedor"
                });
                idVend.addClass("invalid");
                idVend.removeClass("validate");
                idVend.focus();
            } else {
                idVend.addClass("validate");
                idVend.removeClass("invalid");
            }

            if(isNaN(cpfCli.val()) == true || cpfCli.val().length!=11){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo CPF cliente"
                });
                cpfCli.addClass("invalid");
                cpfCli.removeClass("validate");
                cpfCli.focus();
            } else {
                cpfCli.addClass("validate");
                cpfCli.removeClass("invalid");
            }

            if(descr.val().length<3) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo descrição"
                });
                descr.addClass("invalid");
                descr.removeClass("validate");
                descr.focus();
            } else {
                descr.addClass("validate");
                descr.removeClass("invalid");
            }

            if(nomeVend.val().length<3) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo Nome vendedor"
                });
                nomeVend.addClass("invalid");
                nomeVend.removeClass("validate");
                nomeVend.focus();
            } else {
                nomeVend.addClass("validate");
                nomeVend.removeClass("invalid");
            }

            if(nomeCli.val().length<3) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo nome cliente"
                });
                nomeCli.addClass("invalid");
                nomeCli.removeClass("validate");
                nomeCli.focus();
            } else {
                nomeCli.addClass("validate");
                nomeCli.removeClass("invalid");
            }

            if(data.val().length==0) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo data"
                });
                data.addClass("invalid");
                data.removeClass("validate");
                data.focus();
            } else {
                data.addClass("validate");
                data.removeClass("invalid");
            }

            if(hora.val().length==0) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo hora"
                });
                hora.addClass("invalid");
                hora.removeClass("validate");
                hora.focus();
            } else {
                hora.addClass("validate");
                hora.removeClass("invalid");
            }

            break;

            //caso validar campos alterar

             case 'refreshAlterar':
                if(isNaN(idVend.val()) == true || idVend.val().length!=11){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo ID vendedor"
                    });
                    idVend.addClass("invalid");
                    idVend.removeClass("validate");
                    idVend.focus();
                } else {
                    idVend.addClass("validate");
                    idVend.removeClass("invalid");
                }
    
                if(isNaN(cpfCli.val()) == true || cpfCli.val().length!=11){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo CPF cliente"
                    });
                    cpfCli.addClass("invalid");
                    cpfCli.removeClass("validate");
                    cpfCli.focus();
                } else {
                    cpfCli.addClass("validate");
                    cpfCli.removeClass("invalid");
                }
    
                if(descr.val().length<3) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo descrição"
                    });
                    descr.addClass("invalid");
                    descr.removeClass("validate");
                    descr.focus();
                } else {
                    descr.addClass("validate");
                    descr.removeClass("invalid");
                }
    
                if(nomeVend.val().length<3) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo Nome vendedor"
                    });
                    nomeVend.addClass("invalid");
                    nomeVend.removeClass("validate");
                    nomeVend.focus();
                } else {
                    nomeVend.addClass("validate");
                    nomeVend.removeClass("invalid");
                }
    
                if(nomeCli.val().length<3) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo nome cliente"
                    });
                    nomeCli.addClass("invalid");
                    nomeCli.removeClass("validate");
                    nomeCli.focus();
                } else {
                    nomeCli.addClass("validate");
                    nomeCli.removeClass("invalid");
                }
    
                if(data.val().length==0) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo data"
                    });
                    data.addClass("invalid");
                    data.removeClass("validate");
                    data.focus();
                } else {
                    data.addClass("validate");
                    data.removeClass("invalid");
                }
    
                if(hora.val().length==0) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo hora"
                    });
                    hora.addClass("invalid");
                    hora.removeClass("validate");
                    hora.focus();
                } else {
                    hora.addClass("validate");
                    hora.removeClass("invalid");
                }
    
                break;

                //caso validar campos deletar

                case 'delete_foreverExcluir':
                    if(isNaN(idDesc.val()) == true || idDesc.val().length<11){
                        const momentoToast = M.toast({
                            html: "Preencha corretamente o campo CPF"
                        });
                        idDesc.addClass("invalid");
                        idDesc.removeClass("validate");
                        idDesc.focus();
                    } else {
                        idDesc.addClass("validate");
                        idDesc.removeClass("invalid");
                    }

                    break;
                    
                default:
                    
        }
    });
}