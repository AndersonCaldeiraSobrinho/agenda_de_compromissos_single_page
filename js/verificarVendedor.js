function clickCadVendedor(btn, cod, cpf, nome, rg, emis, cep, end, num, compl, bairro, est, ddd1, tel1, ddd2, tel2) {
    

    btn.on("click", () => {

    switch(btn.text()){
        
        //caso limpar campos

        case 'clear_allLimpar':
            cod = cod.val("");
            cpf = cpf.val("");
            nome=nome.val("");
            rg =rg.val("");
            emis=emis.val("");
            cep=cep.val("");
            end=end.val("");
            num=num.val("");
            compl=compl.val("");
            bairro=bairro.val("");
            est=est.val("");
            ddd1=ddd1.val("");
            tel1=tel1.val("");
            ddd2=ddd2.val("");
            tel2=tel2.val("");

            const momentoToast = M.toast({
                   html: "Campos limpos com sucesso"
               });

            break;

        //caso validar campo de busca

        case 'searchBuscar':
            if(isNaN(cod.val()) == true || cod.val().length<11){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo CPF"
                });
                cod.addClass("invalid");
                cod.removeClass("validate");
                cod.focus();
            } else {
                cod.addClass("validate");
                cod.removeClass("invalid");
            }
            
            break;

        //caso validar campos cadastro

        case 'sendCadastrar':
            if(isNaN(cod.val()) == true || cod.val().length!=11){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo CPF"
                });
                cod.addClass("invalid");
                cod.removeClass("validate");
                cod.focus();
            } else {
                cod.addClass("validate");
                cod.removeClass("invalid");
            }

            if(isNaN(cpf.val()) == true || cpf.val().length!=11){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo CPF"
                });
                cpf.addClass("invalid");
                cpf.removeClass("validate");
                cpf.focus();
            } else {
                cpf.addClass("validate");
                cpf.removeClass("invalid");
            }

            if(nome.val().length<3) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo Nome"
                });
                nome.addClass("invalid");
                nome.removeClass("validate");
                nome.focus();
            } else {
                nome.addClass("validate");
                nome.removeClass("invalid");
            }

            if(rg.val().length>=15 || rg.val().length<5) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo RG"
                });
                rg.addClass("invalid");
                rg.removeClass("validate");
                rg.focus();
            } else {
                rg.addClass("validate");
                rg.removeClass("invalid");
            }

            if(isNaN(emis.val())==false) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo emissor"
                });
                emis.addClass("invalid");
                emis.removeClass("validate");
                emis.focus();
            } else {
                emis.addClass("validate");
                emis.removeClass("invalid");
            }

            if(isNaN(cep.val()) == true || cep.val().length!=9) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo C.E.P."
                });
                cep.addClass("invalid");
                cep.removeClass("validate");
                cep.focus();
            } else {
                cep.addClass("validate");
                cep.removeClass("invalid");
            }

            if(end.val().length < 3) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo endereço"
                });
                end.addClass("invalid");
                end.removeClass("validate");
                end.focus();
            } else {
                end.addClass("validate");
                end.removeClass("invalid");
            }

            if(isNaN(num.val()) == true) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo numero"
                });
                num.addClass("invalid");
                num.removeClass("validate");
                num.focus();
            } else {
                num.addClass("validate");
                num.removeClass("invalid");
            }

            if(bairro.val().length < 5) {
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo bairro"
                });
                bairro.addClass("invalid");
                bairro.removeClass("validate");
                bairro.focus();
            } else {
                bairro.addClass("validate");
                bairro.removeClass("invalid");
            }

            if(isNaN(ddd1.val()) == true || (ddd1.val().length<=1 || ddd1.val().length >3)){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo DDD"
                });
                ddd1.addClass("invalid");
                ddd1.removeClass("validate");
                ddd1.focus();
            } else {
                ddd1.addClass("validate");
                ddd1.removeClass("invalid");
            }

            if(isNaN(tel1.val()) == true || (tel1.val().length!=8 || tel1.val().length !=9)){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo telefone"
                });
                tel1.addClass("invalid");
                tel1.removeClass("validate");
                tel1.focus();
            } else {
                tel1.addClass("validate");
                tel1.removeClass("invalid");
            }

            if(isNaN(ddd2.val()) == true || (ddd2.val().length<=1 || ddd2.val().length >3)){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo DDD"
                });
                ddd2.addClass("invalid");
                ddd2.removeClass("validate");
                ddd2.focus();
            } else {
                ddd2.addClass("validate");
                ddd2.removeClass("invalid");
            }

            if(isNaN(tel2.val()) == true || (tel2.val().length!=8 || tel2.val().length !=9)){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo telefone"
                });
                tel2.addClass("invalid");
                tel2.removeClass("validate");
                tel2.focus();
            } else {
                tel2.addClass("validate");
                tel2.removeClass("invalid");
            }

            break;

            //caso validar campos alterar

             case 'refreshAlterar':
                if(isNaN(cod.val()) == true || cod.val().length!=11){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo CPF"
                    });
                    cod.addClass("invalid");
                    cod.removeClass("validate");
                    cod.focus();
                } else {
                    cod.addClass("validate");
                    cod.removeClass("invalid");
                }
                
                if(isNaN(cpf.val()) == true || cpf.val().length!=11){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo CPF"
                    });
                    cpf.addClass("invalid");
                    cpf.removeClass("validate");
                    cpf.focus();
                } else {
                    cpf.addClass("validate");
                    cpf.removeClass("invalid");
                }
    
                if(nome.val().length<3) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo Nome"
                    });
                    nome.addClass("invalid");
                    nome.removeClass("validate");
                    nome.focus();
                } else {
                    nome.addClass("validate");
                    nome.removeClass("invalid");
                }
    
                if(rg.val().length>=15 || rg.val().length<5) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo RG"
                    });
                    rg.addClass("invalid");
                    rg.removeClass("validate");
                    rg.focus();
                } else {
                    rg.addClass("validate");
                    rg.removeClass("invalid");
                }
    
                if(isNaN(emis.val())==false) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo emissor"
                    });
                    emis.addClass("invalid");
                    emis.removeClass("validate");
                    emis.focus();
                } else {
                    emis.addClass("validate");
                    emis.removeClass("invalid");
                }
    
                if(isNaN(cep.val()) == true || cep.val().length!=9) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo C.E.P."
                    });
                    cep.addClass("invalid");
                    cep.removeClass("validate");
                    cep.focus();
                } else {
                    cep.addClass("validate");
                    cep.removeClass("invalid");
                }
    
                if(end.val().length < 3) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo endereço"
                    });
                    end.addClass("invalid");
                    end.removeClass("validate");
                    end.focus();
                } else {
                    end.addClass("validate");
                    end.removeClass("invalid");
                }
    
                if(isNaN(num.val()) == true) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo numero"
                    });
                    num.addClass("invalid");
                    num.removeClass("validate");
                    num.focus();
                } else {
                    num.addClass("validate");
                    num.removeClass("invalid");
                }
    
                if(bairro.val().length < 5) {
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo bairro"
                    });
                    bairro.addClass("invalid");
                    bairro.removeClass("validate");
                    bairro.focus();
                } else {
                    bairro.addClass("validate");
                    bairro.removeClass("invalid");
                }
    
                if(isNaN(ddd1.val()) == true || (ddd1.val().length<=1 || ddd1.val().length >3)){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo DDD"
                    });
                    ddd1.addClass("invalid");
                    ddd1.removeClass("validate");
                    ddd1.focus();
                } else {
                    ddd1.addClass("validate");
                    ddd1.removeClass("invalid");
                }
    
                if(isNaN(tel1.val()) == true || (tel1.val().length!=8 || tel1.val().length !=9)){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo telefone"
                    });
                    tel1.addClass("invalid");
                    tel1.removeClass("validate");
                    tel1.focus();
                } else {
                    tel1.addClass("validate");
                    tel1.removeClass("invalid");
                }
    
                if(isNaN(ddd2.val()) == true || (ddd2.val().length<=1 || ddd2.val().length >3)){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo DDD"
                    });
                    ddd2.addClass("invalid");
                    ddd2.removeClass("validate");
                    ddd2.focus();
                } else {
                    ddd2.addClass("validate");
                    ddd2.removeClass("invalid");
                }
    
                if(isNaN(tel2.val()) == true || (tel2.val().length!=8 || tel2.val().length !=9)){
                    const momentoToast = M.toast({
                        html: "Preencha corretamente o campo telefone"
                    });
                    tel2.addClass("invalid");
                    tel2.removeClass("validate");
                    tel2.focus();
                } else {
                    tel2.addClass("validate");
                    tel2.removeClass("invalid");
                }
    
                break;

                //caso validar campos deletar

                case 'delete_foreverExcluir':
                    if(isNaN(cod.val()) == true || cod.val().length<11){
                        const momentoToast = M.toast({
                            html: "Preencha corretamente o campo CPF"
                        });
                        cod.addClass("invalid");
                        cod.removeClass("validate");
                        cod.focus();
                    } else {
                        cod.addClass("validate");
                        cod.removeClass("invalid");
                    }
                    
                    break;
                    
                default:
                    
        }
    });
}