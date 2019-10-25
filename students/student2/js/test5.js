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
function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr.splice.apply(arr, [i,1].concat(arr[i]));
      i--;
    }
  }

  return arr;
}

function sum(arr) {
  /* Très bon travail dans l'ensemble, car celui ci il était pas simple du tout !
     Comme d'habitude il y a toujours plusieur s solution à un problème, cependant
     je pense que tu t'es un peu compliqué la vie, je m'explique:
     - pas obligé de mettre à plat ton tableau (même si ça fonctionne), tu contrôle si la variable est de type 'object'
       et tu rappelles ta fonction `sum()` avec cette variable. C'est ce que l'on appelle la "Récursivité".
   */
  var total = 0;
  var arr = flatten(arr);

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }

  return total;
}
