function gerarEntrada() {
  const resultadoDiv = document.getElementById('resultado');
  const btnGerar = document.getElementById('btnGerar');

  // Desabilita o botão para evitar cliques múltiplos
  btnGerar.disabled = true;
  btnGerar.textContent = "Aguarde 30 segundos...";

  resultadoDiv.innerHTML = '<span class="typing"></span>';

  setTimeout(() => {
    const isVermelho = Math.random() < 0.5;
    const corClasse = isVermelho ? 'vermelho' : 'azul';
    const nomeClasse = isVermelho ? 'cor-vermelho' : 'cor-azul';
    const nomeTexto = isVermelho ? 'VERMELHO' : 'PRETO';
    const probabilidade = Math.floor(Math.random() * 31) + 60;

    resultadoDiv.innerHTML = `
      <div class="circle ${corClasse}"></div>
      <div class="cor-nome ${nomeClasse}">
        ${nomeTexto}
        <div class="porcentagem">(${probabilidade}%)</div>
      </div>
    `;

    let tempoRestante = 30;

    const intervalo = setInterval(() => {
      tempoRestante--;
      if (tempoRestante > 0) {
        btnGerar.textContent = `Aguarde ${tempoRestante} segundos...`;
      } else {
        clearInterval(intervalo);
        btnGerar.disabled = false;
        btnGerar.textContent = "Gerar";
      }
    }, 1000);

  }, 4000);
}
