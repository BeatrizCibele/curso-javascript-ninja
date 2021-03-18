(function(doc){
  'use strict'
  /*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
function on(element, event, callback){
  doc.querySelector(element)
  .addEventListener(event, callback, true);
}

function off(element, event, callback){
  doc.querySelector(element)
  .removeEventListener(event, callback, false);
}


function handleClick(event){
  event.preventDefault();
  alert('clicou no a');
}

on('[data-js="input"]', 'click', function(){
  alert('novo click no a')
})

on('[data-js="input"]', 'click', handleClick);
off('[data-js="input"]', 'click,', handleClick);

/* ~ Events ~*/
//input - mostra os elementos do input um por entrada
//keyup - mostra os elementos assim que para de digitar
//keydown - mostra os elementos simultaneamente

on('[data-js="input"]', 'keydown', function(){
  console.log(this.value);
})
// on('[data-js="link"]', 'click', function(){
//   return alert('Booom')
// })

// on('[data-js="span"]', 'click', function(){
//   return alert("spam");
// })
on('[data-js="select"]', 'change', function(){
  doc.querySelector('[data-js="input"]').value = this.value;
});

/*
* ~ Seleção de elementos parentes ~
*obs: ao incluir 'element' os nós trazidos são html
*/

var $div = doc.querySelector('.div');
//console.log($div.firstChild.nextSibling.nodeName);
//console.log($div.children);
//console.log($div.firstElementChild.nextElementSibling); //mostra o elemento irmão que é html
//console.log($div.firstElementChild.nextSibling); //mostra todos os nós, incluindo quebra de linhas(text)
//console.log($div.childElementCount); //quantidade de filhos que o elemento tem
//console.log($div.hasAttribute('data-js')); //retorna true ou false se tiver o atributo. Tb existe o méetodo hasAttributes no plural
//console.log($div.firstElementChild.firstElementChild.textContent); //trás o conteúdo do "filho do filho"

/*
* ~ Inserção de um elemento dentro de outro ~
* ~ Pondo um elemento antes do outro ~
*/

var $header = doc.querySelector('.header');
$div.appendChild($header) //$div e $header são irmãos filhos da div main, mas agora a $div recebe seu irmão como filho

var $firstText = $div.firstChild;
$div.insertBefore($header, $firstText);

/*
* ~ Clone de elemento ~
  Cria um clone de header e adiciona o clone antes de header
*/
var $cloneHeader = $header.cloneNode(true);
$div.appendChild($cloneHeader);
$div.insertBefore($cloneHeader, $header)
console.log(doc.querySelectorAll('.header').length);

/* ~ Verifica o prmeiro elemento HTML filho~ */
var $div2 = doc.querySelector('.div2');
var $h1 = $div2.firstElementChild;
console.log($h1);

/*
* ~ Verifica se o elementro tem filhos(textos dentro dele) retorna true ou false ~
*/
console.log($h1.hasChildNodes());

/* ~ Remove o elemento filhos ~ */
$div.removeChild($cloneHeader);
console.log($div);

/* ~ Subtitui um filho ~ */
$div.replaceChild($h1, $header); //$h1 vindo no lugar do $header

/* ~ Cria um nó de texto ~ */
var $newTextNode = doc.createTextNode("Novo p!");
$div.appendChild($newTextNode);

/* ~ Cria uma elemento quando recebe uma tag e insere na div2 ~ */
var $newP = doc.createElement("p");
$newP.appendChild($newTextNode);
$div2.appendChild($newP);

/* Atributos */

//Pegando nome de atributo
console.log($header.className);
//Mudando o nome do atributo
$div.className = "main-header";
//Pega exatamente o atributo como ele é no html, retorna sempre strings
console.log($div.getAttribute('class'));
//Cria atributos novos e insere o valor do atributo
$div2.setAttribute('data-js', 'segundaDiv');

})(document)
