//Trabajo práctico integrador - Javascript
//Alumna: Yesica Nuñez
//Curso: Introducción a Javascript - ADA

//Herramienta para poder pedir datos por teclado en la terminal.
const prompt = require('prompt-sync')();

//Estructura de datos
//Creo un array de objetos llamado libros (que contenga al menos 10)
//Con las propiedades id, título, autor, año de publicación, género y disponibilidad.
let libros = [
  { id: 1, titulo: "Una corte de rosas y espinas", autor: "Sarah J Maas", anio: 2015, genero: "Fantasia", disponible: true },
  { id: 2, titulo: "Una corte de niebla y furia", autor: "Sarah J Maas", anio: 2016, genero: "Fantasia", disponible: true },
  { id: 3, titulo: "Una corte de alas y ruina", autor: "Sarah J Maas", anio: 2017, genero: "Fantasia", disponible: true },
  { id: 4, titulo: "Una corte de hielo y estrellas", autor: "Sarah J Maas", anio: 2018, genero: "Fantasia", disponible: true },
  { id: 5, titulo: "Una corte de llamas plateadas", autor: "Sarah J Maas", anio: 2021, genero: "Fantasia", disponible: true },
  { id: 6, titulo: "Emma", autor: "Jane Austen", anio: 1816, genero: "Novela", disponible: true },
  { id: 7, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", anio: 1813, genero: "Romance", disponible: true },
  { id: 8, titulo: "Crepúsculo", autor: "Stephenie Meyer", anio: 2005, genero: "Ficción Romántica", disponible: true },
  { id: 9, titulo: "Luna nueva", autor: "Stephenie Meyer", anio: 2006, genero: "Ficción Romántica", disponible: true },
  { id: 10, titulo: "Eclipse", autor: "Stephenie Meyer", anio: 2007, genero: "Ficción Romántica", disponible: true }
]; 

//Creo un array de objetos llamado usuarios con al menos 5 usuarios:
let usuarios = [
  { id: 1, nombre: "Yesica", email: "nyesica@mail.com", librosPrestados: [] },
  { id: 2, nombre: "Emma", email: "emma2020@mail.com", librosPrestados: [] },
  { id: 3, nombre: "Fabian", email: "fabian73@mail.com", librosPrestados: [] },
  { id: 4, nombre: "Cristina", email: "cristinaprieto@mail.com", librosPrestados: [] },
  { id: 5, nombre: "Mabel", email: "mabel1990@mail.com", librosPrestados: [] }
];

//Funciones de Gestión de Libros
//Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
function agregarLibro(id, titulo, autor, anio, genero) {
  let nuevoLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: true
  };

  libros.push(nuevoLibro);
  console.log("Libro agregado correctamente!");
} 

//Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal.
function buscarLibro(criterio, valor) {
  let resultados = [];

  for (let i = 0; i < libros.length; i++) {
    if (libros[i][criterio].toLowerCase() === valor.toLowerCase()) {
      resultados.push(libros[i]);
    } //recorro el array libros usando un ciclo for.
  }

  if (resultados.length === 0) {
    console.log("No se encontraron libros con ese criterio.");
  } else {
    console.log("Libros encontrados:");
    console.log(resultados);
  }
}

//Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.
function ordenarLibros(criterio) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - 1 - i; j++) {
      if (libros[j][criterio] > libros[j + 1][criterio]) {
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }

  console.log(`Libros ordenados por ${criterio}:`);
  console.log(libros);
}

//Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.
function borrarLibro(id) {
  let indice = -1;

  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id === id) {
      indice = i;
      break;
    }
  }

  if (indice !== -1) {
    libros.splice(indice, 1);
    console.log("Libro eliminado correctamente.");
  } else {
    console.log("No se encontró un libro con ese ID.");
  }
}

//Gestión de usuarios
//Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.
function registrarUsuario(nombre, email) {
  let nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    librosPrestados: []
  };

  usuarios.push(nuevoUsuario);
  console.log("Usuario registrado correctamente.");
}

//Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
function mostrarTodosLosUsuarios() {
  console.log("Lista de usuarios:");
  console.log(usuarios);
}

//Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
function buscarUsuario(email) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      console.log("Usuario encontrado:");
      console.log(usuarios[i]);
      return usuarios[i];
    }
  }

  console.log("No se encontró un usuario con ese email.");
  return null;
}

//Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.
function borrarUsuario(nombre, email) {
  let indice = -1;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
      indice = i;
      break;
    }
  }

  if (indice !== -1) {
    usuarios.splice(indice, 1);
    console.log("Usuario eliminado correctamente.");
  } else {
    console.log("No se encontró el usuario.");
  }
}

//Sistemas de préstamos
//Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.
function prestarLibro(idLibro, idUsuario) {
  let libro = null;
  let usuario = null;

  //Primero busco el libro
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id === idLibro) {
      libro = libros[i];
      break;
    }
  }

  //Segundo busco el usuario
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === idUsuario) {
      usuario = usuarios[i];
      break;
    }
  }
// Verifico si el libro esta disponible
   if (!libro) {
    console.log("El libro no existe.");
    return;
  }

  if (!usuario) {
    console.log("El usuario no existe.");
    return;
  }

  if (!libro.disponible) {
    console.log("El libro no está disponible.");
    return;
  }

  //Agrego el libro a la lista de libros prestados del usuario
  libro.disponible = false;
  usuario.librosPrestados.push(libro.titulo);

  console.log(`El libro "${libro.titulo}" fue prestado a ${usuario.nombre}.`);
}

//Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
function devolverLibro(idLibro, idUsuario) {
  let libro = null;
  let usuario = null;

  //Primero busco el libro
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id === idLibro) {
      libro = libros[i];
      break;
    }
  }

  //Segundo busco al usuario
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === idUsuario) {
      usuario = usuarios[i];
      break;
    }
  }

  if (!libro || !usuario) {
    console.log("Libro o usuario no encontrado.");
    return;
  }

  let indiceLibro = usuario.librosPrestados.indexOf(libro.titulo);

  if (indiceLibro === -1) {
    console.log("Ese libro no estaba prestado a este usuario.");
    return;
  }

  //Devuelvo en consola que el libro fue devuelto corectamente
  usuario.librosPrestados.splice(indiceLibro, 1);
  libro.disponible = true;

  console.log(`El libro "${libro.titulo}" fue devuelto.`);
}

// Reportes: Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .fi lter(), .reduce()) para generar un reporte con la siguiente información: cantidad total de libros, cantidad de libros prestados, cantidad de libros por genero y libro mas nuevo y mas antiguo.
function generarReporteLibros() {

  //Cantidad total de libros
  let totalLibros = libros.length;

  //Cantidad de libros prestados
  let librosPrestados = libros.filter(libro => libro.disponible === false).length;

  //Cantidad de libros por género
  let librosPorGenero = libros.reduce((contador, libro) => {
    if (contador[libro.genero]) {
      contador[libro.genero]++;
    } else {
      contador[libro.genero] = 1;
    }
    return contador;
  }, {});

  //Libro más antiguo
  let libroMasAntiguo = libros.reduce((masViejo, libro) => {
    return libro.anio < masViejo.anio ? libro : masViejo;
  });

  //Libro más nuevo
  let libroMasNuevo = libros.reduce((masNuevo, libro) => {
    return libro.anio > masNuevo.anio ? libro : masNuevo;
  });

  //Mostramos el reporte
  console.log("Reporte de libros");
  console.log("Cantidad total de libros:", totalLibros);
  console.log("Cantidad de libros prestados:", librosPrestados);
  console.log("Cantidad de libros por género:", librosPorGenero);
  console.log("Libro más antiguo:", libroMasAntiguo.titulo, "-", libroMasAntiguo.anio);
  console.log("Libro más nuevo:", libroMasNuevo.titulo, "-", libroMasNuevo.anio);
}

//Identificación avanzada de libros
//Implementar una función librosConPalabrasEnTitulo() que identifi que y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
function librosConPalabrasEnTitulo() {
  let titulosValidos = [];

  for (let i = 0; i < libros.length; i++) {
    let titulo = libros[i].titulo;

    //Separo el título en palabras
    let palabras = titulo.split(" ");

    //Verifico que tenga más de una palabra
    let tieneMasDeUnaPalabra = palabras.length > 1;

    //Verifico que solo tenga letras y espacios
    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(titulo);

    //Use la expresion regular(regex) para verificar que el titulo contenga solo letras y espacios, sin numeros ni simbolos. Lo busque en internet. 

    if (tieneMasDeUnaPalabra && soloLetras) {
      titulosValidos.push(titulo);
    }
  }

  console.log("Títulos con más de una palabra:");
  console.log(titulosValidos);

  return titulosValidos;
}

