/*
 * Tests
 */
var container = document.getElementById('container');
if (!isEven(1) && isEven(2) && !isEven(3) && isEven(35468432)) {
    container.textContent = 'Yeaaah';
    container.className = 'success';
} else {
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
    /* Je me suis permis de réindenter ton code, question de bonnes pratiques. Rien de bien méchant, but be careful my friend ;)
       Pour le reste très bon raisonnement, bravo !
       Petit axe d'amélioration pour simplifier ton code:
        - tu peux directement faire un `return int % 2 === 0;` sans passer par la variable `var`
          puisqu'un test retourne un booléen. Donc soit `true` ou `false` ;)
     */
    var int = int % 2 == 0;
    console.log(int);
    return int;
}
