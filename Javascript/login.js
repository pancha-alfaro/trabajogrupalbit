var nombreUsuario = "usuarioprueba123";
var clave = "12345";


function prueba() {
    
    let usuario = document.getElementById("usuarioinput").value;
    let password = document.getElementById("contrainput").value;
    
    if (nombreUsuario===usuario && clave === password) {
        alert ("ingreso exitoso");
        location.href = "../pages/home.html"
    }else if (nombreUsuario != usuario || contrasena != ingreseContrasena) {
        alert ("error en el ingreso")
        }
}
