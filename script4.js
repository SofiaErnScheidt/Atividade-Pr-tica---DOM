document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const featuredImage = document.getElementById('featured');
        featuredImage.src = this.src; // Muda a imagem em destaque para a imagem clicada
        featuredImage.alt = this.alt; // Atualiza o texto alternativo
    });
});