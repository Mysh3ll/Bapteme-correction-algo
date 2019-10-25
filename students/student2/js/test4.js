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
}
else {
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
  /* De mieux en mieux ! Franchement le coup du `reduce()` c'est top
     j'ai juste simplifié ton code en faisant directement un return de la fonction reduce
     car la variable `longuest` était en trop (mais c'est pour être perfectionniste).
   */

  if (arr.length === 0) return false;

  return arr.reduce(function (a, b) {
    if (typeof a === 'number') a = String(a);
    if (typeof b === 'number') b = String(b);
    return a.length > b.length ? a : b;
  }, '');
}
