function creacionDeUsuario() {
    var newUsuario
        newUsuario = {
            nombre : document.getElementById("nuevonombre").value,
            usuario : document.getElementById("nuevousuario").value,
            correo : document.getElementById("nuevocorreo").value,
            clave : document.getElementById("nuevocontra").value
    }
}

function guardarUsuario(){
    var Usuario;
    var Uclave;
    Usuario = localStorage.setItem("usuario",document.getElementById("nuevousuario").value);
    Uclave = localStorage.setItem("clave", document.getElementById("nuevocontra").value);
}


function ingreso() {
    
    let usuario = document.getElementById("usuarioinput").value;
    let password = document.getElementById("contrainput").value;
    
    if ( localStorage.getItem("usuario") == usuario && localStorage.getItem("clave") == password) {
        alert ("ingreso exitoso");
        location.href = "../pages/home.html"
    }else if ( localStorage.getItem("usuario") != usuario || localStorage.getItem("clave") != password) {
        alert ("error en el ingreso")
        }
}

