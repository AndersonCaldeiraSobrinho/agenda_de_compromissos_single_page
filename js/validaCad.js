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
                }
                formCliente.action = './index.php?action=' + btn.attr('id')
                formCliente.submit()
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
                if (btn.attr('id') == 'btnBuscaVend') {
                    formVendedor.action = './index.php?action=' + btn.attr('id')
                    formVendedor.submit()
                }
                formCliente.action = './index.php?action=' + btn.attr('id')
                formCliente.submit()
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
                    if (btn.attr('id') == 'btnBuscaVend') {
                        formVendedor.action = './index.php?action=' + btn.attr('id')
                        formVendedor.submit()
                    }
                    formCliente.action = './index.php?action=' + btn.attr('id')
                    formCliente.submit()
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
                        if (btn.attr('id') == 'btnBuscaVend') {
                            formVendedor.action = './index.php?action=' + btn.attr('id')
                            formVendedor.submit()
                        }
                        formCliente.action = './index.php?action=' + btn.attr('id')
                        formCliente.submit()
                    }
                    return false
                    
                default:
                    
        }
    });
}




































// Form Client
// const cpfC = document.getElementById('cpfC')
// const nameC = document.getElementById('nameC')
// const phoneC = document.getElementById('phoneC')
// const client = document.cadCliente
// Form Appointment
// const cod = document.getElementById('cod')
// const cpfCompP = document.getElementById('cpfCompP')
// const cpfCompC = document.getElementById('cpfCompC')
// const info = document.getElementById('info')
// const dataStr = document.getElementById('date')
// const appo = document.cadCompromisso

// Form Person
// const cpfP = document.getElementById('cpfP')
// const nameP = document.getElementById('nameP')
// const phoneP = document.getElementById('phoneP')
// const person = document.cadPessoa

// const clearFields = (action) => {
//     person.action = './index.php?action='+action
//     person.submit()
//     return false
// }

// Client's functions
// const registerClient = (action) => {
//     if (!cpfC.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfC.focus()
//     } else if (cpfC.value.length != 11) {
//         alert('Campo CPF precisa ter 11 digitos.')
//         cpfC.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfC.focus()
//     } else if (!nameC.value) {
//         alert('Campo nome é obrigatório.')
//         nameC.focus()
//     } else if (!phoneC.value) {
//         alert('Campo telefone é obrigatório.')
//         phoneC.focus()
//     } else if (phoneC.value.length != 9) {
//         alert('Campo telefone precisa ter 9 dígitos.')
//         phoneC.focus()
//     } else if (isNaN(phoneC.value)) {
//         alert('Campo telefone precisa ser numérico.')
//         phoneC.focus()
//     } else {
//         client.action = './index.php?action='+action
//         client.submit()
//     }
//     return false
// }

// const searchClient = (action) => {
//     if (!cpfC.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfC.focus()
//     } else if (cpfC.value.length != 11) {
//         alert('Campo CPF precisa ter 11 dígitos.')
//         cpfC.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfC.focus()
//     } else {
//         client.action = './index.php?action='+action
//         client.submit()
//     }
//     return false
// }

// const updateClient = (action) => {
//     if (!cpfC.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfC.focus()
//     } else if (cpfC.value.length != 11) {
//         alert('Campo CPF precisa ter 11 digitos.')
//         cpfC.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfC.focus()
//     } else if (!nameC.value) {
//         alert('Campo nome é obrigatório.')
//         nameC.focus()
//     } else if (!phoneC.value) {
//         alert('Campo telefone é obrigatório.')
//         phoneC.focus()
//     } else if (phoneC.value.length != 9) {
//         alert('Campo telefone precisa ter 9 dígitos.')
//         phoneC.focus()
//     } else if (isNaN(phoneC.value)) {
//         alert('Campo telefone precisa ser numérico.')
//         phoneC.focus()
//     } else {
//         client.action = './index.php?action='+action
//         client.submit()
//     }
//     return false
// }

// const deleteClient = (action) => {
//     if (!cpfC.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfC.focus()
//     } else if (cpfC.value.length != 11) {
//         alert('Campo CPF precisa ter 11 dígitos.')
//         cpfC.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfC.focus()
//     } else {
//         client.action = './index.php?action='+action
//         client.submit()
//     }
//     return false
// }

// Person's functions
// const registerPerson = (action) => {
//     if (!cpfP.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfP.focus()
//     } else if (cpfP.value.length != 11) {
//         alert('Campo CPF precisa ter 11 digitos.')
//         cpfP.focus()
//     } else if (isNaN(cpfP.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfP.focus()
//     } else if (!nameP.value) {
//         alert('Campo nome é obrigatório.')
//         nameP.focus()
//     } else if (!phoneP.value) {
//         alert('Campo telefone é obrigatório.')
//         phoneP.focus()
//     } else if (phoneP.value.length != 9) {
//         alert('Campo telefone precisa ter 9 dígitos.')
//         phoneP.focus()
//     } else if (isNaN(phoneP.value)) {
//         alert('Campo telefone precisa ser numérico.')
//         phoneP.focus()
//     } else {
//         person.action = './index.php?action='+action
//         person.submit()
//     }
//     return false
// }

