/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */
function sum(arr) {
  /* Idem que l'exercice n°4 */

  // Variable qui va venir accumuler les sommes (initialiser à 0)

  // Pour chaque élément du tableau `arr`
    // Je définis la string de l'élément en cours

    // Si c'est un nombre, on additionne

    // Si c'est un array, on additionne en utilisant sum()

  // On retourne la somme
}
