// Desafio 1
// implemente na função `compareTrue`, um código que ao receber dois parâmetros booleanos deve:
// - Retornar `true` se ambos os valores forem verdadeiros;
// - Retornar `false` se um ou ambos os parâmetros forem falsos.
// Faça a função somente utilizando o operador `&&`.

function compareTrue(primeiroTermo, segundoTermo) {
//   if (primeiroTermo == true && segundoTermo == true){
//     return true;
//   } else {
//     return false;
//   }
// }
  return primeiroTermo && segundoTermo === true;
}

console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
// Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `base`) e
// outro de altura (chamado `height`) de um triângulo e retorne o cálculo da sua área.

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma
// array de strings separadas por cada espaço na string original.

function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
// Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma
// string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.

function concatName(string) {
  let ultimoTerm = string[string.length - 1];
  let primeiroTerm = string[0];
  return `${ultimoTerm}, ${primeiroTerm}`;
}

// Desafio 5
// Escreva uma função com o nome `footballPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `wins`) e
// o número de empates (esse parâmetro deverá se chamar `ties`) e retorne a quantidade de pontos que o time marcou em um campeonato.
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  // let a = wins;
  // let b = ties;
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
// Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
function highestCount(arrayN) {
  let ocorrencia = Math.max(...arrayN);
  let vezes = 0;
  for (let index = 0; index < arrayN.length; index += 1) {
    if (ocorrencia === arrayN[index]) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
// Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão caçando um mesmo rato chamado `mouse`. Imagine que
// os animais estão em uma reta, cada um em uma posição representada por um número.

// Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcule as
// distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs((mouse - cat1)) < Math.abs((mouse - cat2))) {
    return 'cat1';
  }
  if (Math.abs((mouse - cat1)) > Math.abs((mouse - cat2))) {
    return 'cat2';
  }
  if (Math.abs((mouse - cat1)) === Math.abs((mouse - cat2))) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:
// - Para cada número do Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
// - Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
// - Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
// - Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) result[i] = 'fizzBuzz';
    else if (array[i] % 3 === 0) result[i] = 'fizz';
    else if (array[i] % 5 === 0) result[i] = 'buzz';
    else result[i] = 'bug!';
  }
  return result;
}

// Desafio 9
function encode(string) {
  let trocaA = string.replace(/["a"]/gi, '1');
  let trocaE = trocaA.replace(/["e"]/gi, '2');
  let trocaI = trocaE.replace(/["i"]/gi, '3');
  let trocaO = trocaI.replace(/["o"]/gi, '4');
  let trocaU = trocaO.replace(/["u"]/gi, '5');
  return trocaU;
}

function decode(encodeString) {
  let troca1 = encodeString.replace(/["1"]/gi, 'a');
  let troca2 = troca1.replace(/['2']/gi, 'e');
  let troca3 = troca2.replace(/['3']/gi, 'i');
  let troca4 = troca3.replace(/['4']/gi, 'o');
  let troca5 = troca4.replace(/['5']/gi, 'u');
  return troca5;
}

// Desafio 10
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro
// chamado `name` com um nome.
// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

// {
//   tech: "NomeTech",
//   name: name
// }

// Estes objetos devem ser inseridos em uma nova lista em ordem alfabética a partir do campo `tech` no objeto.
// A saída da sua função deve ser uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.
function techList(tech, nome) {
  let listArr = [];
  if (tech.length !== 0) {
    tech.sort();
    for (let i = 0; i < tech.length; i += 1) {
      let results = {
        tech: tech[i],
        name: nome,
      };
      listArr.push(results);
    }
    return listArr;
  }
  return 'Vazio!';
}

module.exports = {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  decode,
  encode,
  techList,
};
