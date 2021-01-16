  (function(doc){
    'use strict'
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var input1;
  var input2;
  var op;


  var $display = doc.querySelector('input[name="display"]');
  var $buttonsNumber = doc.querySelectorAll('.button-number');
  var $buttonCE = doc.querySelector('.button-ce');
  var $buttonsOperation = doc.querySelectorAll('.button-operator');
  var $buttonEqual = doc.querySelector('.button-equal');

    Array.prototype.forEach.call($buttonsNumber, function(button){
      button.addEventListener('click', handleClickNumber, false);
    })

    $buttonCE.addEventListener('click', handleClickCE, false);

    Array.prototype.forEach.call($buttonsOperation, function(buttonOperator){
      buttonOperator.addEventListener('click', handleOperation, false);
    })

    $buttonEqual.addEventListener('click', handleClickEqual, false);

    function handleClickNumber(){
      if($display.value == "0")
        return $display.value = this.value;

      $display.value += this.value;
    }

    function handleClickCE(){
      $display.value = 0;
    }

    function handleOperation(){
      $display.value = removeLastItemIfItiSAnOperator($display.value);
      $display.value += this.value;
    }

    function removeLastItemIfItiSAnOperator(number){
      if(isLastItemAndOperation(number)){
        return number.slice(0, -1);
      }
      return number;
    }

    function isLastItemAndOperation(number){
      var operations = ['+', '-', '*', '/'];
      var lastItem = number.split("").pop();

      return operations.some(function(operator){
        return operator == lastItem;
      })
    }

    function handleClickEqual(){
      $display.value = removeLastItemIfItiSAnOperator($display.value);
      var allValues = $display.value.match(/\d+[/*+-]?/g);

        $display.value = allValues.reduce(function(accumulated, actual){
        var firstValue = accumulated.slice(0, -1)
        var operator = accumulated.split('').pop();
        var secondValue = removeLastItemIfItiSAnOperator( actual );
        var lastOperador = isLastItemAndOperation( actual ) ? actual.split('').pop() : ''


        return eval(parseInt(firstValue) + operator + parseInt(secondValue)) + lastOperador


        // switch(operator){
        //   case '+':
        //     return (Number(firstValue) + Number(secondValue)) + lastOperador;
        //   case '-':
        //     return (Number(firstValue) - Number(secondValue)) + lastOperador;
        //   case '*':
        //     return (Number(firstValue) * Number(secondValue)) + lastOperador;
        //   case '/':
        //     return (Number(firstValue) / Number(secondValue)) + lastOperador;
        // }
      })
    }


})(document)
