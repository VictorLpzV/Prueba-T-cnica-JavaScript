/**
 * 
 * 2.Rearrange this array with the values from smallest to largest without using the sort method,
 Ex: input [1,4,5,12,7,23,12,12] output: [1,2,4,7,12,12,23].
 */


function ordenamientoArrays(arreglo){
    let N = arreglo.length;

    for(let i=0;i<N;i++){
        for(let j =0,k=N-i;j<k;j++){
            if(arreglo[j]>arreglo[j+1]){
                [arreglo[j],arreglo[j+1]]=[arreglo[j+1],arreglo[j]];
            }
        }
    }
    return arreglo;
}

let arreglo =[1,4,5,12,7,23,12,12];
console.log(arreglo);

console.log;

let arregloOrdenado= ordenamientoArrays(arreglo);
console.log(arregloOrdenado);