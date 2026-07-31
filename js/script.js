
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
let soma = (nota1+nota1+nota3);
let media = soma/3;

const verBoletim = confirm("Deseja visualizar o boletim completo?");
if(verBoletim === true && media >= 6){
 alert(`O aluno ${nomeAluno} foi APROVADO com \nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media.toFixed(2)}`);
    console.log(`O aluno ${nomeAluno} foi APROVADO com \nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media.toFixed(2)}`);
}else if(verBoletim === true && media < 6){
     alert(`O aluno ${nomeAluno} foi REPROVADO com \nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media.toFixed(2)}`);
    console.log(`O aluno ${nomeAluno} foi REPROVADO com \nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media.toFixed(2)}`);   
    
}else if(verBoletim === false && media >= 6){
    alert(`O aluno ${nomeAluno} foi APROVADO com média: ${media.toFixed(2)}`);
    console.log(`O aluno ${nomeAluno} foi APROVADO com média: ${media.toFixed(2)}`);
}else if(verBoletim === false && media < 6){
    alert(`O aluno ${nomeAluno} foi REPROVADO com média: ${media.toFixed(2)}`);
    console.log(`O aluno ${nomeAluno} foi REPROVADO com média: ${media.toFixed(2)}`);
}   

