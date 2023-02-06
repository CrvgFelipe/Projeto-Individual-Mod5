const readlineSync = require ('readline-sync'); // import da biblioteca readline sync 
const propri = [] // Cria um array vazio para armazenar as propriedades
let input = "" // Inicializa a variável de entrada como uma string vazia

while (input != "sair" ){ // Laço while que executa enquanto a entrada não for "sair"
  input = readlineSync.question('Digite as propriedades CSS:') // Lê a entrada das propriedades

  if (input == "ver") { // Verifica se a entrada é "ver"
    console.log(propri.sort().join('\n'));  // Imprime as propriedades em ordem alfabética
  } else if (!propri.includes(input) && input != "sair") {
    propri.push(input); // Adiciona a entrada à lista propriedades somente se ainda não existir na lista e a entrada não for "sair"
  }
}

