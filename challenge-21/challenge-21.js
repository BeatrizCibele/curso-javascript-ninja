    (function(doc){
        'use strict'
        /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele;
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */
    var $buttonStart = doc.querySelector('[data-js="start"]');
    var $buttonStop = doc.querySelector('[data-js="stop"]');
    var $buttonReset = doc.querySelector('[data-js="reset"]');
    var $display = doc.querySelector('input[name="display"]')   
    
    var temporizador;    

    $buttonStop.addEventListener('click', stopTimer, false) 
    $buttonStart.addEventListener('click', startTimer, false)
    $buttonReset.addEventListener('click', resetTimer, false)

    function stopTimer(){
        clearInterval(temporizador);
    }

    function startTimer(){
        stopTimer();
        $display.value = +$display.value +1;
        temporizador = setTimeout(startTimer, 1000);
        setTimer(temporizador);
    }

    function resetTimer(){
        $display.value = 0;
        stopTimer();
    }
    
    function setTimer(seconds){       
        var hh = 0;
        var mm = 0;
        var ss = seconds;

        if(ss > 59){
            ss = 0;
            mm++;
        }
        if(mm > 59){
            mm = 0;
            hh++
        }

        hh = hh < 10 ? '0'+hh : hh;
        mm = mm < 10 ? '0'+mm : mm;
        ss = ss < 10 ? '0'+ss : ss;
        
        var curr_time = hh+':'+mm+':'+ss;
        return curr_time;
    }
    // var hInicial = new Date();
    // var hFinal = new Date();
    // function startTimer(){
    //     temporizador = setTimeout(startTimer, 1000);
    //     hFinal = +hFinal + 1;
    //     $display.value = hFinal - hInicial;
    // }
})(document)