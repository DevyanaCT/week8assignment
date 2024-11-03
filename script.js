function sumEvenOdd(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    return { evenSum, oddSum };
}

//const result = sumEvenOdd([1, 2, 3, 4, 5]);
//console.log(result);

function findDuplicates(arr) {
  const duplicates = [];
  const counter = {};
  
  for (const item of arr) {
      counter[item] = (counter[item] || 0) + 1;
      if (counter[item] === 2) {
          duplicates.push(item);
      }
  }
  
  return duplicates;
}
//const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
//console.log(findDuplicates(numbers)); 

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
}

function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9/5 + 32) * 10) / 10;
}
//console.log(fahrenheitToCelsius(32)); 
//console.log(celsiusToFahrenheit(0));   

function reverseString(str) {
  return str.split('').reverse().join('');
}

//console.log(reverseString("JavaScript"));

function countVowels(str) {
  let vowelCount = 0;

  str = str.toLowerCase();
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }

  return vowelCount;
}

//console.log(countVowels("JavaScript is fun"));  // Expected output: 5

function findPrimes(n) {
  let primes = [];
  
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

console.log(findPrimes(20));  // Expected output: [2, 3, 5, 7, 11, 13, 17, 19]
