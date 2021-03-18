(function (doc) {
  "use strict";
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

  /* Keyup */
  // a mensagem, ou fução aparecem após parar de precionar
  var $input = doc.querySelector('[data-js="input"]');
  $input.addEventListener("keyup", onKeyup);

  function onKeyup(e) {
    return alert("Acabou de escrever alguma coisa");
  }

  /* Kedown */
  //uma ação acontece assim uma tecla é pressionada
  $input.addEventListener("keydown", onKeydown);

  function onKeydown(e) {
    return alert("Você pressionou um tecla");
  }

  /* Input */
  //Mostra os elementos do input um por entrada
  // igual ao o Keydown
  var $input2 = doc.querySelector('[data-js="input2"]');
  $input2.addEventListener("input", onInput);

  function onInput() {
    return alert("Campo 2");
  }

  /*
   * ~ Seleção de elementos parentes ~
   *obs: ao incluir 'element' os nós trazidos são html
   */
  var $div = doc.querySelector(".div");
  //Renderiza o filho 3 do arraylike na tela
  //Dica: tentar criar um display dinânmico, conforme seleção
  console.log($div.children.item(3)); // arraylike elementos html

  var $div2 = doc.querySelector(".div2");
  var $divMain = doc.querySelector(".main");
  var $footer = doc.querySelector("footer");
  var $select = doc.querySelector('[data-js="select"]');

  var $cloneSelect = $select.cloneNode(true);

  //adicionar função que atualizará somente um elemento na dom assim que o select for acionado
  $cloneSelect.addEventListener("change", updateSelect);

  $div2.insertBefore($cloneSelect, $footer);

  var elementChoosen = $div2.children[$cloneSelect.value].cloneNode(true);
  $div2.appendChild(elementChoosen);

  function updateSelect() {
    var newChild = $div2.replaceChild(
      $div2.children[$cloneSelect.value],
      elementChoosen
    );
    $div2.appendChild(newChild);
  }

  var $div3 = doc.querySelector('.div3');

  var painels = $div3.children;
  var currentSelect = doc.querySelector('[data-js="select"]');

  for(let i = 1; i < painels.length; i++){
    painels[i].hidden = true;
  }

  currentSelect.addEventListener('change', vUpdade);

  function switchSection(showThis){
    painels[showThis].hidden = false;
  }

  function clearShow(){
    for(let i = 0; i < painels.length; i++){
      painels[i].hidden = true;
    }
  }

  function vUpdade(){
    currentSelect = doc.querySelector('[data-js="select"]').value;
    clearShow();
    switchSection(currentSelect);
  }

  console.log($div3.children[0]);
})(document);
