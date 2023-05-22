console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
      console.log('FIZZ');
    } else if (i % 5 === 0) {
      console.log('BUZZ');
    } else {
      console.log(i);
    }
  }
  
// Exercise 3 Section
console.log("EXERCISE 1:\n==========\n");
//Exercise 1 while
let i = 1;

while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  
  i++;
}
//Exercise 1 do-while
let x = 1;

do {
  if (x % 2 !== 0) {
    console.log(i);
  }
  
  x++;
} while (i <= 100);
//Exercise 2 while
let a = 1;

while (a <= 100) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (a % 3 === 0) {
    console.log('FIZZ');
  } else if (a % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(a);
  }
  
  a++;
}
//Exercise 2 do-while
let b = 1;

do {
  if (b % 3 === 0 && b % 5 === 0) {
    console.log('FIZZBUZZ');
  } else if (b % 3 === 0) {
    console.log('FIZZ');
  } else if (b % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(b);
  }
  
  b++;
} while (b <= 100);


// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");
let value = Math.round(Math.random() * 500);
let q = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for (let i = 1; i <= q; i++) {
  if (i === value) {
    console.log("Found value!");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Did not find value");
}

// Exercise 5 Section
console.log("EXERCISE 1:\n==========\n");
console.log("Exercise 5:");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log("FIZZBUZZ");
  } else if (i % fizzDivisor === 0) {
    console.log("FIZZ");
  } else if (i % buzzDivisor === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }


}
