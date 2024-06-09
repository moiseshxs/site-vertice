function changeInfo(index) {
    // Oculta todas as infos
    var infos = document.querySelectorAll('.info');
    infos.forEach(info => {
        info.classList.remove('active');
    });

    // Exibe a info correspondente ao índice
    infos[index].classList.add('active');

    // Atualiza a classe active do ponto
    var dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');

    // Atualiza a classe active da miniatura
    var miniaturas = document.querySelectorAll('.miniatura');
    miniaturas.forEach(miniatura => {
        miniatura.classList.remove('active');
    });
    miniaturas[index].classList.add('active');
}

// Inicializa a visualização com o primeiro ponto ativo
changeInfo(0);