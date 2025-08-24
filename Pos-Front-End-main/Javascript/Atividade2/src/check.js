export function verificarPalpite(palpite, numeroSecreto) {
    if (palpite < numeroSecreto) {
        return "O número é maior!";
    } else if (palpite > numeroSecreto) {
        return "O número é menor!";
    } else {
        return "Parabéns! Você acertou!";
    }
}