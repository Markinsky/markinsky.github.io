let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputMessage = document.getElementById("inputBody");
let errorMsg = document.getElementById("errorMsg");
function sendEmail(event){
    event.preventDefault();
    let errorText = "";
    let errorTotal = "";
    let from_name = inputName.value;
    let from_email = inputEmail.value;
    let message = inputName.value;

    errorText += validName(from_name, event);
    errorText += validEmail(from_email);
    errorText += validMessage(message);

    if(errorText){
        errorTotal = ` <ul> ${errorText} <ul>` 
        Swal.fire({
            icon: 'error',
            title: 'Tienes errores en los siguientes campos',
            html: errorTotal,
        });
    }else{
        var paramEmail = {
            from_name,
            from_email,
            message
            }
            emailjs.send("service_8i6s2m5","template_dajyxrh", paramEmail).then(function (res){
                Swal.fire({
                    icon: 'success',
                    text: 'Correo enviado'
                });
            });
        
    }
}

function validName(name, event){
    if(name.length <= 3){
        event.preventDefault();
        return "<li> Error en el nombre </li>";
    }
    return "";
}

function validEmail(email){
    if(email.length <= 5){
        return "<li> Error en el email </li>";
    }
    return "";
}

function validMessage(mess){
    if(mess.length <= 5){
        return "<li> Error en el Mensaje </li>";
    }
    return "";
}

function send(){

}