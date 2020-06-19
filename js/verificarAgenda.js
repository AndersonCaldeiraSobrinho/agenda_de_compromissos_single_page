function clickBusca(btn, inp){
    btn.on("click", () => {
        if(isNaN(inp.val()) == true || inp.val().length<11) {
            const momentoToast = M.toast({
                html: "Preencha corretamente o campo"
            });
            inp.addClass("invalid");
            inp.removeClass("validate");
            inp.focus();
        } else {
            inp.addClass("validate");
            inp.removeClass("invalid");
        }
                        
            
    });
}

