/*
 * Tests
 */
var container = document.getElementById('container');
if (!isEven(1) && isEven(2) && !isEven(3) && isEven(35468432)) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo2
 *
 * int est un entier
 * Retourner "true" si c'est pair, "false" si c'est impair
 */
function isEven(int) {
  /* Allez, prarce que j'ai le sentiment que tu as trouvé ça easy:
      => tu peux encore simplifier ton code en enlevement les parenthèses (mais juste pour le fun).
   */
  return (int % 2 === 0);
}
