// Cria classe
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() >= 6 ? "Aprovado" : "Reprovado";
    }
}

// Cria Array 
const alunos = [
    new Aluno("Debora", "Laranjeira", 7, 8.5),
    new Aluno("Miguel", "Oliveira", 9, 7.5),
    new Aluno("Giovanna", "Menezes", 6, 5),
    new Aluno("Julia", "Campos", 4, 6),
    new Aluno("Eduardo", "Ferreira", 8, 9)
];

// Cria função
function mostrarDadosAlunos(listaAlunos) {
    for (let aluno of listaAlunos) {
        alert(
            "Nome: " + aluno.nomeCompleto() +
            "\nMédia: " + aluno.media().toFixed(2) +
            "\nSituação: " + aluno.situacao()
        );
    }
}

// Puxa função
mostrarDadosAlunos(alunos);