//Cálculos estadisticos
//Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar promedio de años de publicación de libros, año de publicación más frecuente y diferencia en años entre libro más antiguo y el más nuevo.
function calcularEstadisticas() {

  //Obtengo array de años
  let anios = libros.map(libro => libro.anio);

  //Promedio de años de publicación
  let sumaAnios = anios.reduce((total, anio) => total + anio, 0);
  let promedioAnios = sumaAnios / anios.length;

  //Año de publicación más frecuente
  let contadorAnios = {};

  anios.forEach(anio => {
    if (contadorAnios[anio]) {
      contadorAnios[anio]++;
    } else {
      contadorAnios[anio] = 1;
    }
  });

  let anioMasFrecuente = null;
  let maxFrecuencia = 0;

  for (let anio in contadorAnios) {
    if (contadorAnios[anio] > maxFrecuencia) {
      maxFrecuencia = contadorAnios[anio];
      anioMasFrecuente = anio;
    }
  }

  //Diferencia entre libro más antiguo y más nuevo
  let anioMin = Math.min(...anios);
  let anioMax = Math.max(...anios);
  let diferenciaAnios = anioMax - anioMin;

  //Muestro los resultados
  console.log("Estádisticas de publicación");
  console.log("Promedio de años de publicación:", promedioAnios.toFixed(2));
  console.log("Año de publicación más frecuente:", anioMasFrecuente);
  console.log("Diferencia de años entre el libro más antiguo y el más nuevo:", diferenciaAnios);
}

//Manejo de Cadenas
//Crear una función normalizarDatos() que utilice métodos de strings para: Convertir todos los títulos a mayúsculas, eliminar espacios en blanco al inicio y final de los nombres de autores y formatear los emails de los usuarios a minúsculas.
function normalizarDatos() {

  //Normalizo títulos y autores de libros
  for (let i = 0; i < libros.length; i++) {
    libros[i].titulo = libros[i].titulo.toUpperCase();
    libros[i].autor = libros[i].autor.trim();
  }

  // Normalizo emails de usuarios
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].email = usuarios[i].email.toLowerCase();
  }

  console.log("Datos normalizados correctamente.");
}

//9. Interfaz de Usuario por Consola
//Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
//utilizo prompt para ingresar opciones, switch para manejar la lógica y un ciclo do while para que el menu se repita hasta que el usuario quiera salir.

function menuPrincipal() {
  let opcion;

  do {
    opcion = prompt(
      "Menú principal\n" +
      "1 - Mostrar todos los libros\n" +
      "2 - Agregar libro\n" +
      "3 - Registrar usuario\n" +
      "4 - Prestar libro\n" +
      "5 - Devolver libro\n" +
      "6 - Generar reporte de libros\n" +
      "7 - Calcular estadísticas\n" +
      "0 - Salir\n" +
      "Ingrese una opción:"
    );

    switch (opcion) {
      case "1":
        console.log(libros);
        break;

      case "2":
        let id = parseInt(prompt("Ingrese ID del libro:"));
        let titulo = prompt("Ingrese título:");
        let autor = prompt("Ingrese autor:");
        let anio = parseInt(prompt("Ingrese año:"));
        let genero = prompt("Ingrese género:");
        agregarLibro(id, titulo, autor, anio, genero);
        break;

      case "3":
        let nombre = prompt("Ingrese nombre del usuario:");
        let email = prompt("Ingrese email del usuario:");
        registrarUsuario(nombre, email);
        break;

      case "4":
        let idLibro = parseInt(prompt("Ingrese ID del libro:"));
        let idUsuario = parseInt(prompt("Ingrese ID del usuario:"));
        prestarLibro(idLibro, idUsuario);
        break;

      case "5":
        let libroDev = parseInt(prompt("Ingrese ID del libro:"));
        let usuarioDev = parseInt(prompt("Ingrese ID del usuario:"));
        devolverLibro(libroDev, usuarioDev);
        break;

      case "6":
        generarReporteLibros();
        break;

      case "7":
        calcularEstadisticas();
        break;

      case "0":
        console.log("Salir del sistema...");
        break;

      default:
        console.log("Opción inválida.");
    }

  } while (opcion !== "0");
}

menuPrincipal();




