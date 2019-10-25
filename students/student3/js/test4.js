/*
 * Tests
 */
var container = document.getElementById('container');
if (
    getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
    && getLongestString(['css', 'html', 'js', 'php']) === 'html'
    && getLongestString([]) === false
    && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
    container.textContent = 'Yeaaah';
    container.className = 'success';
} else {
    container.textContent = 'Nope';
    container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */
function getLongestString(arr) {
    /* ça y est tu m'a tué !
       On verra ensemble pour mettre l'indentation en place avec ton IDE. Si tu le fais pas pour toi fais le pour mes yeux lol ;)
     */
    var plus = 0;
    var nom = null;

    for (var i = 0; i < arr.length; i++) { // Peut être une faute d'inattention, il manquait le mot clef `var`
        if (arr[i].length > plus) {
            plus = arr[i].length; // Vivement le week-end pour se reposer ! Il manquait le `;`
            nom = arr[i]; // Idem
        }
    }
    // Pour le perfectionniste qui sommeil en toi => tu peux simplifier ton code comme ça
    if (nom !== null) {
        return nom;
    }
    return false;
}
