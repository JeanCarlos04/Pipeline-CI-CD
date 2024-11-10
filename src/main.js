function changeText() {
  document.getElementById("greeting").textContent = "¡Texto cambiado!";
}
module.exports = changeText;
const changeText = require("../app");
