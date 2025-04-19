// RECURSION -------------------------
// when a function call it self untill a specified condition is met 

// ----------------------------------------






// GCD || HCF 
// N1 - 9 | N2 - 12 //1 3
// 1 3 9  || 1 2 3 4 6 12  
// Q7 v1 brute force 
/*
let n1 = 52,n2 = 10;
let res = gcdFun(n1,n2);
console.log(res);


function gcdFun(n1,n2){
    let gcd = 0;
    for(let i = 1 ; i <= Math.min(n1,n2); i++){
        if(n1%i == 0 && n2 %i == 0){
            gcd = i;
        }
    }
    return gcd;
}
    TC - o(min(a,b))

*/

// V2 optimal
// gcd(a,b) = gcd(a%b,b); 
// let a = 52,b = 10;
// let res = gcdFun(a,b);
// console.log(res);


// function gcdFun(a,b){
//     while(a > 0 && b > 0){
//         if(a > b ) a = a % b;
//         else b = b %a;
//     }

//     if(a == 0) return b;
//     else return a;
// }


//Prime number 
// the Number which has 2 factors 1 and it self is prime 
// Brute --
// Q6 v1
// let n = 6;
// let res = isPrime(n);
// console.log(res)

// function isPrime(n){
//     let cnt = 0;
//     for(let i = 1; i <= n ; i++){
//         if(n  % i == 0){
//             cnt++;
//         }
//     }
//     if(cnt ==  2){
//         return true;
//     }else{
//         return false;
//     }
// }

// V2
// let n = 5;
// let res = isPrime(n);
// console.log(res)
// function isPrime(n){
//     if(n <= 1) return false;
//     if(n == 2) return true;
//     if(n%2 == 0) return false;
//     for(let i = 3; i <= Math.floor(Math.sqrt(n)); i+=2){
//         if(n%i == 0) return false;
//     }
//     return true
// }


// --------------------------------
// left 39.44 min 
//print all divisors 
// Q5
/*
let n = 36;
let res = allDivisors(n);


function allDivisors(n) {
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            console.log(i);
        }
    }
}
*/
/*
// V2 
function allDivisors(n) {
    for(let i = 1; i <= Math.floor(n/2); i++){
        if(n % i == 0){
            console.log(i);
        }
    }
}
*/



//Armstrong number 
// Q4
/*
let n = 153;
let res = armStrong(n);
if(armStrong(n)){
    console.log("Armstrong Number Hai")
}else{
    console.log("Armstrong Number Nahi Hai")
}

function armStrong(n){
    let copy = n;
    let sum = 0
    let k = String(n).length;
    while(n > 0){
        let ld = n % 10;
        sum += Math.pow(ld,k);
        n = Math.floor(n / 10);
    }
    if(sum == copy ){
        return true;
    }else{
        return false;
    }
}
TC :- log10(n)+1
SC = o(1)
*/


//Palindrome number

/*
let  n = 1221;
let res = isPalindrome(n);
console.log(res)

function isPalindrome(n){
    let copy = n;
    let rev = 0;

    while(n>0){
        let ld = n %10;
        n = Math.floor(n / 10);
        rev = (rev*10) + ld;
    }
    
    if(rev == copy){
        return true;
    }else {
        return false;
    }
}
    TC :- log10(n)+1
    SC = o(1)

    */

// reverse the number 
// Q2
/*
let n  = 7789;
let rev = revDigit(n);
console.log(rev)

function revDigit(n) {//7789
    let revNum = 0;//9877
    while(n>0){//7
        let lastDigit = n %10;//9//8//7//7
        n = Math.floor( n/10);//778//77//7//0
        revNum = (revNum * 10) + lastDigit;//9//8//7//7
    }
    return revNum; 
}
    TC :- log10(n)+1
    SC = o(1)
*/




// count digits
//  Q1
/*
let n = 7789;
let digit = countDigit(n);
console.log(digit)

function countDigit(n){

    let  cnt = 0;
    while(n > 0){
        cnt +=  1;
        n = Math.floor(n /10);
    }
    return cnt;
}
    TC :- log10(n)+1
    SC = o(1)
*/