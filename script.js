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

// 3. Compteur d'amour en temps réel (Jours, Heures, Minutes, Secondes)

// ⚠️ METS TA VRAIE DATE ICI : Année, Mois (0 pour Janvier, 1 pour Février...), Jour, Heures, Minutes
const startDate = new Date(2025, 9, 18, 1, 0, 0); 

function updateTimer() {
    const now = new Date();
    const difference = now - startDate; // Temps écoulé en ms

    // Calculs du temps
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Mettre à jour le texte dans la page HTML
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Lancer le compteur tout de suite...
updateTimer();

// ...puis le mettre à jour automatiquement toutes les secondes (1000 ms)
setInterval(updateTimer, 1000);