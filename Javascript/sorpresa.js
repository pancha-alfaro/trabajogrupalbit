var sum = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function writenumber() {
  document.getElementById("p1").innerHTML = getRandomInt(7);
}

function writenumber2() {
  document.getElementById("p2").innerHTML = getRandomInt(7);
}

function addNumbers() {
  var num1 = parseInt(document.getElementById("p1").innerHTML);
  var num2 = parseInt(document.getElementById("p2").innerHTML);
  sum = num1 + num2;
  document.getElementById("resultadosum").innerHTML = sum;
}

function promocion() {
  switch(true) {
    case (sum < 3):
      document.getElementById("resultadoprom").innerHTML = "Te has ganado 10% off! Tu código es 01229";
      break;
    case (sum >= 3):
      document.getElementById("resultadoprom").innerHTML = "Te has ganado 20% off! Tu código es 01329";
      break;
    case (sum >= 5):
      document.getElementById("resultadoprom").innerHTML = "Te has ganado 30% off! Tu código es 01429";
      break;
    default:
      document.getElementById("resultadoprom").innerHTML = "Intenta mañana nuevamente!";
  }
}

function redimir() {
  let codigoprompt;
  const codigouno = 01229;
  const codigodos = 01329;
  const codigotres = 01429;

  
  codigoprompt = parseInt(prompt("Ingrese su código"));

  if (codigoprompt == codigouno || codigoprompt == codigodos || codigoprompt == codigotres ) {
    
    alert("Código correcto! Elije lo que quieras!");
    location.href = "../pages/tienda.html";

  } else {
    
    for (counter = 1; counter <= 2; counter++) {
      codigoprompt = parseInt(prompt("Ingrese su código nuevamente"));
      alert(`Código inválido, intento ${counter}`);
      
  }
  if (counter > 2) {
      alert("Código inválido");
      location.href = "../pages/home.html";
  }
  }

}


