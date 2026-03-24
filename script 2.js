console.log("Escape room script loaded!");
const firstClue=document.querySelector(".clue")
const secretMessage=document.querySelector("#secret-message")


firstClue.addEventListener("click", function () {
    secretMessage.style.display="block";
})
const submitButton = document.querySelector("#submit-code");
const doorCodeInput = document.querySelector("#door-code");
const codeResult = document.querySelector("#code-result");

const SECRET_CODE = "1234";

submitButton.addEventListener("click", function () {
  const code = doorCodeInput.value.trim();

  if (code === SECRET_CODE) {
    codeResult.textContent = "Click! The door unlocks. You're free… for now.";
    codeResult.style.color = "limegreen";
  } else {
    codeResult.textContent = "The lock buzzes. Wrong code.";
    codeResult.style.color = "red";
  }
});