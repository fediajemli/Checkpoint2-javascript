
// affichage
// for ( let i = text.length-1; i>=0; i--) {
//     console.log(text[i]);
// }

// function ReverseString(s){
//     let reverse = "";
   
//     for (let i = s.length - 1; i >= 0  ; i--){
        
//         reverse += s[i];
//     }
//     return reverse;
// }

// let m = ReverseString("fedia");
// console.log(m);
// // function CountNumber (str){
//     let i = 0;
//     let s = 0;
//     while(str[i]){
//         s++;
//         i++;
//     }return s;
// }
// let c = CountNumber ("fedia")
// console.log(c);
// function capitilizeWords(array){
//    for(let i = 0; i < array.length; i++ ){ 
//         if(array[i]){
//             array[i]= array[i].charAt(0).toUpperCase() + array[i].slice(1);
        

//         }      
       
//     } return array;
  
        
//     }
// let array = ["fedia", "", "is", "", "beatiful"];
// let s = capitilizeWords(array);
// console.log(s)
// function MaxMin(array){
//     let max = array[0];
//     let min = array[0];
//     for(let i = 0; i < array.length; i++ ){
        
//         if (max < array [i] ){
//             max = array [i];
            
//         }
//         if (min >  array [i]){
//             min = array[i];
//         }
         
//     } return{ max, min};
// }
// let array = [15, 20, 6, 2, 100];
// let m = MaxMin(array);
// console.log(m);

// function Sum(array){
//     let s = 0;
//     for(let i = 0; i < array.length; i++ ){
//         s += array[i];
//     }return s;

// }
// let somme = Sum([15, 60, 3, 80]);
// console.log(somme);
// function filter(array){
    
//     for(let i = 0; i < array.length; i++){
//         if ( array[i] % array[i-1] === 0){
//            console.log(array[i]);
//         }
//     } 
// }
// let m = filter([15, 60, 3, 15]);
// console.log(m);

// function factorial(num){
//     if (num === 0 || num === 1){
//         return 1;
//     }
//     if (num > 1){
//         return num*factorial(num - 1);
//     }
    

// }
// let m = factorial(20);
// console.log(m);

// function prime(num){
    
//     if (num % 1=== 0 && num % num === 0 && num % 2 ==! 0){
//         return num;

//     }
        

// }let m = prime(30);
//  console.log(m);

function fib(num){
    
    if (num === 0 ){
        return  0;
    }
    if (num === 1 ){
        return  1;
    }
    if (num > 1){
        return  fib(num - 1) + fib(num - 2);
    }
    

}
let m = fib(11);
console.log(m);



