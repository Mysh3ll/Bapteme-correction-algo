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
  /* Bon pas de panique, même si tu n'as pas fais cet exercice je te donne les grandes lignes si tu souhaites
     le faire de ton côté au calme et avec plus de temps ;)
     D'ailleurs ça serait cool de savoir pourquoi tu n'as pas pu faire cet exo:
     - Trop dur
     - Pas assez de temps
     - Pas compris l'exercice
     Enfin bref, n'hésite pas à me demander si tu as besoin d'aide.

   */

    // Je définis la string la plus grande

    // Sur chaque élément de `arr`
        // Je définis la string de l'élément en cours

        // On vérifie que c'est pas une chaine de caractère
            // Si je veux passer à l'itération suivante

        // Puis on regarde si c'est la plus grande

    // Si l'array est vide, on renvoie false

    // On retourne la plus grande

}
