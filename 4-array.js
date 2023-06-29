//pruebas con iteraciones for y whail

const viajeros=[
    {nombre: prompt('digita tu nombre'),
    placa: prompt('digita tu placa'),
    marca: prompt('digita tu marca'),
    modelo: prompt('digita tu modelo'),
    },
    {nombre: prompt('digita tu nombre'),
    placa: prompt('digita tu placa'),
    marca: prompt('digita tu marca'),
    modelo: prompt('digita tu modelo'),
    },
    {nombre: prompt('digita tu nombre'),
    placa: prompt('digita tu placa'),
    marca: prompt('digita tu marca'),
    modelo: prompt('digita tu modelo'),
    }
    
];

console.log(viajeros);
console.table(viajeros);

const ciudades=[]

for(a=1;a<4;a++){ciudad1={
    nombre: prompt('Escribe el nombre de la ciudad'),
    dpto:prompt('Escribe el nombre del departamento'),
};

if(a==1){
    ciudades.push(ciudad1);}
else if (a==2){
    ciudades.unshift(ciudad1);}
else if (a==3){
    ciudades.unshift(ciudad1);}

};

ciudades.push(ciudad1);
ciudades.unshift(ciudad2);
ciudades.unshift(ciudad3);


console.log(ciudades);
console.table(ciudades);



const motoviajeros=['pedro','juan','luis','Alvaro','yecid',]



//libros recorrido con for y forEach 
/*const libros=[
    {nombre: 'la biblia',precio: 95000, pasta:'dura'},
    {nombre: 'principito',precio: 45000, pasta:'blanda'},
    {nombre: 'la iliada',precio: 50000, pasta:'dura'},
    {nombre: 'Quijote',precio: 35000, pasta:'blanda'},
    {nombre: 'La hojarasca',precio: 40000, pasta:'dura'},
    {nombre: 'Cien años',precio: 35000, pasta:'blanda'},
]

for(let a=0;a<libros.length ;a++){
    console.table(`${libros[a].nombre} - precio: ${libros[a].precio}`)
};

libros.forEach(function(libreria) {
    console.table(`${libreria.nombre}-precio: ${libreria.precio}`)
});*/

/*let noRegistros=parseInt( prompt('CUANTOS REGISTROS VAS A HACER?'))

const ciudades=[]

for(let a=1;a<=noRegistros;a++){ciudad={
    nombre: prompt('Escribe el nombre de la CIUDAD'),
    dpto:prompt('Escribe el nombre del DEPARTAMENTO'),
    alcalde:prompt('Escribe el nombre del ALCALDE'),
};

ciudades.push(ciudad);

};

console.log(ciudades);
console.table(ciudades);*/

//funciones

/*function multiplicar(){
    console.log(3*5);
}
multiplicar();*/


/*function saludo(nombre, apellido,ciudad){
    console.log(`Bienvenido a la sesión ${nombre} ${apellido} lo estamos viendo desde la ciudad ${ciudad}`)
}

saludo(prompt('Escriba su nombre'), prompt('Escriba su apellido'), prompt('Escriba su ciudad'));*/

// let numero= parseInt(prompt("digita el número inicial"))

// for(let a = 0; a=numero;--numero){
//     console.log(numero);
//     a++;
// }
