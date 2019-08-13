// Use recursion to solve these problems.

// What is recursion? A method of problem solving that involves a function calling itself wherein each call breaks down the problem into smaller parts until it is simplified. Recursion is like a process where you define a problem in terms of a simpler version of itself. 

// recursion is NOT a data structure or an algorithm. It is a concept.

// A recursive algorithm is broken down into 2 parts: A base case (stop condition) & recursive case (function calling itself). 

// 1. Base case: solution to the "simplest" possible problem.

// 2. Recursive case is when you use the same algorithm to solve a simpler problem of itself with the same number of parameters to solve a smaller version of the problem.

const sumOf = function (list) {
    // Base case
    if (list.length === 1) { // checks to see if the list has only 1 item
        return list[0];
    }
    // General case
    return list[0] + sumOf(list.slice(1)); // after each time the functions calls itself, the list has 1 less item
}

let lst = [2, 4, 6, 8, 10];
console.log('sumOf =', sumOf(lst)); // 30

/* 
What is the input of the program?
What is the output of the program?
What is the input to each recursive call?
What is the output of each recursive call? 
*/

// ================== Counting SHeep ==========================
// TODO: 1. Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

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

// ==================== Power Calculator ======================
// TODO: Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// expected output: powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

function powerCalculator(base, exp) {
    // base case
    if (exp < 0) {
        return 'exponent should be >= 0';
    }
    // general case
    else if (exp === 0) {
        return 1;
    } else {
        return base * powerCalculator(base, exp - 1);
    }
}

console.log(powerCalculator(10, 2)); // output: 100
console.log(powerCalculator(10, -2)); // 'exponent should be >= 0'

// ============== Reverse String =========================
// TODO: Write a function that reverses a string. Take a string as input, reverse the string and return the new string.

// input: abcde
// output: edcba

function reverseString(string) {
    // base case
    if (string.length <= 0) {
        return '';
    }
    if (string.length >= 1) {
        return string[string.length - 1] + reverseString(string.slice(0, -1));
    }
}

console.log(reverseString('abcde')) // output: edcba

// ================== nth Triangular Number =======================
// TODO: Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangular(n) {
    // base case
    if (n === 1) { // when number reaches 0
        return 1;
    } else {
        return n + triangular(n - 1);
    }
}

console.log('triangular =', triangular(1)) // 1
console.log('triangular =', triangular(2)) // 3
console.log('triangular =', triangular(3)) // 6
console.log('triangular =', triangular(4)) // 10
console.log('triangular =', triangular(5)) // 15

// ============== String Splitter ===================
// TODO: Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: 02202020

function stringSplitter(string, sep) {
    // base case
    if (string.length === 0) {
        return '';
        // general cases
    } else if (string[0] === sep) {
        return stringSplitter(string.slice(1), sep);
    } else {
        return string[0] + stringSplitter(string.slice(1), sep);
    }
}

console.log(stringSplitter('02/20/2020', '/')) // 02202020

// ============ Fibonacci ================
// TODO: Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
// fib(num - 2) + fib(num - 1)

// input: 7
// output: 13

function fib(num) {
    // base case
    if (num === 0) {
        return;
    }
    else if (num === 1) {
        return 1;
    }
    else if (num === 2) {
        return 1;
    }
    // general case
    return fib(num - 2) + fib(num - 1);
}

console.log(fib(7)); // returns 13

// ==================== Factorial =======================
// TODO: Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// input: 5
// output: 120

function factorial(num) {
    // base case
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // 120

// ================= Anagrams ====================
// TODO: An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// input: 'east' (data type = string)
// output: list of strings of anagrams (string.length = 24)

function anagram(word) {
    let results = []; // store the results in an array
    // base case
    if (word.length <= 1) {
        return [word];
    }
    const str = word.split(''); // splits word into an array of single letters
    // console.log('str =', str); 
    str.forEach((letter, idx) => {
        let charLeft = [...str.slice(0, idx), ...str.slice(idx + 1)].join('');
        const permutations = anagram(charLeft);
        permutations.forEach(permutation => {
            results.push(letter + permutation);
        });
    });
    return results;
}

console.log(anagram('east')); // returns 24 strings

// ================ Binary Representation =======================
// TODO: Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

// input: 3
// output: 11

function binary(num) {
    // base case
    if (num < 1) {
        return '';
    } else {
        return binary(num / 2) + Math.floor(num % 2);
    }
}

console.log(binary(3)); // 11
console.log(binary(25)); // 11001