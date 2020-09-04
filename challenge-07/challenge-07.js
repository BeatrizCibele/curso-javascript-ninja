/*
Crie um array com 5 items (tipos variados).
*/
let arrayVariados = ["Nome", 123, true, undefined, function(){}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newItem){
    return arrayVariados.push(newItem);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
let newArrayVariados = ["A", 1, NaN];
addItem(newArrayVariados);
console.log(arrayVariados);


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento desse último array é ", arrayVariados[5][1])

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem", arrayVariados.length -1, "itens")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array criado tem",newArrayVariados.length,"itens");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let contador = 10;
while(contador <= 20){
    if(contador % 2 == 0){
        console.log(contador)
    }
    contador++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?
contador = 10;
while(contador <= 20){
    contador % 2 != 0 ? console.log(contador) : "";   
    contador++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(let i = 100; i <= 120; i++){
    i % 2 == 0 ?  console.log(i) : '';    
}

console.log( 'Números ímpares entre 111 e 125:' );
for(let i = 111; i <= 125; i++){
    i % 2 != 0 ? console.log(i) : '';
    
}