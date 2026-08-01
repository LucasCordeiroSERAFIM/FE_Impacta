const Pessoa = {
    nome: "Lucas",
    idade: 30,
    email: "mail@mail.com",
    salario: 500.00,
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "Sorocaba",
        estado: "SP"
    },
    comidasFavoritas: ["Pizza", "Hamburguer", "Sorvete"],
    ajusteSalario: function() {
        this.salario = this.salario * 1.10; // Aumenta o salário em 10
    },
    mostrarInformacoes: function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Email: ${this.email}`);
        console.log(`Endereço: ${this.endereco.rua}, ${this.endereco.numero}, ${this.endereco.cidade} - ${this.endereco.estado}`);
        console.log(`Comidas favoritas: ${this.comidasFavoritas.join(", ")}`);
        this.ajusteSalario();
        console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
    }
};

   Pessoa.mostrarInformacoes(); 
   