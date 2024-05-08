document.addEventListener('DOMContentLoaded', function() {
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
