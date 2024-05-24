window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.navbar-light .nav-link');
    const navbarLogo = document.getElementById('navbarLogo');
    
    if (window.scrollY > 800) { // Ajuste o valor conforme necessário
        navLinks.forEach(link => link.classList.add('scrolled'));
        navbarLogo.src = './img/nome.png'; // Substitua com o caminho da nova imagem
    } else {
        navLinks.forEach(link => link.classList.remove('scrolled'));
        navbarLogo.src = './img/logobranca.png'; // Substitua com o caminho da imagem original
    }
});