// Desafio 1
function compareTrue(primeiroTermo, segundoTermo){
  if (primeiroTermo == true && segundoTermo == true){
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}
console.log(splitSentence("go trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(string) {
  let ultimoTerm = string[string.length - 1];
  let primeiroTerm = string[0];
  return ultimoTerm + ", " + primeiroTerm;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins;
  let b = ties;
  return ((a * 3)+(b * 1));
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayN) {
  let ocorrencia = arrayN[0]
  let vezes = 0;
  for (let index = 0; index < arrayN.length; index+= 1){
    if(ocorrencia === arrayN[index]) vezes++;
  }
  return vezes;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))){
  return 'cat1';
} 
  if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))){
  return 'cat2';
} 
  if (Math.abs((mouse - cat1)) === Math.abs((mouse - cat2))){
  return "os gatos trombam e o rato foge"
}
}
console.log(catAndMouse(5,2,3));
console.log(catAndMouse(7,1,19));
console.log(catAndMouse(5,1,1));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  let strin = "bug!"
  for (let index = 0; index < array.length; index ++){
  if (array[index]% 3 === 0){
    strin = "fizz"
  }
  if (array[index]% 5 === 0){
    strin += "buzz"
  }
  if (array[index] % 3 === 0 && fizzBuzz[index]% 5 === 0){
    strin += "fizzBuzz"
  } result.push(strin);
} return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let trocaA = string.replace(/["a"]/gi, "1") ;
  let trocaE = trocaA.replace(/["e"]/gi, "2") ;
  let trocaI = trocaE.replace(/["i"]/gi, "3") ;
  let trocaO = trocaI.replace(/["o"]/gi, "4") ;
  let trocaU = trocaO.replace(/["u"]/gi, "5") ;
  return trocaU
}
console.log(encode("hi there!"));

function decode(encodeString) {
  let troca1 = encodeString.replace(/["1"]/gi, "a") ;
  let troca2 = troca1.replace(/["2"]/gi, "e") ;
  let troca3 = troca2.replace(/["3"]/gi, "i") ;
  let troca4 = troca3.replace(/["4"]/gi, "o") ;
  let troca5 = troca4.replace(/["5"]/gi, "u") ;
  return troca5
}
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList() {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
