test("cambia el texto al hacer clic en el botón", () => {
  document.body.innerHTML = `
    <h1 id="greeting">¡Hola Mundo!</h1>
    <button id="changeText">Cambiar texto</button>
  `;

  document.getElementById("changeText").addEventListener("click", function () {
    document.getElementById("greeting").textContent = "¡Texto cambiado!";
  });

  const button = document.getElementById("changeText");
  button.click();

  const h1 = document.getElementById("greeting");
  expect(h1.textContent).toBe("¡Texto cambiado!");
});
