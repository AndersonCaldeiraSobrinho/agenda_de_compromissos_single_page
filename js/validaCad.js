function clickValidaCad(btn, cpf, nome, rg, cep, end, num, compl, bairro, est, ddd1, tel1, ddd2, tel2) {
    
    const formCliente = document.getElementById('formCliente')
    const formVendedor = document.getElementById('formVendedor')
    btn.on("click", () => {

    switch(btn.text()){
        
        //caso limpar campos

        case 'clear_allLimpar':
            cpf     = cpf.val("");
            nome    = nome.val("");
            rg      = rg.val("");
            cep     = cep.val("");
            end     = end.val("");
            num     = num.val("");
            compl   = compl.val("");
            bairro  = bairro.val("");
            est     = est.val("");
            ddd1    = ddd1.val("");
            tel1    = tel1.val("");
            ddd2    = ddd2.val("");
            tel2    = tel2.val("");

            const momentoToast = M.toast({
                   html: "Campos limpos com sucesso"
            });

            break;

        //caso validar campo de busca

        case 'searchBuscar':
            if (!cpf.val().length) {
                cpf.addClass('invalid')
                cpf.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF"
                })
            } else if (isNaN(cpf.val())) {
                cpf.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF com valors numéricos"
                })
            } else {
                cpf.removeClass('invalid')
                cpf.addClass('validate')
                cpf.focus()
                if (btn.attr('id') == 'btnBuscaVend') {
                    formVendedor.action = './index.php?action=' + btn.attr('id')
                    formVendedor.submit()
                } else {
                    formCliente.action = './index.php?action=' + btn.attr('id')
                    formCliente.submit()
                }
            }
            return false

        //caso validar campos cadastro

        case 'sendCadastrar':
            if (!cpf.val().length) {
                cpf.addClass('invalid')
                cpf.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF"
                })
            } else if (isNaN(cpf.val())) {
                cpf.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF com valores numéricos"
                })
            } else if (cpf.val().length < 11) {
                cpf.focus()
                const momentoToast = M.toast ({
                    html: "O campo CPF precisa ter 11 dígitos"
                })
            } else if (!nome.val().length) {
                cpf.removeClass('invalid')
                cpf.addClass('validate')
                nome.addClass('invalid')
                nome.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Nome"
                })
            } else if (!rg.val().length) {
                nome.removeClass('invalid')
                nome.addClass('validate')
                rg.addClass('invalid')
                rg.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo RG"
                })
            } else if (!cep.val().length) {
                rg.removeClass('invalid')
                rg.addClass('validate')
                cep.addClass('invalid')
                cep.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CEP"
                })
            } else if (isNaN(cep.val())) {
                cep.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CEP com valores numéricos"
                })
            } else if (cep.val() < 8) {
                cep.focus()
                const momentoToast = M.toast ({
                    html: "O campo CEP precisa ter 8 digitos"
                })
            } else if (!end.val().length) {
                cep.removeClass('invalid')
                cep.addClass('validate')
                end.addClass('invalid')
                end.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Endereço"
                })
            } else if (!num.val().length) {
                end.removeClass('invalid')
                end.addClass('validate')
                num.addClass('invalid')
                num.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Num"
                })
            } else if (!compl.val().length) {
                num.removeClass('invalid')
                num.addClass('validate')
                compl.addClass('invalid')
                compl.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Complemento"
                })
            } else if (!bairro.val().length) {
                compl.removeClass('invalid')
                compl.addClass('validate')
                bairro.addClass('invalid')
                bairro.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Bairro"
                })
            } else if (!est.children("option:selected").val().length) {
                bairro.removeClass('invalid')
                bairro.addClass('validate')
                est.addClass('invalid')
                est.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Estado"
                })
            } else if (!ddd1.val().length) {
                est.removeClass('invalid')
                est.addClass('validate')
                ddd1.addClass('invalid')
                ddd1.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo DDD"
                })
            } else if (isNaN(ddd1.val())) {
                ddd1.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo DDD com valores numéricos"
                })
            } else if (ddd1.val().length < 3) {
                ddd1.focus()
                const momentoToast = M.toast ({
                    html: "O campo DDD precisa ter 3 digitos"
                })
            } else if (!tel1.val().length) {
                ddd1.removeClass('invalid')
                ddd1.addClass('validate')
                tel1.addClass('invalid')
                tel1.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Telefone"
                })
            } else if (isNaN(tel1.val())) {
                tel1.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Telefone com valores numéricos"
                })
            } else if (tel1.val().length < 8) {
                tel1.focus()
                const momentoToast = M.toast ({
                    html: "O campo Telefone precisa ter 8 digitos"
                })
            } else if (!ddd2.val().length) {
                tel1.removeClass('invalid')
                tel1.addClass('validate')
                ddd2.addClass('invalid')
                ddd2.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo DDD"
                })
            } else if (isNaN(ddd2.val())) {
                ddd2.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo DDD com valores numéricos"
                })
            } else if (ddd2.val().length < 3) {
                ddd2.focus()
                const momentoToast = M.toast ({
                    html: "O campo DDD precisa ter 3 digitos"
                })
            } else if (!tel2.val().length) {
                ddd2.removeClass('invalid')
                ddd2.addClass('validate')
                tel2.addClass('invalid')
                tel2.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Celular"
                })
            } else if (isNaN(tel2.val())) {
                tel2.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Celular com valores numéricos"
                })
            } else if (tel2.val().length < 3) {
                tel2.focus()
                const momentoToast = M.toast ({
                    html: "O campo Celular precisa ter 3 digitos"
                })
            } else {
                tel2.removeClass('invalid')
                tel2.addClass('validate')
                tel2.focus()
                if (btn.attr('id') != 'btnCadastraVend') {
                    formCliente.action = './index.php?action=' + btn.attr('id')
                    formCliente.submit()
                } else {
                    formVendedor.action = './index.php?action=' + btn.attr('id')
                    formVendedor.submit()
                }
            }
            return false


            //caso validar campos alterar
             case 'refreshAlterar':
                if (!cpf.val().length) {
                    cpf.addClass('invalid')
                    cpf.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CPF"
                    })
                } else if (isNaN(cpf.val())) {
                    cpf.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CPF com valores numéricos"
                    })
                } else if (cpf.val().length < 11) {
                    cpf.focus()
                    const momentoToast = M.toast ({
                        html: "O campo CPF precisa ter 11 dígitos"
                    })
                } else if (!nome.val().length) {
                    cpf.removeClass('invalid')
                    cpf.addClass('validate')
                    nome.addClass('invalid')
                    nome.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Nome"
                    })
                } else if (!rg.val().length) {
                    nome.removeClass('invalid')
                    nome.addClass('validate')
                    rg.addClass('invalid')
                    rg.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo RG"
                    })
                } else if (!cep.val().length) {
                    rg.removeClass('invalid')
                    rg.addClass('validate')
                    cep.addClass('invalid')
                    cep.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CEP"
                    })
                } else if (isNaN(cep.val())) {
                    cep.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CEP com valores numéricos"
                    })
                } else if (cep.val() < 8) {
                    cep.focus()
                    const momentoToast = M.toast ({
                        html: "O campo CEP precisa ter 8 digitos"
                    })
                } else if (!end.val().length) {
                    cep.removeClass('invalid')
                    cep.addClass('validate')
                    end.addClass('invalid')
                    end.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Endereço"
                    })
                } else if (!num.val().length) {
                    end.removeClass('invalid')
                    end.addClass('validate')
                    num.addClass('invalid')
                    num.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Num"
                    })
                } else if (!compl.val().length) {
                    num.removeClass('invalid')
                    num.addClass('validate')
                    compl.addClass('invalid')
                    compl.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Complemento"
                    })
                } else if (!bairro.val().length) {
                    compl.removeClass('invalid')
                    compl.addClass('validate')
                    bairro.addClass('invalid')
                    bairro.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Bairro"
                    })
                } else if (!est.children("option:selected").val().length) {
                    bairro.removeClass('invalid')
                    bairro.addClass('validate')
                    est.addClass('invalid')
                    est.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Estado"
                    })
                } else if (!ddd1.val().length) {
                    est.removeClass('invalid')
                    est.addClass('validate')
                    ddd1.addClass('invalid')
                    ddd1.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo DDD"
                    })
                } else if (isNaN(ddd1.val())) {
                    ddd1.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo DDD com valores numéricos"
                    })
                } else if (ddd1.val().length < 3) {
                    ddd1.focus()
                    const momentoToast = M.toast ({
                        html: "O campo DDD precisa ter 3 digitos"
                    })
                } else if (!tel1.val().length) {
                    ddd1.removeClass('invalid')
                    ddd1.addClass('validate')
                    tel1.addClass('invalid')
                    tel1.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Telefone"
                    })
                } else if (isNaN(tel1.val())) {
                    tel1.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Telefone com valores numéricos"
                    })
                } else if (tel1.val().length < 8) {
                    tel1.focus()
                    const momentoToast = M.toast ({
                        html: "O campo Telefone precisa ter 8 digitos"
                    })
                } else if (!ddd2.val().length) {
                    tel1.removeClass('invalid')
                    tel1.addClass('validate')
                    ddd2.addClass('invalid')
                    ddd2.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo DDD"
                    })
                } else if (isNaN(ddd2.val())) {
                    ddd2.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo DDD com valores numéricos"
                    })
                } else if (ddd2.val().length < 3) {
                    ddd2.focus()
                    const momentoToast = M.toast ({
                        html: "O campo DDD precisa ter 3 digitos"
                    })
                } else if (!tel2.val().length) {
                    ddd2.removeClass('invalid')
                    ddd2.addClass('validate')
                    tel2.addClass('invalid')
                    tel2.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Celular"
                    })
                } else if (isNaN(tel2.val())) {
                    tel2.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Celular com valores numéricos"
                    })
                } else if (tel2.val().length < 3) {
                    tel2.focus()
                    const momentoToast = M.toast ({
                        html: "O campo Celular precisa ter 3 digitos"
                    })
                } else {
                    tel2.removeClass('invalid')
                    tel2.addClass('validate')
                    tel2.focus()
                    if (btn.attr('id') == 'btnAlteraVend') {
                        formVendedor.action = './index.php?action=' + btn.attr('id')
                        formVendedor.submit()
                    } else {
                        formCliente.action = './index.php?action=' + btn.attr('id')
                        formCliente.submit()
                    }
                }
                return false


                //caso validar campos excluir
                case 'delete_foreverExcluir':
                    if (!cpf.val().length) {
                        cpf.addClass('invalid')
                        cpf.focus()
                        const momentoToast = M.toast ({
                            html: "Preencha o campo CPF"
                        })
                    } else if (isNaN(cpf.val())) {
                        cpf.focus()
                        const momentoToast = M.toast ({
                            html: "Preencha o campo CPF com valors numéricos"
                        })
                    } else {
                        cpf.removeClass('invalid')
                        cpf.addClass('validate')
                        cpf.focus()
                        if (btn.attr('id') == 'btnExcluiVend') {
                            formVendedor.action = './index.php?action=' + btn.attr('id')
                            formVendedor.submit()
                        } else {
                            formCliente.action = './index.php?action=' + btn.attr('id')
                            formCliente.submit()
                        }
                    }
                    return false
                    
                default:
                    
        }
    });
}