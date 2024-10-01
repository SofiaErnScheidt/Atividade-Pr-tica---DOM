const backgrounds = [
    'imagem1.jpg', // Substitua pelos caminhos das suas imagens
    'imagem2.jpg',
    'imagem3.jpg',
];

let currentIndex = 0;

document.getElementById('changeBackground').addEventListener('click', function() {
    // Muda a imagem de fundo
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
});