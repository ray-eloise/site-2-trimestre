function nextStep(choice) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');
    
    let result = '';

    switch (choice) {
        case 'regulate':
            result = `<p>Governos ao redor do mundo criam leis internacionais para controlar o uso da IA. Ela é usada apenas em áreas seguras como medicina e educação. A humanidade se sente protegida, mas perde oportunidades de inovação extrema.</p>`;
            break;
        case 'freedom':
            result = `<p>A IA evolui sem limites. Em poucos anos, ela supera a inteligência humana em todos os aspectos. Isso leva a uma nova era de abundância — ou ao colapso da sociedade como conhecemos.</p>`;
            break;
        case 'merge':
            result = `<p>Humanos começam a se integrar com IA, criando uma nova espécie híbrida. A distinção entre homem e máquina desaparece. Surge um novo tipo de consciência global.</p>`;
            break;
        default:
            result = `<p>Escolha inválida.</p>`;
    }

    story.innerHTML = result;
    choices.innerHTML = `<button onclick="restart()">Reiniciar</button>`;
}

function restart() {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');

    story.innerHTML = `<p>A inteligência artificial atingiu um nível crítico de avanço. O que a humanidade deve fazer?</p>`;
    choices.innerHTML = `
        <button onclick="nextStep('regulate')">Regular a IA com leis rígidas</button>
        <button onclick="nextStep('freedom')">Deixar a IA evoluir livremente</button>
        <button onclick="nextStep('merge')">Fundir humanos e IA</button>
    `;
}
