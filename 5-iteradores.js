

for(let numero =0;numero<20;numero++){

document.write("hola"+ '<br>');    
   //console.log(`numero ${numero}`)
};


let moteros =[
    {nombre: 'luis', apellido: 'Ruiz', placa: 'ERT48H'},
    {nombre: 'juan', apellido: 'diaz', placa: 'ERT78H'},
    {nombre: 'albeiro', apellido: 'tirado', placa: 'ERT58H'},
    {nombre: 'luchito', apellido: 'cortes', placa: 'ERT457'},
    {nombre: 'pablo', apellido: 'quilindo', placa: 'hT484'},
];

let mt;

for (mt=0;mt<moteros.length;mt++){
    console.table(`${moteros[mt].nombre} ${moteros[mt].placa}`);
}


// while( mt<moteros.length){
//     console.table(`${moteros[mt].nombre} ${moteros[mt].placa}`);
//      mt++;
// };
