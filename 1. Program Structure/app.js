/* 
    1. Write a program that loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
 */
console.log("Question Number 1: Pattern");
const printTriangle = (n) => {
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }
}

printTriangle(7)

/*
    2. Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. 
    At each position of the grid there is either a space or a "#" character. 
    The characters should form a chessboard.
*/
console.log("Question Number 2: chessboard");
const chessboard = (n) => {
    for(let i = 1; i <= n; i++ ){
        for(let j = 0; j <= n; j++){
            if(((i + j) % 2 === 0)){
                process.stdout.write(' ');
            }
            else{
                process.stdout.write('#');
            }
        }
        process.stdout.write('\n');
    }
}

chessboard(8);