// Criação de Arrays
let notas = [6.5, 8.0, 7.2, 9.1, 5.8];

// Acesso aos Elementos
console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

// Adiciona uma nova nota ao final
notas.push(7.8);

// Remove a primeira nota
notas.shift();

// Exibe o array resultante
console.log("Notas após push e shift:", notas);

// Iteração com forEach
console.log("Notas individuais:");
notas.forEach((nota, i) => {
    console.log(`Nota ${i + 1}: ${nota}`);
});

// Cálculo da Média
const soma = notas.reduce((acc, nota) => acc + nota, 0);
const media = soma / notas.length;
console.log("Média das notas:", media);

// Filtro de Notas maiores que 7
const notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log("Notas maiores que 7:", notasMaioresQueSete);

// Ordenação crescente
notas.sort((a, b) => a - b);
console.log("Notas ordenadas:", notas);

// Busca de Elementos
console.log("Nota 6.5 está presente?", notas.includes(6.5));

// Índice da nota 8.0
console.log("Índice da nota 8.0:", notas.indexOf(8.0));

// Mapeamento: notas ao quadrado
const notasQuadrado = notas.map(nota => nota ** 2);
console.log("Notas ao quadrado:", notasQuadrado);