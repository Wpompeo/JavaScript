const client = {
    nome: "Joao",
    idade: 23,
    email: "joao@hotmail.com",
    telefone: [ 99999911, 99999922],
    saldo: 200,
    efetuaPagamento: function(valor){
        if( valor > this.saldo){
            console.log("Saldo insuficiente!");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo é : ${this.saldo} reais.`)
        }
    },
};
client.efetuaPagamento(22);