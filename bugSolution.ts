function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    return 0; // Handle the error appropriately
  }
}

let result1 = addSafe(1, '2'); // Returns 0
let result2 = addSafe(1, 2);   // Returns 3