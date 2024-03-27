1) Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.

<!DOCTYPE html>
     <html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Caixa de Alerta</title>
</head>
<body>

<script>
// Definindo a informação que será exibida na caixa de alerta
var informacao = "Olá";

// Exibindo a caixa de alerta com a informação
alert(informacao);
</script>

</body>
</html>

     
2) Crie um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.

<!DOCTYPE html>
     <html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Botão de Alerta</title>
</head>
<body>

<button id="botaoAlerta">Clique Aqui</button>

<script>
// Obtendo uma referência para o botão
var botao = document.getElementById("botaoAlerta");

// Adicionando um evento de clique ao botão
botao.addEventListener("click", function() {
    // Definindo a mensagem que será exibida na caixa de alerta
    var mensagem = "Botão clicado";

    // Exibindo a caixa de alerta com a mensagem
    alert(mensagem);
});
</script>

</body>
</html>


     
3)  De exemplo dos seguintes formas de trabalhar com DOM(Document Object Model), e explique:
     . document.getElementById();

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo document.getElementById()</title>
</head>
<body>

<div id="exemplo">exemplo usando getElementById.</div>

<script>
// Obtendo a referência para o elemento com o ID "exemplo"
var elemento = document.getElementById("exemplo");

// Alterando o conteúdo do elemento
elemento.textContent = "Texto alterado com getElementById!";
</script>

</body>
</html>


     . document.getElementsByTagName();

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo document.getElementsByTagName()</title>
</head>
<body>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
// Obtendo uma lista de todos os elementos 'li' dentro da lista não ordenada ('ul')
var listaItens = document.getElementsByTagName("li");

// Alterando o texto do primeiro item da lista
listaItens[0].textContent = "Texto alterado com getElementsByTagName!";
</script>

</body>
</html>


     . document.getElementsByClassName();


<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo document.getElementsByClassName()</title>
</head>
<body>

     <p class="destaque">Este é um parágrafo destacado.</p>
     <p>Este é outro parágrafo.</p>

<script>
// Obtendo uma lista de todos os elementos com a classe 'destaque'
var elementosDestaque = document.getElementsByClassName("destaque");

// Alterando o texto do primeiro elemento com a classe 'destaque'
elementosDestaque[0].textContent = "Texto alterado com getElementsByClassName!";
</script>

</body>
</html>


     . document.querySelector();

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo document.querySelector()</title>
</head>
<body>

<div class="container">
  <p class="destaque">Este é um parágrafo destacado dentro de um contêiner.</p>
</div>

<script>
// Obtendo a referência para o primeiro elemento com a classe 'destaque' dentro do contêiner
var elementoDestaque = document.querySelector(".container .destaque");

// Alterando o texto do elemento encontrado
elementoDestaque.textContent = "Texto alterado com querySelector!";
</script>

</body>
</html>


     . document.querySelectorAll();

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo document.querySelectorAll()</title>
</head>
<body>

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
// Obtendo uma lista de todos os elementos 'li' dentro da lista não ordenada ('ul')
var listaItens = document.querySelectorAll("ul li");

// Alterando o texto de todos os itens da lista
listaItens.forEach(function(item) {
  item.textContent = "Texto alterado com querySelectorAll!";
});
</script>

</body>
</html>



4) Descreva e crie exemplos com suas formas diferente eventos no javascript,segue alguns exemplo:
  . onmouseover

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Exemplo onmouseover</title>
<style>
  #elemento {
    width: 200px;
    height: 100px;
    background-color: lightblue;
  }
</style>
</head>
<body>

<div id="elemento" onmouseover="mudarCor()">Passe o mouse sobre mim</div>

<script>
function mudarCor() {
  document.getElementById("elemento").style.backgroundColor = "lightgreen";
}
</script>

</body>
</html>

       
  . onfocus;

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo onfocus</title>
</head>
<body>

     <input type="text" onfocus="mostrarMensagem()" placeholder="Clique aqui para digitar">

<script>
function mostrarMensagem() {
  alert("O campo de entrada recebeu o foco!");
}
</script>

</body>
</html>


  . onchange;

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplo onchange</title>
</head>
<body>

<select onchange="mostrarSelecao()">
  <option value="opcao1">Opção 1</option>
  <option value="opcao2">Opção 2</option>
  <option value="opcao3">Opção 3</option>
</select>

<script>
function mostrarSelecao() {
  var select = document.querySelector("select");
  var opcaoSelecionada = select.options[select.selectedIndex].text;
  alert("Você selecionou: " + opcaoSelecionada);
}
</script>

</body>
</html>


  . entre outros; 

 5) De exemplo de os tipos de funções:
    . Função Nomeada;
    . Função Nomeada com argumento(parametro) e retorno;
    . Função com Construtor;
    . Função Literal (variável);
    . Função de Flecha(Arrow functions);

