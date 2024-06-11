//reverse string function
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // Output: "olleh"

 //count characters in a string 
  function countCharacters(str) {
    return str.length;
  }
  
  console.log(countCharacters("hello")); // Output: 5

 //capitalize first letter of a string
 function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  console.log(capitalizeWords("hello world")); // Output: "Hello World"


  //find max and min number in an array
  function findMax(array) {
    return Math.max(...array);
  }
  
  function findMin(array) {
    return Math.min(...array);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(findMax(numbers)); // Output: 5
  console.log(findMin(numbers)); // Output: 1
  
//sum of numbers in an array
  function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumArray(numbers)); // Output: 15

  //filter array
  function filterArray(array, condition) {
    return array.filter(condition);
  }
  
  const filteredNumbers = filterArray(numbers, num => num > 2);
  console.log(filteredNumbers); // Output: [3, 4, 5]
  
  //factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Output: 120

  //prime number check

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrime(7)); // Output: true
  console.log(isPrime(10)); // Output: false

  //fibonacci series
  function fibonacci(n) {
    if (n <= 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
  
  
  