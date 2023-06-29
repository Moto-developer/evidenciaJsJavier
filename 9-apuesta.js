
let resultado = Math.floor(Math.random()*10)+1;
let saldo = 5000;
let numero;
let apuesta;
let ganancia;

while(resultado===numero || saldo>0){
numero=parseInt(prompt("Digita un numero ENTERO del 1 al 10"));
apuesta=prompt(`Cuanto quieres apostar`);

if(numero==resultado){
    console.log(`Ganaste ${apuesta*3}`)
    ganancia=apuesta*3
}
    else if (numero!==resultado){
    console.log(`Perdiste tu saldo es ${saldo - apuesta}`)
    console.log(resultado)        
    }
    else if (saldo<=0){
    console.log(`Perdiste, no tines saldo`)
    };


saldo=saldo-apuesta

};



// do{
//     apuesta=parseInt(prompt("Digita un numero ENTERO del 1 al 10"));

//     } while(numero%2!==0);

