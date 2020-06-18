function clickCadCliente(btn, cpf, nome, rg, emis, cep, end, num, compl, bairro, est, ddd1, tel1, ddd2, tel2) {
    

    btn.on("click", () => {

    switch(btn.text()){
        
        //caso limpar campos

        case 'clear_allLimpar':
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
            if(isNaN(cpf.val()) == true || cpf.val().length<11){
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

            break;

        //caso validar campos cadastro

        case 'sendCadastrar':
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

                //caso validar campos excluir

                case 'delete_foreverExcluir':
                    if(isNaN(cpf.val()) == true || cpf.val().length<11){
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
                    
                    break;
                    
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
