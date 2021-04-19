 (function(doc){
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM (elements){
    this.elements = doc.querySelectorAll(elements)

   this.on = function on(eventName, functionName){
    Array.prototype.forEach.call(this.elements, function(element){
      element.addEventListener(eventName, functionName, false)
    })
   }

   this.off = function off(eventName, functionName) {
     Array.prototype.forEach.call(this.elements, function(element){
       element.removeEventListener(eventName, functionName, false)
     })
   }

   this.get = function get() {
     return this.elements;
   }

  //   this.typeOf = function typeOf(obj){
  //   return Object.prototype.toString.call(obj)
  //  }

   DOM.prototype.typeOf = function typeOf(obj){
    return Object.prototype.toString.call(obj)
   }
 }

 flatMap = function(){
  return Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
  }
 }

 var escola = [{
   turma: "M1",
   alunos: [{
     nome: "Maria Francisca",
     nota: 95
   },{
     nome: "Enzo Gabriel",
     nota: 100
   },{
     nome: "Nonato Farias",
     nota: 85
   }]
 },{
   turma: "M2",
   alunos: [{
    nome: "Francisca Maria",
    nota: 59
  },{
    nome: "Gabriel Enzo",
    nota: 001
  },{
    nome: "Farias Nonato",
    nota: 58
  }]
 },{
   turma: "M3",
   alunos: [{
    nome: "Marlinda Fran",
    nota: 90
  },{
    nome: "Enzo",
    nota: 100
  },{
    nome: "Nonata",
    nota: 70
  }]
 }]

 DOM.prototype.forEach = function(){
   return Array.prototype.forEach.apply(this.elements, arguments);
 }

 var $a = new DOM('[data-js="link"]');
$a.forEach(a => console.log(a.firstChild.nodeValue));

 DOM.prototype.map = function(){
  return Array.prototype.map.apply(this.elements, arguments);
 }
 var mapa = $a.map(function(a){
   return a.getAttribute('data-js');
 })
 console.log(mapa);

 DOM.prototype.filter = function(){
   return Array.prototype.filter.apply(this.elements, arguments);
 }

 //filtrar notas maiores que 5.9
 var $b = new DOM('[data-js="notas"]')
 var maioresNotas = $b.filter(function(elements){
  return (elements.firstChild.nodeValue > 5.9);
 });

 maioresNotas.forEach(p => console.log('-> ', p.innerHTML));

 //mostrar a media de notas
 DOM.prototype.reduce = function(){
  return Array.prototype.reduce.apply(this.elements, arguments);
 }

 var $c = new DOM('[data-js="notas"]');
 var arrayNotas = $c.map(p => p.firstChild.nodeValue);
 var mediaNotas = arrayNotas.reduce(function(acumulador, nota, index, arr){
    var total = +acumulador + +nota;
    var media = index+1 == arr.length ? total/(index+1) : total;
    return media.toFixed(2);
 });
 console.log(mediaNotas);

 //reduz as notas da direita para esquerda
 DOM.prototype.reduceRight = function(){
   return Array.prototype.reduceRight.apply(this.elements, arguments);
 }
 var $notas = new DOM('[data-js="link"]');
 var reduceRight = $notas.reduceRight(function(acc, item, index){
   return acc + ' ' + item.getAttribute('data-js') + ' '+ index;
 }, 0)
 console.log(reduceRight);

 DOM.prototype.every = function(){
    return Array.prototype.every.apply(this.elements, arguments);
 }

  DOM.prototype.some = function(){
    return Array.prototype.some.call(this.elements, arguments);
  }

  DOM.prototype.isArray = function isArray(param){
    return Object.prototype.toString.call(param) === '[object Array]';
  }

  console.log(DOM.prototype.isArray([1,1,1]));
  var dom = new DOM();
  console.log(dom.isArray([1,2,3]));

  DOM.prototype.isObject = function(param){
    return Object.prototype.toString.call(param) === '[object Object]';
  }

  console.log(DOM.prototype.isObject(["1","2"]));
  console.log(dom.isObject({}));

  DOM.prototype.isFunction = function(param){
    return Object.prototype.toString.call(param) === '[object Function]';
  }

  console.log(DOM.prototype.isFunction(function(){}));
  console.log(dom.isFunction(1));

  DOM.prototype.isNumber = function(param){
    return Object.prototype.toString.call(param) === '[object Number]';
  }

  console.log(DOM.prototype.isNumber(5));
  console.log(dom.isNumber({}));

  DOM.prototype.isString = function(param){
    return Object.prototype.toString.call(param) === '[object String]';
  }

  console.log(DOM.prototype.isString(''));
  console.log(dom.isString(function(){}));

  DOM.prototype.isBoolean = function(param){
    return Object.prototype.toString.call(param) === '[object Boolean]';
  }

  console.log(DOM.prototype.isBoolean(2));
  console.log(dom.isBoolean(false));

  //Função estatica que retorna t ou f para tipos de objetos(função refatorada);
  DOM.isTypeValid = function(param, checker){
    var arr = ['isArray', 'isObject', 'isFunction', 'isNumber', 'isString', 'isBoolean', 'isNull'];
    return arr.some(checker => checker) ? Object.prototype.toString.call(param) === checkType(checker) : "param was not defined";
  }

  function checkType(checker){
    return checker === "isArray" ? "[object Array]" : checker === "isObject" ? "[object Object]"
    : checker === "isFunction" ? "[object Function]" : checker === "isNumber"  ? "[object Number]"
    : checker === "isString" ? "[object String]" : checker === "isBoolean" ? "[object Boolean]"
    : checker === "isNull" ? "[object Null]" : "type was not defined";
  }

  console.log('isNull ->', DOM.isTypeValid(null, "isNull"));
  console.log('isArray ->', DOM.isTypeValid(['1','2','3'], "isArray"));

})(document)
