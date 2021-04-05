var busqueda = prompt("pon una obj");
if (busqueda == "" || busqueda == " ") {
  busqueda = null;
} else {
  let bS = busqueda.split(" ");

  palabras = [
    "bombilla", "remera", "auricular", "vaso", "taza", "taper", "teclado", "bambu", "lapicero", "borrrador ", "regla", "tijeras ", "papel ", "bolsa", "cuaderno", "bolas", "sacapuntas", "cama", "pupitre", "chanclas", "celular ", "computador", "ropa", "zapatos", "reloj", "botella ", "silla", "vaso", "crema	", "café	", "estrella", "explosión", "guitarra	", "plástico", "navaja	", "martillo	", "libros", "lápiz", "lapicera	", "aluminio  ", "embarcación", "letra	", "agujeta ", "ventana	", "librería	", "sonido", "universidad", "rueda	", "perro", "llaves	", "camisa	", "pelo", "papá	", "sillón	", "felicidad ", "catre	", "teclado	", "servilleta", "escuela	", "pantalla	", "sol", "codo	", "tenedor	", "estadística", "mapa	", "agua	", "mensaje", "lima	", "cohete	", "rey", "edificio	", "césped	", "presidencia", "hojas	", "parlante	", "colegio", "granizo	", "pestaña	", "lámpara", "mano	", "monitor	", "flor", "música	", "hombre	", "tornillo", "habitación	", "velero	", "abuela", "abuelo	", "palo	", "satélite", "templo	", "lentes	", "bolígrafo", "plato	", "nube	", "gobierno", "botella	", "castillo	", "enano", "casa	", "libro	", "persona ", "planeta	", "televisor", "guantes", "metal	", "teléfono	", "proyector", "mono	", "muela", "petróleo	", "percha	", "remate", "debate	", "anillo	", "cuaderno", "ruido	", "pared	", "taladro", "herramienta	", "cartas	", "chocolate", "anteojos", "impresora	", "caramelos", "living	", "luces	", "angustia", "zapato", "bomba	", "lluvia", "ojo	", "corbata	", "periódico", "diente	", "planta	", "chupetín", "buzo	", "oficina	", "persiana  ", "puerta	", "tío	", "silla", "ensalada	", "pradera	", "zoológico", "candidato	", "deporte	", "recipiente", "diarios	", "fotografía	", "ave", "hierro", "refugio", "pantalón", "barco	", "carne	", "nieve", "tecla", "humedad	", "pistola", "departamento", "celular	", "tristeza", "hipopótamo	", "sofá	", "cama", "árbol	", "mesada	", "campera", "discurso	", "auto	", "cinturón", "rúcula	", "famoso	", "madera", "lentejas	", "piso	", "maletín", "reloj	", "diputado", "cuchillo", "desodorante", "candado	", "luz", "montañas	", "computadora	", "radio", "moño	", "cuadro	", "calor", "partido	", "teatro	", "bife", "fiesta	", "bala	", "auriculares",
  ];

  for (i = 0; i < palabras.length; i++) {
    bS.forEach((b) => {
      var pI = palabras[i];
      let a = b.length > 3;
      let pIS = pI.startsWith(b);
      let pII = pI.includes(b);
      if (a && pIS) {
        document.write(`${pI}  <br>`);
      } else if (pIS && pII) {
        document.write(`${pI}  <br>`);
      }
    });
  }
}

