function cadastrarUsuario() {
    // 1. Capturar os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;

    // Formatar a data para o formato dd/mm/aaaa, se possível, ou usar o valor bruto
    let dataFormatada = dataNasc;
    if (dataNasc) {
        const partesData = dataNasc.split('-'); // Espera-se o formato YYYY-MM-DD do input type="date"
        if (partesData.length === 3) {
            dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
        }
    }

    // 2. Montar a frase no formato especificado usando template strings
    const fraseFinal = `${nome} nasceu no dia ${dataFormatada} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}.`;

    // 3. Exibir a frase dentro do elemento <p id="resultado">
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = fraseFinal;

    // 4. As configurações de cor e tamanho da fonte já foram aplicadas no CSS do HTML para fins de demonstração
    // Caso fosse necessário aplicar via JS, seria:
    // resultadoElemento.style.color = 'green';
    // resultadoElemento.style.fontSize = '24px';
}
