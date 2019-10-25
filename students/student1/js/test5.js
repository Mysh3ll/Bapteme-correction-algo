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

   var result = 0;

   /* C'est très bien de contrôler si ton tableau contient quelque chose, cependant tu fais un `return result` à la fin,
      donc si `arr` est vide tu renverras forcément `0`.
    */
   if (arr.length === 0) {
      console.log("valeur renvoyée :"+result); // Tips => tu peux faire `console.log("valeur renvoyée: ", result);`
      return result;
   }

   for (var i = 0; i < arr.length; i++) {

      if (isNaN(arr[i])) {
         console.log("valeur ignorée :"+arr[i]);
         i++; // Ici il vaut mieux utiliser le mot clef `continue;`, aussi non tu saute un index de ton tableau à chaque fois.
      }
       /* Oula ! Les noeuds au cerveau. Je plaisante ....
          Tu peux simplifier avec un simple else, car ici tu vérifie l'inverse du premier `if`
        */
      if (!isNaN(arr[i])) {

         result = result + arr[i]; // Tips => `result += arr[i];`
      }

      /* Cet exercice était plus chaud que les autres, je te l'accorde
         Pour additionner les nombres contenu dans un array, une des solutions possibles:
            // Si c'est un array, on additionne en utilisant sum()
            else if (typeof arr[i] === 'object') {
            result += sum(arr[i]);
    }
       */
   }
   console.log("resultat renvoyée : "+result);
   return result;
}
