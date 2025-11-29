function inserirTitulo() {
    // 1. Capturar o valor digitado no campo de entrada
    const campoEntrada = document.getElementById('txt-titulo');
    const novoTitulo = campoEntrada.value;

    // 2. Capturar o elemento <h1>
    const elementoTitulo = document.getElementById('titulo');

    // 3. Inserir o valor capturado como innerText do elemento <h1>
    elementoTitulo.innerText = novoTitulo;

    // 4. Alterar a cor do texto do <h1> para 'blue'
    elementoTitulo.style.color = 'blue';
}
