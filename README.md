# sg-data

## Big O

### What is Good Code?
```
1. Readable
2. Scalable - Big O

// Method 1
const nemo = ['nemo'];
const everyone = ['aemo', 'bemo', 'cemo', 'demo', 'eemo', 'femo', 'gemo', 'hemo', 'iemo', 'nemo', 'kemo', 'lemo', 'memo'];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for(let i = 0; i < array.length; i++){
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
      break;
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

findNemo(large); // O(n) --> Linear Time

```

### What is Big O

```
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; O(1)
}

BIG 3 + 4n, O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1;  // O(n)
    let y = i + 2;  // O(n)
    let z = i + 3;  // O(n)
  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

Big O(4 + 5n) - O(n)
```

### Simplifying Big O

```
Rule 1: Worst Case

Rule 2: Remove Constants

Rule 3: Different terms for inputs
 
  O(a + b)

Rule 4: Drop Non Dominants

// Loop inside loop

// log all pairs of array
const boxes = [1,2,3,4,5];

function logAllPairsOfArray(array){
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++){
      console.log(array[i], array[j]);
    }
  }
}

function logAllPairsOfArray(array){
  array.forEach(function(el1) {
    array.forEach(function(el2) {
      console.log(el1, el2);
    });
  });
}

logAllPairsOfArray(boxes);

O(n^2) - Quadratic Time
```

