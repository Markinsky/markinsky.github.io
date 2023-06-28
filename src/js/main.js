
function sendEmail(event){
    event.preventDefault();
    console.log("Si entra ");
    var paramEmail = {
    from_name:  document.getElementById("inputName").value,
    from_email:  document.getElementById("inputEmail").value,
    message: document.getElementById("inputBody").value
    }
    console.log("Email " + paramEmail.from_email + " name " + paramEmail.from_name + " message " + paramEmail.message);
    Swal.fire("Email " + paramEmail.from_email + " name " + paramEmail.from_name + " message " + paramEmail.message);
    emailjs.send("service_8i6s2m5","template_dajyxrh", paramEmail).then(function (res){
        Swal.fire("Correo enviado" + res.status)
    });

}
