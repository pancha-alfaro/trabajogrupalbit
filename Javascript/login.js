var nombreUsuario = "usuarioprueba123";
var clave = "12345";



function ingreso() {
    
    let usuario = document.getElementById("usuarioinput").value;
    let password = document.getElementById("contrainput").value;
    
    if (nombreUsuario===usuario && clave === password) {
        alert ("Ingreso exitoso");
        location.href = "../pages/home.html"
    }else if (nombreUsuario != usuario || contrasena != ingreseContrasena) {
        alert ("Error en el ingreso")
        }
}