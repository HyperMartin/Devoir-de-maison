// ========================
// GESTION DE L'ANIMATION "BARREL ROLL"
// ========================

// Ajouter l'animation "Barrel Roll" au chargement de la page
window.addEventListener('load', () => {
    // Ajoute la classe CSS "barrel-roll" pour activer l'animation
    document.body.classList.add('barrel-roll');

    // Supprime la classe après 2 secondes (durée définie dans le CSS)
    setTimeout(() => {
        document.body.classList.remove('barrel-roll');
    }, 2000);
});
