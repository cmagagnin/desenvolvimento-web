const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor da conta: R$ ", (valorContaStr) => {
  rl.question("Digite o percentual da gorjeta (%): ", (percentualStr) => {
    const valorConta = parseFloat(valorContaStr);
    const percentualGorjeta = parseFloat(percentualStr);

    const valorGorjeta = valorConta * (percentualGorjeta / 100);
    const valorTotal = valorConta + valorGorjeta;

    console.log(
      `Valor da Conta: R$${valorConta.toFixed(2)}, ` +
      `Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
      `Total a pagar: R$${valorTotal.toFixed(2)}`
    );

    rl.close();
  });
});
