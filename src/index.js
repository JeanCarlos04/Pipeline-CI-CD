const changeTextInConsole = require("./app");

function changeTextInDOM() {
  document.getElementById("greeting").textContent = "¡Texto cambiado!";
}

// Exporta ambas funciones si necesitas usarlas en otros archivos
module.exports = { changeTextInConsole, changeTextInDOM };
