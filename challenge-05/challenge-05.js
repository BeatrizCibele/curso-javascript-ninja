/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varMix = ["Beatriz", 1994, undefined, null, " "]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr){
    return varMix;
}
console.log(returnArray(varMix));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(varMix)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnNewArray(array, number){
    return array[number];
}
console.log(returnNewArray(["B", "A", "H", "tchê!"], 3));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var fiveValues = ["12345", 12345, null, false, function(){}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnNewArray(fiveValues, 0));
console.log(returnNewArray(fiveValues, 1));
console.log(returnNewArray(fiveValues, 2));
console.log(returnNewArray(fiveValues, 3));
console.log(returnNewArray(fiveValues, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
    let livraria = {          
            "Código Limpo":{
                quantidadePaginas: 447,
                autor: "Robert C. Martin",
                editora: "Alta Books",
            },
            "Algoritmos para a vida":{
                quantidadePaginas: 528,
                autor: "Brian Christian",
                editora: "Companhia das letras",
            },
            "Design Patterns":{
                quantidadePaginas: 568,
                autor: "Erich Gamma",
                editora: "Addison-Wesley Professional",
            }    
    }
    return !nomeLivro ? livraria : livraria[nomeLivro];
}
console.log(book("Design Patterns"));
console.log(book());
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nomeLivro = "Código Limpo";
console.log("O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
nomeLivro = "Algoritmos para a vida";
console.log(`O autor do livro ${nomeLivro} é ${book(nomeLivro).autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
nomeLivro = "Design Patterns";
console.log(`O livro ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}`);
