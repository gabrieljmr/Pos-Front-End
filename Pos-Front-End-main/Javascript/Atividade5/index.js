// Criação de um Objeto JSON
let aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Engenharia",
    notas: [7.5, 8.2, 9.0]
};

// Acesso a Propriedades
console.log("Nome do aluno:", aluno.nome);
console.log("Primeira nota:", aluno.notas[0]);

// Modificação de Propriedades
aluno.idade = 22;
aluno.notas.push(8.7);

// Conversão para String
let alunoStr = JSON.stringify(aluno);
console.log("Objeto aluno em JSON:", alunoStr);

// Conversão para Objeto
let alunoObj = JSON.parse(alunoStr);

// Iteração sobre Propriedades
console.log("Propriedades do aluno:");
for (let prop in alunoObj) {
    console.log(prop + ":", alunoObj[prop]);
}

// Cálculo da Média das Notas
let media = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
console.log("Média das notas:", media.toFixed(2));

// Objeto JSON Aninhado
aluno.endereco = {
    rua: "Rua das Flores",
    cidade: "João Pessoa",
    estado: "PB"
};

// Acesso a Dados Aninhados
console.log("Cidade:", aluno.endereco.cidade);
console.log("Estado:", aluno.endereco.estado);

// Lista de Alunos
let alunos = [
    aluno,
    {
        nome: "João",
        idade: 23,
        curso: "Matemática",
        notas: [9.5, 8.8, 7.9],
        endereco: { rua: "Av. Central", cidade: "Campina Grande", estado: "PB" }
    },
    {
        nome: "Ana",
        idade: 20,
        curso: "Física",
        notas: [8.2, 8.5, 8.9],
        endereco: { rua: "Rua Nova", cidade: "Patos", estado: "PB" }
    }
];

// Filtragem de Alunos com média > 8
let alunosComMediaAlta = alunos.filter(aluno => {
    let m = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
    return m > 8;
});
console.log("Alunos com média superior a 8:", alunosComMediaAlta);