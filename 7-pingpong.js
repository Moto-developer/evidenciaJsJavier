




// for(let i=0;i<=numero;i++){

//     if(i%3===0 && i%5===0){
//         console.log(`${i} ping pong`);
//     }    
//     else if(i%5===0){
//         console.log(`${i} pong`);
//     }
//     else if(i%3===0){
//         console.log(`${i} ping`);
//     }
//     else
//     console.log(`${i}`);
//     continue;  
// };


let numero;

do{
numero=parseInt(prompt("Digita un numero ENTERO"));
} while(numero%2!==0);


let i = 0;

if(numero%2===0){
    do{
        if(i%3===0 && i%5===0){
            console.log(`${i} ping pong`);
        }    
        else if(i%5===0){
            console.log(`${i} pong`);
        }
        else if(i%3===0){
            console.log(`${i} ping`);
        }
        else {
        console.log(`${i}`);
        }
        i++;
    } while(i<=numero);
}

else{
    console.log('el numero es impar')
    }
