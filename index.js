 // Tableau d'objets contenant des citations et leurs auteurs:
 const quotes = [ 
        { quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi"},
        { quote: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg"},
        { quote: "Le succès c’est tomber sept fois, se relever huit.", author: "Proverbe japonais"},
        { quote: "Le pessimiste se plaint du vent, l’optimiste espère qu’il va changer, le réaliste ajuste ses voiles.", author: "William George Ward"},
        { quote: "Savoir, penser, rêver. Tout est là.", author: "Victor Hugo"},
        { quote: "L'esprit libre et curieux de l'homme est ce qui a le plus de prix au monde.", author: "John Steinbeck"},
        { quote: "Il y a une femme à l'origine de toutes les grandes choses.", author: "Alphonse de Lamartine"},
        { quote: "Fais du bien à ton corps pour que ton âme ait envie d'y rester.", author: "Proverbe amérindiens"},
        { quote: "La beauté du corps est un voyageur qui passe, tandis que la beauté du cœur est un ami qui reste.", author: "Antoine de Saint-Exupéry" },
        { quote: "L'unique différence entre un fou et moi, c'est que moi je ne suis pas fou.", author: "Salvador Dali"},
        { quote: "Je n'appartiens à personne ; quand la pensée veut être libre, le corps doit l'être aussi.", author: "Alfred de Musset"},
    ];

// Fonction pour générer un nombre aléatoire entre 0 et la longueur du tableau:
function RandomQuote() {  
    return Math.floor(Math.random() * quotes.length);  
}

// Fonction pour afficher une citation aléatoire:
function lookRandom() { 
    const index = RandomQuote();
    const auteur = quotes[index].author;  
    const citation = quotes[index].quote;

// Affichage de la citation et de son auteur:
    document.getElementById("citation").textContent = citation; 
    document.getElementById("auteur").textContent = `- ${auteur}`;  
}
// Ajout d'un gestionnaire d'événements au bouton "Nouvelle citation":
document.getElementById("btn").addEventListener("click",lookRandom);





