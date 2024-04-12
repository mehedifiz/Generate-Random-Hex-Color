function generateHexa() {
  const red = parseInt(Math.random() * 255);
  const green = parseInt(Math.random() * 255);
  const blue = parseInt(Math.random() * 255);

  const hexa = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  console.log(hexa);

  return hexa;
}

function generateHexaForText() {
  const text = document.getElementById("text");
  const red = parseInt(Math.random() * 255);
  const green = parseInt(Math.random() * 255);
  const blue = parseInt(Math.random() * 255);

  const hexa2 = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  text.style.color = hexa2;
}

//handle Click
function handleClick() {
  const body = document.getElementById("body");
  const output = document.getElementById("output");

  const Color = generateHexa();
  output.value = Color;

  body.style.backgroundColor = Color;
  generateHexaForText();
}

function copyCode() {
  const outputCode = document.getElementById("output").value;

  window.navigator.clipboard.writeText(outputCode);

 generateToast(`${outputCode} Copied`);

}

function generateToast(msg) {
  const div = document.createElement("div");
  div.className = "toast-msg";
  div.innerText = msg;
  document.body.appendChild(div);

  // Trigger the animation by adding the 'show' class
  setTimeout(() => {
    div.classList.add("show");
  }, 10); // Short delay to ensure the transition occurs

  // Remove the toast message after a few seconds
  setTimeout(() => {
    div.classList.remove("show");
    setTimeout(() => {
      div.remove();
    }, 500); // Wait for the animation to finish before removing the element
  }, 3000); // Display duration
}


//toast mes

handleClick();
