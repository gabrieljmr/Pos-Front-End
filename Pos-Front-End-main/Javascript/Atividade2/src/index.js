import { gerarNumeroAleatorio } from './random.js';
import { verificarPalpite } from './check.js';

function iniciarJogo() {
    const tentativasMax = 5;
    const min = 1;
    const max = 100;
    const numeroSecreto = gerarNumeroAleatorio(min, max);

    let acertou = false;

    for (let tentativa = 1; tentativa <= tentativasMax; tentativa++) {
        const palpite = parseInt(prompt(`Tentativa ${tentativa}/${tentativasMax}: Adivinhe o número entre ${min} e ${max}`), 10);

        if (isNaN(palpite)) {
            console.log("Por favor, digite um número válido.");
            tentativa--;
            continue;
        }

        const resultado = verificarPalpite(palpite, numeroSecreto);
        console.log(resultado);

        if (palpite === numeroSecreto) {
            acertou = true;
            break;
        }
    }

    if (!acertou) {
        console.log(`Suas tentativas acabaram! O número era ${numeroSecreto}.`);
    }
}

iniciarJogo();