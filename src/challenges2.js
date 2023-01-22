const MESAGE_1 = 'Array com tamanho incorreto.';
const MESAGE_2 = 'não é possível gerar um número de telefone com esses valores';
function lengthCheck(array) {
  let result = '';
  if (array.length !== 11) result = MESAGE_1;
  return result;
}
function limitValueCheck(array) {
  let result = '';
  for (let num of array) {
    if (num < 0 || num > 9) result = MESAGE_2;
  }
  return result;
}

function checkRepeat(array) {
  let result = '';
  // chek rule repeat 3 times or more
  let numberArraySorted = array.slice(0);
  numberArraySorted.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i <= 8; i += 1) {
    if (numberArraySorted[i] === numberArraySorted[i + 2]) {
      result = MESAGE_2;
    }
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = '';
  result = lengthCheck(array);
  if (result.length === 0) {
    result = limitValueCheck(array);
  }
  if (result.length === 0) {
    result = checkRepeat(array);
  }
  if (result.length === 0) {
    // format number
    let DDD = array.slice(0, 2).join('');
    let firstPart = array.slice(2, 7).join('');
    let secondPart = array.slice(7).join('');
    result = `(${DDD}) ${firstPart}-${secondPart}`;
  }
  return result;
}
console.log(generatePhoneNumber([1, 1, 2, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLineA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let checkLineB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let checkLineC = lineC < lineA + lineB && lineC > Math.abs(lineB - lineC);
  return checkLineA && checkLineB && checkLineC;
}

// Desafio 13
function hydrate(drink) {
  let result = '';
  let drinksTaken = drink.match(/\d+/g).map(Number);
  let waterGlasses = drinksTaken.reduce((a, b) => a + b, 0);
  if (waterGlasses === 1) {
    result = `${waterGlasses} copo de água`;
  } else {
    result = `${waterGlasses} copos de água`;
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
