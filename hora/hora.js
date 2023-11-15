function atualizarHora() {
    const elementoHora = document.getElementById('hora');
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    // Formate a hora, minutos e segundos com dois dígitos
    const horaFormatada = hora.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');

    // Atualize o conteúdo do elemento com a hora atual
    elementoHora.textContent = horaFormatada + ':' + minutosFormatados + ':' + segundosFormatados;
}

// Chame a função para atualizar a hora a cada segundo
setInterval(atualizarHora, 1000);

// Chame a função uma vez para exibir a hora imediatamente
atualizarHora();