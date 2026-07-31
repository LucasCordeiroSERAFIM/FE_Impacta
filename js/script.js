
/*
Criar um programa que acalcule a média de um aluno e informe se ele foi aprovado ou reprovado. 

Regras:
Digite o Nome do aluno
Digite a nota 1
Digite a nota 2
Digite a nota 3

APROVADO: média >= 6
REPROVADO: média < 6

*/ 
const nomeAluno = prompt("Digite o nome do aluno:");
const nota1 = parseFloat(prompt("Digite a nota 1:"));
const nota2 = parseFloat(prompt("Digite a nota 2:"));   
const nota3 = parseFloat(prompt("Digite a nota 3:")); 
let media = (nota1 + nota2 + nota3) / 3;

const verBoletim = confirm("Deseja visualizar o boletim completo?");

if(!verBoletim){
    alert("Operação cancelada");
    console.log("Operação cancelada");
}else{
    const status = media >= 6 ? "APROVADO" : "REPROVADO";
    const boletim = `${nomeAluno} - ${status}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media.toFixed(2)}`;
    alert(boletim);
    console.log(boletim);
}