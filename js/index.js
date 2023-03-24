alert("Cześć! Czy chcesz zagrać w grę? 😎");

let number = Math.floor(Math.random() * 10);

function play() {
  let userNumber = document.getElementById("userNumber").value;
  let message;

  if (userNumber > number) {
    message = "Twój numer <br> jest za duży🤔";
  } else if (userNumber < number) {
    message = "Twój numer <br> jest za mały🧐";
  } else {
    message = "Gratulacje,<br> to właściwa cyfra😍";
  }

  document.getElementById("message").innerHTML = message;
}
