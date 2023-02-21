// Declaro las variables almacenando los ID del DOM
let tipoDeEvento = document.getElementById("tipoDeEvento");
let mayoresDe10 = document.getElementById("mayoresDe10");
let menoresDe10 = document.getElementById("menoresDe10");
let menuDeCena = document.getElementById("cena");
let seleccionar = document.getElementById("vacio")
let presupuesto = document.getElementById("totalPresupuesto");

// Obtener el valor del evento guardado en localStorage
let eventoStorage = localStorage.getItem("evento");
let mayoresStorage = localStorage.getItem("mayores");
let menoresStorage = localStorage.getItem("menores");
let cenaStorage = localStorage.getItem("cena");
let presupuestoFinalStorage = localStorage.getItem("presupuestoFinal");


if (presupuestoFinalStorage) {
  presupuesto.innerText = presupuestoFinalStorage;
}
if (eventoStorage) {
  tipoDeEvento.value = eventoStorage;
}
if (mayoresStorage) {
    mayoresDe10.value = mayoresStorage;
  }
if (menoresStorage) {
  menoresDe10.value = menoresStorage;
}
if (cenaStorage) {
  menuDeCena.value = cenaStorage;
}

// Defino la acción de click en el boton GENERAR PRESUPUESTO
let generarPresupuesto = document.getElementById("botonPresupuesto")
generarPresupuesto.addEventListener("click", () => {
    //Obtiene el value del tipo de evento y lo almacena en 'evento'
    let evento= tipoDeEvento.value
    //Obtiene el value delos invitados mayores y lo almacena y parsea en mayores
    let mayores= parseInt(mayoresDe10.value)
    //Obtiene el value delos invitados menores y lo almacena y parsea en menores
    let menores = parseInt(menoresDe10.value)
    //Obtiene el value del menu de cena y lo almacena en 'cena'
    let cena = menuDeCena.value
    //Almacena el total de invitados en una variable y suma mayores y menores
    let totalInvitados = mayores + menores
    //Almacena en una variable la multiplicación de invitados por el valor de la cena haciendole un descuento de 25% a los menores
    let precioFinal = cena * mayores + cena*.75*menores

    //Almaceno en la variable el ID del DOM que tiene un texto
    let totalPresupuesto= document.getElementById("totalPresupuesto")
    //Almaceno en una variable el nuevo texto que quiero que tenga el DOM
    let presupuestoFinal = "Para su evento: " + evento + " con un total de invitados de " + totalInvitados + " y con un costo menú de " + cena + ". Aplicando los correspondientes descuentos su presupuesto final es de: $" + precioFinal
    //Cambio el valor del DOM con innerText
    totalPresupuesto.innerText = presupuestoFinal;
    // Guardo en localStorage el texto de presupuestoFinal
    localStorage.setItem("presupuestoFinal", presupuestoFinal);


    //Guardo en localStorage las 4 variables principales
    localStorage.setItem("evento", evento);
    localStorage.setItem("mayores", mayores);
    localStorage.setItem("menores", menores);
    localStorage.setItem("cena", cena); 
  
})
// Defino la acción de click en el boton REINICIAR PRESUPUESTO
let reiniciar = document.getElementById("reiniciarPresupuesto");
reiniciar.addEventListener("click", () => {
    //Vuelvo al texto original del DOM pisandolo
    totalPresupuesto.innerText = "Aqui verá el total de su presupuesto. Asegúrese de ingresar todos los datos correctamente";
    //Reseo formularios
    document.getElementById("formulario").reset();
    //Limpio localStorage
    localStorage.clear();

})