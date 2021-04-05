var busqueda = prompt("pon una obj");
if (busqueda == "" || busqueda == " ") {
  busqueda = null;
} else {
  let busquedaSplit = busqueda.split(" ");
 palabras = ["bombilla", "remera", "auricular", "vaso", "taza", "taper", "teclado", "bambu", "lapicero", "borrrador ", "regla", "tijeras ", "papel ", "bolsa", "cuaderno", "bolas", "sacapuntas", "cama", "pupitre", "chanclas", "celular ", "computador", "ropa", "zapatos", "reloj", "botella ", "silla", "vaso", "crema	", "café	", "estrella", "explosión", "guitarra	", "plástico", "navaja	", "martillo	", "libros", "lápiz", "lapicera	", "aluminio  ", "embarcación", "letra	", "agujeta ", "ventana	", "librería	", "sonido", "universidad", "rueda	", "perro", "llaves	", "camisa	", "pelo", "papá	", "sillón	", "felicidad ", "catre	", "teclado	", "servilleta", "escuela	", "pantalla	", "sol", "codo	", "tenedor	", "estadística", "mapa	", "agua	", "mensaje", "lima	", "cohete	", "rey", "edificio	", "césped	", "presidencia", "hojas	", "parlante	", "colegio", "granizo	", "pestaña	", "lámpara", "mano	", "monitor	", "flor", "música	", "hombre	", "tornillo", "habitación	", "velero	", "abuela", "abuelo	", "palo	", "satélite", "templo	", "lentes	", "bolígrafo", "plato	", "nube	", "gobierno", "botella	", "castillo	", "enano", "casa	", "libro	", "persona ", "planeta	", "televisor", "guantes", "metal	", "teléfono	", "proyector", "mono	", "muela", "petróleo	", "percha	", "remate", "debate	", "anillo	", "cuaderno", "ruido	", "pared	", "taladro", "herramienta	", "cartas	", "chocolate", "anteojos", "impresora	", "caramelos", "living	", "luces	", "angustia", "zapato", "bomba	", "lluvia", "ojo	", "corbata	", "periódico", "diente	", "planta	", "chupetín", "buzo	", "oficina	", "persiana  ", "puerta	", "tío	", "silla", "ensalada	", "pradera	", "zoológico", "candidato	", "deporte	", "recipiente", "diarios	", "fotografía	", "ave", "hierro", "refugio", "pantalón", "barco	", "carne	", "nieve", "tecla", "humedad	", "pistola", "departamento", "celular	", "tristeza", "hipopótamo	", "sofá	", "cama", "árbol	", "mesada	", "campera", "discurso	", "auto	", "cinturón", "rúcula	", "famoso	", "madera", "lentejas	", "piso	", "maletín", "reloj	", "diputado", "cuchillo", "desodorante", "candado	", "luz", "montañas	", "computadora	", "radio", "moño	", "cuadro	", "calor", "partido	", "teatro	", "bife", "fiesta	", "bala	", "auriculares", "alacena", "alcachofa", "alfombra", "almohada", "ambientador", "aplique", "armario", "aspiradora", "bandeja", "banqueta", "bañera", "bayeta", "bolso", "bombilla", "botella", "butaca", "cabecero", "cama", "camarera", "candelabro", "cazuela", "cepillo", "cesto", "champú", "cocina", "colador", "coladores", "colcha", "colchón", "colonia", "cómoda", "consola", "cortina", "cristalería", "cuadro", "cubertería", "cubo", "cuchara", "cucharón", "cuchillo", "cuna", "delantal", "equipo", "escoba", "escobilla", "escultura", "espejo", "estropajo", "felpudo", "flor", "fregona", "frigorífico", "frutero", "herramienta", "jabón", "jabones", "jarra", "jarrón", "lámpara", "lamparita", "lavabo", "lavadora", "lavavajillas", "librería", "libro", "libros", "manta", "mesa", "mesilla", "mueble", "olla", "ordenador", "orejera ", "paño", "papel", "paraguas", "paragüero", "peine", "perchero", "planta", "plato", "portallaves", "puerta", "rallador", "ralladores", "recogedor", "recogedores", "reloj", "relojes ", "reproductor", "retrete", "revista", "sartén", "sartenes", "secador", "secadora", "secadores", "secadoras ", "silla", "sillón", "sofá", "teléfono", "televisor", "tenedor", "toalla", "vajilla", "vaso", "vela", "vitrina", "zapatero"];


  for (i = 0; i < palabras.length; i++) {
    busquedaSplit.forEach((index) => {
      let palabrasIndex = palabras[i];
      let busquedaLength = index.length > 3;
      let palabrasIndexStarts = palabrasIndex.startsWith(index);
      let palabrasIndexIncludes = palabrasIndex.includes(index);
      if (busquedaLength && palabrasIndexStarts) {
        document.write(`${palabrasIndex}  <br>`);
      } else if (palabrasIndexStarts && palabrasIndexIncludes) {
        document.write(`${palabrasIndex}  <br>`);
      }
    });
  }
}
