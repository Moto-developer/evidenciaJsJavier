alert ("REGISTRO DE NOTAS ADSO");

let aprendiz1=prompt('Digita el nombre del APRENDIZ');
let actividad1 =prompt('Digita el nombre de la ACTIVIDAD 1');
let valornota1 =parseFloat(prompt('Digita el VALOR de la nota'));
let actividad2 =prompt('Digita el nombre de la ACTIVIDAD 2');
let valornota2 =parseFloat(prompt('Digita el VALOR de la nota'));
let actividad3 =prompt('Digita el nombre de la ACTIVIDAD 3');
let valornota3 =parseFloat(prompt('Digita el VALOR de la nota'));

let aprendiz2=prompt('Digita el nombre del APRENDIZ');
let actividad1ap2 =prompt('Digita el nombre de la ACTIVIDAD 1');
let valornota1ap2 =parseFloat(prompt('Digita el VALOR de la nota'));
let actividad2ap2 =prompt('Digita el nombre de la ACTIVIDAD 2');
let valornota2ap2 =parseFloat(prompt('Digita el VALOR de la nota'));
let actividad3ap2 =prompt('Digita el nombre de la ACTIVIDAD 3');
let valornota3ap2 =parseFloat(prompt('Digita el VALOR de la nota'));

let aprendiz3=prompt('Digita el nombre del APRENDIZ');
let actividad1ap3 =prompt('Digita el nombre de la ACTIVIDAD 1');
let valornota1ap3 =parseFloat(prompt('Digita el VALOR de la nota'));
let actividad2ap3 =prompt('Digita el nombre de la ACTIVIDAD 2');
let valornota2ap3 =parseFloat(prompt('Digita el VALOR de la nota'));
let actividad3ap3 =prompt('Digita el nombre de la ACTIVIDAD 3');
let valornota3ap3 =parseFloat(prompt('Digita el VALOR de la nota'));

let resultado1 = valornota1*0.20+valornota2*0.20+valornota3*0.60;
console.log(`INTITUTO DE DESARROLLO DE SOFTWARE - ADSO`)
console.log(`RESULTADO FINAL PRIMER TRIMESTRE`)
console.log(`---------------------------------`)
console.log(`${actividad1} ${valornota1} 20% equivale al ${valornota1*0.20}`)
console.log(`${actividad2} ${valornota2} 20% equivale al ${valornota2*0.20}`)
console.log(`${actividad3} ${valornota3} 60% equivale al ${valornota3*0.60}`)
console.log(`EL RESULTADO FINAL DEL APENDIZ ${aprendiz1} es ${resultado1}`)

let resultado1ap2 = valornota1ap2*0.20+valornota2ap2*0.20+valornota3ap2*0.60;
console.log(`---------------------------------`)
console.log(`${actividad1ap2} ${valornota1ap2}`)
console.log(`${actividad2ap2} ${valornota2ap2}`)
console.log(`${actividad3ap2} ${valornota3ap2}`)
console.log(`EL RESULTADO FINAL DEL APENDIZ ${aprendiz2} es ${resultado1ap2}`)

let resultado1ap3 = valornota1ap3*0.20+valornota2ap3*0.20+valornota3ap3*0.60;
console.log(`---------------------------------`)
console.log(`${actividad1ap3} ${valornota1ap3}`)
console.log(`${actividad2ap3} ${valornota2ap3}`)
console.log(`${actividad3ap3} ${valornota3ap3}`)
console.log(`EL RESULTADO FINAL DEL APENDIZ ${aprendiz3} es ${resultado1ap3}`) 



// const aprendices ={
//     ap1: prompt('Digita el nombre del APRENDIZ'),
//     ap2: prompt('Digita el nombre del APRENDIZ'),
//     ap3: prompt('Digita el nombre del APRENDIZ'),

// }
// console.log(aprendices)




