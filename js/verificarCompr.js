function clickCadCompr(btn, idDesc, descr, cpfVend, cpfCli, data, hora) {
    
    const formCompr = document.getElementById('formCompr')
    
    btn.on("click", () => {

    switch(btn.text()){
        
        //caso limpar campos

        case 'clear_allLimpar':
            idDesc  = idDesc.val("");
            descr   = descr.val("");
            cpfVend = cpfVend.val("");
            cpfCli  = cpfCli.val("");
            data    = data.val("");
            hora    = hora.val("");

            const momentoToast = M.toast({
                   html: "Campos limpos com sucesso"
            });

            break;

        //caso validar campo de busca
        
        case 'searchBuscar':
            if (!idDesc.val().length) {
                idDesc.addClass('invalid')
                idDesc.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo ID"
                })
            } else if (isNaN(idDesc.val())) {
                idDesc.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo ID com valores numéricos"
                })
            } else {
                idDesc.removeClass('invalid')
                idDesc.addClass('validate')
                idDesc.focus()
                formCompr.action    = './index.php?action=' + btn.text()
                formCompr.submit()
            }
            return false

        //caso validar campos cadastro

        case 'sendCadastrar':
            if (!idDesc.val().length) {
                idDesc.addClass('invalid')
                idDesc.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo ID"
                })
            } else if (isNaN(idDesc.val())) {
                idDesc.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo ID com valores numéricos"
                })
            } else if (!descr.val().length) {
                idDesc.removeClass('invalid')
                idDesc.addClass('validate')
                descr.addClass('invalid')
                descr.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Descrição"
                })
            } else if (!cpfVend.val().length) {
                descr.removeClass('invalid')
                descr.addClass('validate')
                cpfVend.addClass('invalid')
                cpfVend.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF Vendedor"
                })
            } else if (isNaN(cpfVend.val())) {
                cpfVend.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF Vendedor com valores numéricos"
                })
            } else if (cpfVend.val().length < 11) {
                cpfVend.focus()
                const momentoToast = M.toast ({
                    html: "O campo CPF Vendedor precisa ter 11 dígitos"
                })
            }  else if (!cpfCli.val().length) {
                cpfVend.removeClass('invalid')
                cpfVend.addClass('validate')
                cpfCli.addClass('invalid')
                cpfCli.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF Cliente"
                })
            } else if (isNaN(cpfCli.val())) {
                cpfCli.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo CPF Cliente com valores numéricos"
                })
            } else if (cpfCli.val().length < 11) {
                cpfCli.focus()
                const momentoToast = M.toast ({
                    html: "O campo CPF Cliente precisa ter 11 dígitos"
                })
            } else if (!data.val().length) {
                cpfCli.removeClass('invalid')
                cpfCli.addClass('validate')
                data.addClass('invalid')
                data.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Data"
                })
            } else if ((((new Date(data.val())).getDate() + 1) - (new Date()).getDate()) < 0) {
                data.focus()
                const momentoToast = M.toast ({
                    html: "Data inválida, não pode marcar um compromisso para ontem"
                })
            } else if (!hora.val().length) {
                data.removeClass('invalid')
                data.addClass('validate')
                hora.addClass('invalid')
                hora.focus()
                const momentoToast = M.toast ({
                    html: "Preencha o campo Hora"
                })
            } else {
                hora.removeClass('invalid')
                hora.addClass('validate')
                hora.focus()
                formCompr.action    = './index.php?action=' + btn.text()
                formCompr.submit()
            }
            return false

            //caso validar campos alterar

             case 'refreshAlterar':
                if (!idDesc.val().length) {
                    idDesc.addClass('invalid')
                    idDesc.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo ID"
                    })
                } else if (isNaN(idDesc.val())) {
                    idDesc.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo ID com valores numéricos"
                    })
                } else if (!descr.val().length) {
                    idDesc.removeClass('invalid')
                    idDesc.addClass('validate')
                    descr.addClass('invalid')
                    descr.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Descrição"
                    })
                } else if (!cpfVend.val().length) {
                    descr.removeClass('invalid')
                    descr.addClass('validate')
                    cpfVend.addClass('invalid')
                    cpfVend.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CPF Vendedor"
                    })
                } else if (isNaN(cpfVend.val())) {
                    cpfVend.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CPF Vendedor com valores numéricos"
                    })
                } else if (cpfVend.val().length < 11) {
                    cpfVend.focus()
                    const momentoToast = M.toast ({
                        html: "O campo CPF Vendedor precisa ter 11 dígitos"
                    })
                }  else if (!cpfCli.val().length) {
                    cpfVend.removeClass('invalid')
                    cpfVend.addClass('validate')
                    cpfCli.addClass('invalid')
                    cpfCli.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CPF Cliente"
                    })
                } else if (isNaN(cpfCli.val())) {
                    cpfCli.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo CPF Cliente com valores numéricos"
                    })
                } else if (cpfCli.val().length < 11) {
                    cpfCli.focus()
                    const momentoToast = M.toast ({
                        html: "O campo CPF Cliente precisa ter 11 dígitos"
                    })
                } else if (!data.val().length) {
                    cpfCli.removeClass('invalid')
                    cpfCli.addClass('validate')
                    data.addClass('invalid')
                    data.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Data"
                    })
                } else if ((((new Date(data.val())).getDate() + 1) - (new Date()).getDate()) < 0) {
                    data.focus()
                    const momentoToast = M.toast ({
                        html: "Data inválida, não pode marcar um compromisso para ontem"
                    })
                } else if (!hora.val().length) {
                    data.removeClass('invalid')
                    data.addClass('validate')
                    hora.addClass('invalid')
                    hora.focus()
                    const momentoToast = M.toast ({
                        html: "Preencha o campo Hora"
                    })
                } else {
                    hora.removeClass('invalid')
                    hora.addClass('validate')
                    hora.focus()
                    formCompr.action    = './index.php?action=' + btn.text()
                    formCompr.submit()
                }
                return false

                //caso validar campos deletar

                case 'delete_foreverExcluir':
                    if (!idDesc.val().length) {
                        // return alert(btn.text())
                        // return alert(idDesc.val().length)
                        const momentoToast = M.toast ({
                            html: "Preencha o campo ID"
                        })
                        idDesc.addClass('invalid')
                        idDesc.removeClass('validate')
                        idDesc.focus()
                    } else if (isNaN(idDesc.val())) {
                        const momentoToast = M.toast ({
                            html: "Preencha o campo ID com valores numéricos"
                        })
                        idDesc.focus()
                        // return alert('number')
                    } else {
                        idDesc.removeClass('invalid')
                        idDesc.addClass('validate')
                        idDesc.focus()
                        formCompr.action    = './index.php?action=' + btn.text()
                        formCompr.submit()
                    }
                    return false
                    
                default:
                    
        }
    });
}