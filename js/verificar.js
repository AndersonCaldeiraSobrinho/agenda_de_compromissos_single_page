function clickCadCliente(btn, cpf, nome, rg, emis, cep, end, num, compl, bairro, est, ddd1, tel1, ddd2, tel2) {
    

    btn.on("click", () => {

    switch(btn.text()){
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
                   html: "Campos limpos"
               });

            break;
        case 'searchBuscar':
            if(isNaN(cpf) == false || cpf.length<11){
                const momentoToast = M.toast({
                    html: "Preencha corretamente o campo CPF"
                });
            } else {
                const momentoToast = M.toast({
                    html: "Pesquisa realizada com sucesso"
                });
            }
            console.log(btn.text());
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
