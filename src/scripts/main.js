AOS.init();

const dataEvento = new Date("Dec 20, 2023 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    
    const diasAteEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (tempoAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = "Evento expirado"
    }
}, 1000);