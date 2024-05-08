document.addEventListener('DOMContentLoaded', function() {
    let slide = document.getElementById('slide-imgs');
    let imatge = 1;

    document.querySelector('.anterior').addEventListener('click', function() {
        mouSlide(-1);
    });
    document.querySelector('.seguent').addEventListener('click', function() {
        mouSlide(1);
    });

    function mouSlide(direccio) {
        if(imatge < 9  && imatge >= 1) {
            if(direccio < 0 && imatge === 1) {
                imatge = 8;
            } else if (direccio < 0) {
                if (imatge > 1) {
                    imatge--;
                }
            } else if (direccio > 0) {
                if(imatge == 8) {
                    imatge = 1;
                } else {
                    imatge++;
                }
            }
            slide.src = `img/instalacions/${imatge}.jpg`;
        } else {
            imatge = 1;
            slide.src = `img/instalacions/${imatge}.jpg`;
        }
    }

    function avanceAutomatico() {
        setInterval(function() {
            mouSlide(1);
        }, 5000); // Avanza cada 5 segundos
    }

    avanceAutomatico();


    var preguntes = document.querySelectorAll('.pregunta');

    preguntes.forEach(function(pregunta) {
        pregunta.addEventListener('click', function() {
            var resposta = this.nextElementSibling;

            if (resposta.style.maxHeight) {
                tancarResposta(resposta);
            } else {
                obrirResposta(resposta);
                tancarAltresRespostes(resposta);
            }
        });
    });

    function obrirResposta(resposta) {
        resposta.style.maxHeight = resposta.scrollHeight + 'px';
    }

    function tancarResposta(resposta) {
        resposta.style.maxHeight = null;
    }

    function tancarAltresRespostes(respostaActual) {
        var respostes = document.querySelectorAll('.resposta');
        respostes.forEach(function(resposta) {
            if (resposta !== respostaActual) {
                tancarResposta(resposta);
            }
        });
    }
});