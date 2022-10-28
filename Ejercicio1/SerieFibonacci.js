/**
 * 1.Create an algorithm that displays n number of digits of the fibonacci series,
 e.g.: input fibo(5), output "0,1,1,2,3".
//Extra if you can do it with recursion
 */


function Fibonacci(limite){ 
    var arrayNumeros=[0,1]; 

    for(let I=2;I<limite;I++){
        arrayNumeros.push(arrayNumeros[I-1] + arrayNumeros[I-2]);
    }   
    return arrayNumeros;
    
}

const ArregloFibonacci = Fibonacci(12);
console.log(ArregloFibonacci);

