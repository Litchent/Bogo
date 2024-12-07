// // // Variables

// // let MyName;
// // MyName = "josefino";

// // let MyAge = 15;
// let MyName = "josefino2",
//     MyAge = 15;
//     MyMesssage = "hello :)";

// // alert(MyName);
// // alert(MyAge);
// // alert(MyMessage);

// // constantes
// const MyBirthDay = "Apr-21-2014";

// // alert(MyBirthDay);

// // tipos de datos
// let MyAge2 = 33;
// let IsActive = true;
// let IsBlue = false;

// let MyHeight = null;
// let MyHeight2 = undefined;

// // ingreso de argumentos
// let year = prompt('año actual:');
// // alert(year);

// // confirm
// let isBoss = confirm("Eres el Jefe?");
// // alert(isBoss);

// // operadores matematicos
// let Num1 = 10;
// let Num2 = 20;

// // // suma
// // alert( Num1 + Num2);

// // // resta 
// // alert(Num1 - Num2);

// // // multiplicacion
// // alert(Num1 * Num2);

// // // division
// // alert(Num1 / Num2);

// // incremento
// let Num3 = 2;
// Num3++;
// alert(Num3);

//  operadores de comparacion
// alert( 2 > 1 );
// alert( 2 < 1 );
// alert( 2 == 1 );
// alert( 2 != 1);

// condicionales
// let year = prompt("ingrese el ano actual:");

// if ( year == 2024 ) {
//     alert("Muy Bien");
//     alert("Eres Genial");
// }

// else
// let year = prompt("ingrese el ano actual:");

// if ( year == 2024 ) {
//     alert("Muy Bien");
//     alert("Eres Genial");
// } else {
//     alert("No es Correcto");
// }

// condicionales encadenados
// let year = prompt("ingrese el ano actual:");

// if ( year == 2024 ) {
//     alert("Muy Bien");
//     alert("Eres Genial");
// } else if (year > 2024) {
//     alert("Muy Alto");
// } else if( year < 2024) {
//     alert("Muy Bajo")
// } else {
//     alert("No es Correcto");
// }

// operadores logicos
// or ||
// alert( true || true ); // true
// alert( true || false ); // true
// alert( false || true ); // true
// alert(false || false ); // false


// let hour = 12;
// let isWeekend = false;

// if ( hour < 9 || hour > 18 || isWeekend ){
//     alert("La oficina esta cerrada");
// }else {
//     alert("Open!");
// }

// and &&
// alert( true && true ); // true
// alert( true && false ); // false 
// alert( false && true ); // false
// alert( false && false ); // false

// solution
// let username = prompt('quien eres tu?.', '');
// if (username == "Admin") {
//     let Password = prompt('clave?', '');

//     if (Password == "TheMaster") {
//         alert("Welcome"); 
//     } else if (password == '' || password == null)
//         alert("Cancelado")
//     } else{
//         alert("Clave incorrecta");
// } else if (( username == "" || username == null)) {
//     alert("Cancelado");
// } else {
//     alert(" no se quien eres :b");
// }

// ciclos while
// while (condition) {
//       sentences;
//       sentences;
// }

// let counter = 0;

// while (counter < 3) {
//     alert(counter);
//     counter++;
// }

// ciclo for
// for (Begin; CSSConditionRule, step); {
//  for body
// }

// for ( let counter = 0; counter < 3; counter++) {
//     alert(counter);
// }

// // funciones
// function showMessage() {
//     alert("Hola Mundo");
// }
// showMessage();
// showMessage();

// funciones con variables locales
// 
// function showMessage() {
//     let message = "epale :)"
//     alert(message);
// }
// showMessage();
// // alert(message);

// funciones con variables externas
let username = "Josefino";
function showMessage() {
    let message = "epale :)" + username;
    alert(message);
}

showMessage();