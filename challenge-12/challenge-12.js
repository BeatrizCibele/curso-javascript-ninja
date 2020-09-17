(function(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: "Beatriz",
        lastname: "Dias",
        age: 26
    }
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    var arrProps = Object.keys(person);
    console.log(arrProps);
    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({ name: "Eloquente Javascript", pages: 205});
    books.push({name: "Clean Code", pages: 431});
    books.push({name: "Expressões Regulares", pages: 96});
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    var bookRemoved = books.pop();
    console.log(bookRemoved);

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books = JSON.stringify(books);
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);

    /*
    Converta os livros novamente para objeto.
    */
   console.log( '\nAgora os livros são objetos novamente:' );
   books = JSON.parse(books);
   console.log(books)

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(let i = 0; i < books.length; i++){
        for(var prop in books[i]){
            console.log(`${prop}: ${books[i][prop]}`)
        }
    }

    /* Outra forma de mostrar as propriedades*/
    for(let prop in Object.keys(books)){
        console.log(`== ${books[prop].name}: ${books[prop].pages} ==`);
    }
    console.log(books[0])

    
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ["B", "e", "a", "t","r","i","z"];

    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    var myNameConcat = myName.join("");
    
    console.log(myNameConcat);

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
   var nameReverse = [];
    for(let i = myName.length -1; i >= 0; i--){
        nameReverse.push(myName[i]);
    }
    //var nameLowerCase = nameReverse[myName.length]
    console.log(nameReverse.join(""));
    
    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    
     console.log(nameReverse.sort().join(""));
})();