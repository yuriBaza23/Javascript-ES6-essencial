// A variável ainda não definida é tida como undefined e a partir da sua
// definição é considerada como o valor passado a ela

function fn() {
  console.log(text);
  
  var text = 'Ñ sou undefined';
  console.log(text)
}

fn();