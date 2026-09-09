// 1. Pluie de cœurs animée en arrière-plan
function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Symboles de cœurs variés
    const heartIcons = ['❤️', '💖', '✨', '💕', '🌸'];
    heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    
    // Position et taille aléatoires
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Entre 3s et 6s
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    
    container.appendChild(heart);

    // Supprimer le cœur une fois l'animation terminée
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Générer un cœur toutes les 400ms
setInterval(createHeart, 400);

// 2. Bouton surprise interactif
const loveBtn = document.getElementById('love-btn');
const surpriseMessage = document.getElementById('surprise-message');

loveBtn.addEventListener('click', () => {
    surpriseMessage.classList.toggle('show');
    
    // Explosion de cœurs lors du clic
    for(let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 50);
    }
});