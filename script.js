busqueda = prompt("pon una obj");
palabras = [
  "bombilla",
  "remera",
  "auricular",
  "vaso",
  "taza",
  "taper",
  "teclado",
  "bambu",
];
palabrasLength = palabras.length;

for (i = 0; i < palabras.length; i++) {
  palabrasI = palabras[i];
  if (palabrasI.startsWith(busqueda)) {
    document.write(palabrasI + "<br>");
  }
}
console.log("el bucle termino ");

console.log("termino");
