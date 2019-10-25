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

    /* Good job jeune padawan ! Continue comme ça ...
       Je dirais juste qu'il manque un petit truc en plus :
        - il était demandé de retourner la chaîne de caractère la plus longue
          donc un petit contrôle du type de ta variable s'impose
           ex:
           // On vérifie que c'est pas une chaine de caractère
           if (typeof arr[index] !== 'string') {
           // Si je veux passer à l'itération suivante
           continue;
           }
     */
   var result = arr[0];

   if (arr.length === 0) {

      return false;
   }

   for (var index = 1; index < arr.length; index++) {

      if (result.length < arr[index].length) {

         result = arr[index];
      }
   }
   return result;
}
