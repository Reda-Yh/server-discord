// Fonctionnalité du bouton "Rejoindre le serveur"
document.getElementById('join-button').addEventListener('click', function() {
    window.open('https://discord.gg/tckCRRqUaa', '_blank');
});

// Fonctionnalité pour ouvrir un lien Discord dans le footer
document.getElementById('discord-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://discord.gg/tckCRRqUaa', '_blank');
});