// const searchPerson = (action) => {
//     if (!cpfP.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfP.focus()
//     } else if (cpfP.value.length != 11) {
//         alert('Campo CPF precisa ter 11 dígitos.')
//         cpfP.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfP.focus()
//     } else {
//         person.action = './index.php?action='+action
//         person.submit()
//     }
//     return false
// }

// const updatePerson = (action) => {
//     if (!cpfP.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfP.focus()
//     } else if (cpfP.value.length != 11) {
//         alert('Campo CPF precisa ter 11 digitos.')
//         cpfP.focus()
//     } else if (isNaN(cpfP.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfP.focus()
//     } else if (!nameP.value) {
//         alert('Campo nome é obrigatório.')
//         nameP.focus()
//     } else if (!phoneP.value) {
//         alert('Campo telefone é obrigatório.')
//         phoneP.focus()
//     } else if (phoneP.value.length != 9) {
//         alert('Campo telefone precisa ter 9 dígitos.')
//         phoneP.focus()
//     } else if (isNaN(phoneP.value)) {
//         alert('Campo telefone precisa ser numérico.')
//         phoneP.focus()
//     } else {
//         person.action = './index.php?action='+action
//         person.submit()
//     }
//     return false
// }

// const deletePerson = (action) => {
//     if (!cpfP.value) {
//         alert('Campo CPF é obrigatório.')
//         cpfP.focus()
//     } else if (cpfP.value.length != 11) {
//         alert('Campo CPF precisa ter 11 dígitos.')
//         cpfP.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF precisa ser numérico.')
//         cpfP.focus()
//     } else {
//         person.action = './index.php?action='+action
//         person.submit()
//     }
//     return false
// }

// Appointment's functions
// const registerAppo = (action) => {
//     if (!cod.value) {
//         alert('Campo código é obrigatório.')
//         cod.focus()
//     } else if (isNaN(cod.value)) {
//         alert('Campo código precisa ser numérico')
//         cod.focus()
//     } else if (!cpfCompP.value) {
//         alert('Campo CPF Pessoa é obrigatório.')
//         cpfCompP.focus()
//     } else if (cpfCompP.value.length != 11) {
//         alert('Campo CPF Pessoa precisa ter 11 dígitos.')
//         cpfCompP.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF Pessoa precisa ser numérico.')
//         cpfCompP.focus()
//     } else if (!cpfCompC.value) {
//         alert('Campo CPF Cliente é obrigatório.')
//         cpfCompC.focus()
//     } else if (cpfCompC.value.length != 11) {
//         alert('Campo CPF Cliente precisa ter 11 digitos.')
//         cpfCompC.focus()
//     } else if (isNaN(cpfCompC.value)) {
//         alert('Campo CPF Cliente precisa ser numérico.')
//         cpfCompC.focus()
//     } else if (!info.value) {
//         alert('Campo Descrição do evento é obrigatório.')
//         info.focus()
//     } else if ((((new Date(dataStr.value)).getDate() + 1) - (new Date()).getDate()) < 0) {
//         alert('Data inválida, não pode marcar um compromisso para ontem!')
//         dataStr.value
//     } else {
//         appo.action= './index.php?action='+action
//         appo.submit()
//     }
// }

// const searchAppo = (action) => {
//     if (!cod.value) {
//         alert('Campo código é obrigatório.')
//         cod.focus()
//     } else if (isNaN(cod.value)) {
//         alert('Campo código precisa ser numérico')
//         cod.focus()
//     } else {
//         appo.action = './index.php?action='+action
//         appo.submit()
//     }
//     return false
// }

// const updateAppo = (action) => {
//     if (!cod.value) {
//         alert('Campo código é obrigatório.')
//         cod.focus()
//     } else if (isNaN(cod.value)) {
//         alert('Campo código precisa ser numérico')
//         cod.focus()
//     } else if (!cpfCompP.value) {
//         alert('Campo CPF Pessoa é obrigatório.')
//         cpfCompP.focus()
//     } else if (cpfCompP.value.length != 11) {
//         alert('Campo CPF Pessoa precisa ter 11 dígitos.')
//         cpfCompP.focus()
//     } else if (isNaN(cpfC.value)) {
//         alert('Campo CPF Pessoa precisa ser numérico.')
//         cpfCompP.focus()
//     } else if (!cpfCompC.value) {
//         alert('Campo CPF Cliente é obrigatório.')
//         cpfCompC.focus()
//     } else if (cpfCompC.value.length != 11) {
//         alert('Campo CPF Cliente precisa ter 11 digitos.')
//         cpfCompC.focus()
//     } else if (isNaN(cpfCompC.value)) {
//         alert('Campo CPF Cliente precisa ser numérico.')
//         cpfCompC.focus()
//     } else if (!info.value) {
//         alert('Campo Descrição do evento é obrigatório.')
//         info.focus()
//     } else if ((((new Date(dataStr.value)).getDate() + 1) - (new Date()).getDate()) < 0) {
//         alert('Data inválida, não pode marcar um compromisso para ontem!')
//         dataStr.value
//     } else {
//         appo.action= './index.php?action='+action
//         appo.submit()
//     }
// }

// const deleteAppo = (action) => {
//     if (!cod.value) {
//         alert('Campo código é obrigatório.')
//         cod.focus()
//     } else if (isNaN(cod.value)) {
//         alert('Campo código precisa ser numérico')
//         cod.focus()
//     } else {
//         appo.action = './index.php?action='+action
//         appo.submit()
//     }
//     return false
// }
