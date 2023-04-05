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


