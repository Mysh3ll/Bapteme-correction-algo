/*
 * Tests
 */
var container = document.getElementById('container');
if (
  doubleInt(4) === 8
  && doubleInt(-4) === -8
  && doubleInt(0) === 0
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo1
 *
 * int est un entier
 * Le doubler, et le retourner
 */
function doubleInt(int) {
    var int = int * 2; // Bravo! Tu peux améliorer ton code en retournant directement le resultat => `return int * 2;`
     console.log(int);
    // console.log(typeof int); // Bonne idée de logger le type de variable reçu en paramètre
    return int;
}
 console.log(doubleInt()); // J'ai pas compris pourquoi tu log ça. Pas grave, on verra ça ensemble ;)
