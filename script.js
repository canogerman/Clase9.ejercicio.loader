// Elimino el loader luego de cargada totalmente la página
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  const loaderText = document.querySelector(".loader-text");
  loaderText.style.display = "none";
});
