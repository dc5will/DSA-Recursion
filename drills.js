// Use recursion to solve these problems.

// What is recursion? A method of problem solving that involves a function calling itself wherein each call breaks down the problem into smaller parts until it is simplified. Recursion is like a process where you define a problem in terms of a simpler version of itself. 

// recursion is NOT a data structure or an algorithm. It is a concept.

// A recursive algorithm is broken down into 2 parts: A base case (stop condition) & recursive case (function calling itself). 

// 1. Base case: solution to the "simplest" possible problem.

// 2. Recursive case is when you use the same algorithm to solve a simpler problem of itself with the same number of parameters to solve a smaller version of the problem.

/*
What is the input of the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call? 
*/

// 1. Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// input: integer (5)
// expected output: integer: 'Another sheep jumps over the fence'
// base case: integer (0)

function howManySheeps(int) {
    // base case
    if (int === 0) {
        console.log('All sheep jumped over the fence')
        return;
    } 
    // general case
    if (int > 0) {
        console.log(`${int}: Another sheep jumped over the fence`)
        howManySheeps(int - 1); // recursive call
    }
}

howManySheeps(5);
