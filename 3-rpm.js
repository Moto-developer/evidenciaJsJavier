const motero = {
    nombre: prompt('Digita tu nombre'),
    apellido: prompt('Digita tu apellido'),
    tipoId: prompt('Tipo identintificacion, CÉDULA, PASAPORTE, CEDULA EXTRANJERÍA'),
    numeroId: prompt('Número de identificación'),
    nacionalidad: prompt('Nacionalidad'),
}
const ruta = {
    nombreRuta: prompt('Nombre ruta ejemplo(Popayan-Bogotá)'),
    kilometros: prompt('Cuantos kilometros recorriste?'),
    puntoPartida: prompt('Donde inicias la ruta'),
    puntoLlegada: prompt('Donde termiana la ruta'),
    paradas: prompt('Nombre del lugar donde paraste a descansar'),
}
const presupuesto = {
    hospedaje: parseInt(prompt('Cuanto podrias gastar en hospedaje?')),
    alimentacion: parseInt(prompt('Cuanto podrias gastar en alimentación?')),
    combustible: parseInt(prompt('Cuanto podrias gastar en combustible?')),
    recreacion: parseInt(prompt('Cuanto podrias gastar en recreación?')),
    mantenimiento: parseInt(prompt('Cuanto podrias gastar en mantenimentos')),
}

console.log('RUTAS PARA MOTEROS')
const {nombre,apellido}=motero;
console.log(`HOLA MOTOVIAJERO ${nombre}  ${apellido}`);
console.log('-------------------------------')
const {nombreRuta}=ruta;
console.log(`RESUMEN DE TU RUTA ${nombreRuta}`);

const {kilometros}=ruta;
console.log(`Distancia de la ruta: ${kilometros} kílómetros`);

const {puntoPartida}=ruta;
console.log(`Empiezas tu ruta en: ${puntoPartida}`);

const {paradas}=ruta;
console.log(`Vas a descansar en: ${paradas}`);

const {puntoLlegada}=ruta;
console.log(`Tu ruta termina en: ${puntoLlegada}`);


console.log('-------------------------------')

console.log('RESUMEN DE PRESUPUESTO')

const {hospedaje}=presupuesto;
console.log(`Hospedaje: ${hospedaje}`);

const {alimentacion}=presupuesto;
console.log(`Alimentación: ${alimentacion}`);

const {combustible}=presupuesto;
console.log(`Combustible: ${combustible}`);

const {recreacion}=presupuesto;
console.log(`Recreación: ${recreacion}`);

const {mantenimiento}=presupuesto;
console.log(`Manteminiemto: ${mantenimiento}`);

console.log(`TOTAL PRESUPUESTO: ${hospedaje+alimentacion+combustible+recreacion+mantenimiento}`);


console.log(motero, ruta, presupuesto)
