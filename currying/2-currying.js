// Aqui estamos executando uma função de soma onde ela pega o parâmetro fixo
// chamado a e retorna uma nova função que possui como parâmetro o que será somado
// com esse parâmetro fixo, chamado b e retorna a soma entre eles.
function sum(a) {
  return function sumII(b) {
    return a + b;
  }
}

const sumII = sum(2);

sumII(1);
sumII(2);
sumII(3);
sumII(4);
sumII(5);