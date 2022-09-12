/*
    1. Write a function min that takes two arguments and returns their minimum.
    Checks whether the input is number or not
    and returns the lower of the two number
*/
function min(a,b){
    if(typeof a == 'number' && typeof b == 'number'){
        return (a < b) ? a : b
    }
    return -1;
}
console.log(min(100,5));


/*
    2. Define a recursive function isEven to determine whether a number is completely divisible by 2.
    The function should accept a single parameter (a positive, anegative or whole number) and return a Boolean.
*/
function isEven(n){ 
    if(n % 2 === 0){
        n = n/2
        if(n >= 2){
            isEven(n);
        }
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(8));

/*
    3. Write a function countBs that takes a string as its only argument and 
    returns a number that indicates how many uppercase “B” characters there are in the string.
    Next, write a function called countChar that behaves like countBs, 
    except it takes a second argument that indicates the character that
     is to be counted (rather than counting only uppercase “B” characters). 
     Rewrite countBs to make use of this new function.
*/
const countBs =  (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === 'B'){
            count++;
        }
    }
    return count;
}

//testing countBs function
console.log(countBs("BBBBhello"));

const countChar = (str, c) => {
    let count = 0;
    for(let i = 0 ; i < str.length; i++){
        if(str.charAt(i) === c){
            count++;
        }
    }
    return count;
}

//testing countChar function
console.log(countChar("BiBek",'B'));
