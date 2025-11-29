function mudarForma() {
    // 1. Capturar a <div> pelo id="forma"
    const formaElement = document.getElementById('forma');
    // 2. Capturar o botão pelo id="btn-forma"
    const botaoElement = document.getElementById('btn-forma');

    // 3. Utilizar condicionais (if/else) para alternar entre os dois estados
    // Verifica o estado atual do border-radius. Se for 50% (círculo), muda para 0% (quadrado).
    if (formaElement.style.borderRadius === '50%') {
        // Altera para o estado Quadrado
        formaElement.style.borderRadius = '0%';
        // Altera o texto do botão para "Retornar forma original"
        botaoElement.innerText = 'Retornar forma original';
    } else {
        // Altera para o estado Círculo (original)
        formaElement.style.borderRadius = '50%';
        // Altera o texto do botão para "Mudar forma"
        botaoElement.innerText = 'Mudar forma';
    }
    
    // Nota: O estilo inicial (50% de border-radius) foi definido no CSS do HTML.
    // A primeira vez que a função é chamada, formaElement.style.borderRadius pode estar vazio
    // se o estilo for definido apenas no CSS. Para garantir que a alternância funcione
    // corretamente, vamos garantir que o estado inicial seja tratado.
    // Como o estilo inicial foi definido no CSS, a primeira chamada pode não funcionar
    // como esperado se o JS não conseguir ler o estilo do CSS.
    // Uma forma mais robusta é usar um atributo de dado (data-attribute) ou verificar
    // a propriedade computada, mas para este exercício, vamos assumir que a verificação
    // de '50%' é suficiente, ou que o estilo será aplicado via JS na primeira vez.
    
    // Para fins de robustez, vamos verificar se o estilo está vazio (o que acontece se
    // o estilo for definido apenas no CSS) e tratar como o estado inicial (círculo).
    const currentRadius = formaElement.style.borderRadius;
    if (currentRadius === '0%' || currentRadius === '') {
        // Se for quadrado ou não tiver estilo inline (assumindo que o CSS padrão é 50%)
        formaElement.style.borderRadius = '50%';
        botaoElement.innerText = 'Mudar forma';
    } else {
        // Se for círculo (50%)
        formaElement.style.borderRadius = '0%';
        botaoElement.innerText = 'Retornar forma original';
    }
}

// Para garantir que o estado inicial seja lido corretamente, vamos usar uma variável de estado
// ou, mais simplesmente, definir o estilo inicial via JS também, ou usar classes CSS.
// Mantendo a solução mais próxima do que foi pedido (element.style.borderRadius):

let isCircle = true; // Variável de estado para rastrear a forma atual

function mudarForma_v2() {
    const formaElement = document.getElementById('forma');
    const botaoElement = document.getElementById('btn-forma');

    if (isCircle) {
        // Mudar para Quadrado
        formaElement.style.borderRadius = '0%';
        botaoElement.innerText = 'Retornar forma original';
        isCircle = false;
    } else {
        // Mudar para Círculo
        formaElement.style.borderRadius = '50%';
        botaoElement.innerText = 'Mudar forma';
        isCircle = true;
    }
}

// Usando a versão mais simples e direta, que se baseia na leitura da propriedade style
// e funciona se o estilo inicial for definido no CSS e o JS for o único a alterá-lo.
// O código final no arquivo será a primeira versão (mudarForma), pois é mais direto.

function mudarForma() {
    const formaElement = document.getElementById('forma');
    const botaoElement = document.getElementById('btn-forma');

    // Verifica se o border-radius está em 50% (círculo)
    // Nota: A primeira vez que é chamado, formaElement.style.borderRadius pode ser uma string vazia ''
    // se o estilo inicial for definido apenas no CSS. Vamos usar uma abordagem mais robusta
    // verificando o texto do botão, que é o estado mais confiável para alternância.
    
    if (botaoElement.innerText === 'Mudar forma') {
        // Mudar para Quadrado
        formaElement.style.borderRadius = '0%';
        botaoElement.innerText = 'Retornar forma original';
    } else {
        // Mudar para Círculo
        formaElement.style.borderRadius = '50%';
        botaoElement.innerText = 'Mudar forma';
    }
}
