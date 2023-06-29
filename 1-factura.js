alert ("FACTURA DE COMPRAVENTA CON JAVA SCRIPT");
let cliente=prompt('Digita el nombre del cliente');

let producto1 =prompt('Digita el producto No 1 a comprar');
let valor1 =parseInt(prompt('Digita el Valor producto No 1'));

let producto2 =prompt('Digita el producto No 2 a comprar');
let valor2 =parseInt(prompt('Digita el Valor del producto No 2'));

let producto3 =prompt('Digita el producto No 3 a comprar');
let valor3 =parseInt(prompt('Digita el valor del producto No 3'));

let producto4 =prompt('Digita el producto No 4 a comprar');
let valor4 = parseInt(prompt('Digita el Valor del producto No 4'));


console.log('SUPERMERCADO ADSO');
console.log('FACTURA DE VENTA No 00758');
console.log(`${producto1} ${valor1}`);
console.log(`${producto2} ${valor2}`);
console.log(`${producto3} ${valor3}`);
console.log(`${producto4} ${valor4}`);

let subtotal = valor1+valor2+valor3+valor4;
console.log(`EL SUBTOTAL DE LA FACTURA ES ${subtotal}`);

let iva = subtotal*0.19;
console.log(`EL IVA DE LA FACTURA ES ${iva}`);

let descuento = subtotal*0.10;
console.log(`EL DESCUENTO DE LA FACTURA ES ${descuento}`);

let total = subtotal+iva-descuento
console.log(`EL TOTAL DE LA FACTURA ES ${total}`);

console.log(`EL TOTAL A PAGAR POR EL SEÑOR, ${cliente} DE LA FACTURA No 00758 ES $,${total}`);