<!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Exemplos de Funções em JavaScript</title>
</head>
<body>

<script>
// Função Nomeada
function saudacao() {
  console.log("Olá, mundo!");
}
saudacao(); // Saída: Olá, mundo!

// Função Nomeada com argumento e retorno
function quadrado(numero) {
  return numero * numero;
}
var resultadoQuadrado = quadrado(5);
console.log(resultadoQuadrado); // Saída: 25

// Função com Construtor
var minhaFuncao = new Function('a', 'b', 'return a * b');
var resultadoConstrutor = minhaFuncao(5, 3);
console.log(resultadoConstrutor); // Saída: 15

// Função Literal (variável)
var saudacaoVariavel = function() {
  console.log("Olá, mundo!");
};
saudacaoVariavel(); // Saída: Olá, mundo!

// Função de Flecha (Arrow functions)
var saudacaoFlecha = () => {
  console.log("Olá, mundo!");
};
saudacaoFlecha(); // Saída: Olá, mundo!
</script>

</body>
</html>



 6)  Desenvolva um script qua ao clicar no botão conta o numero de vezes clicado,
em que seja separado o HTML e o JavaScript.


      <!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Contador de Cliques</title>
</head>
<body>

     <button id="botaoContador">Clique Aqui</button>
     <p id="contador">0</p>

<script src="script.js"></script>
</body>
</html>


// Selecionando o botão e o parágrafo de contador
var botaoContador = document.getElementById("botaoContador");
var contadorElemento = document.getElementById("contador");

// Inicializando o contador
var contador = 0;

// Função para atualizar o contador e exibir no parágrafo
function contarClique() {
  contador++;
  contadorElemento.textContent = contador;
}

// Adicionando um evento de clique ao botão para chamar a função de contarClique
botaoContador.addEventListener("click", contarClique);


      
 7) Crie uma função que receba uma string como parâmetro
     e retorne a mesma string com todas as letras em caixa alta.
    Utilize essa função para converter diferentes strings.


          <!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Conversor para Caixa Alta</title>
</head>
<body>

<!-- Formulário para inserir uma string -->
<form id="formString">
  <label for="inputString">Digite uma string:</label><br>
  <input type="text" id="inputString" name="inputString"><br><br>
  <button type="button" onclick="converterString()">Converter para Caixa Alta</button>
</form>

<!-- Div para exibir o resultado -->
<div id="resultado"></div>

<script>
// Função que converte todas as letras de uma string para caixa alta
function converterParaCaixaAlta(str) {
  return str.toUpperCase();
}

// Função para converter a string e exibir o resultado
function converterString() {
  // Obtendo a string do input
  var input = document.getElementById("inputString").value;
  
  // Convertendo a string para caixa alta
  var resultado = converterParaCaixaAlta(input);
  
  // Exibindo o resultado na div
  document.getElementById("resultado").innerText = resultado;
}
</script>

</body>
</html>


          
 8) Crie uma função que receba dois números como parâmetros e retorne a soma deles.
     Utilize essa função para realizar somas diferentes.

  <!DOCTYPE html>
<html lang="pt-br">
<head>
     <meta charset="UTF-8">
     <title>Soma de Dois Números</title>
</head>
<body>

<!-- Formulário para inserir dois números -->
<form id="formSoma">
  <label for="numero1">Número 1:</label>
  <input type="number" id="numero1" name="numero1"><br><br>
  
  <label for="numero2">Número 2:</label>
  <input type="number" id="numero2" name="numero2"><br><br>
  
  <button type="button" onclick="calcularSoma()">Calcular Soma</button>
</form>

<!-- Div para exibir o resultado -->
<div id="resultado"></div>

<script>
// Função que recebe dois números como parâmetros e retorna a soma deles
function somarNumeros(num1, num2) {
  return num1 + num2;
}

// Função para calcular a soma e exibir o resultado
function calcularSoma() {
  // Obtendo os valores dos inputs
  var num1 = parseFloat(document.getElementById("numero1").value);
  var num2 = parseFloat(document.getElementById("numero2").value);
  
  // Verificando se os valores são números
  if (!isNaN(num1) && !isNaN(num2)) {
    // Calculando a soma
    var resultado = somarNumeros(num1, num2);
    
    // Exibindo o resultado na div
    document.getElementById("resultado").innerText = "Resultado da soma: " + resultado;
  } else {
    // Exibindo uma mensagem de erro se os valores não forem números
    document.getElementById("resultado").innerText = "Por favor, insira valores numéricos válidos.";
  }
}
</script>

</body>
</html>


