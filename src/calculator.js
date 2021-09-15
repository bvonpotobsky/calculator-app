const buttons = Array.from(document.querySelectorAll(".numbers input"));
const input = document.getElementById("input");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick(e) {
  console.log(e);
}
