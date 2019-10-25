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
    /* Toi tu es fâché avec ton éditeur (IDE), je plaisante ! Regarde ci ce dernier ne te propose d'indenter (automatiquement) ton code ?
       Petit axe d'amélioration pour simplifier ton code:
        - tu peux directement faire un `return int % 2 === 0;` sans passer par `if/else` puisqu'un test retourne un booléen. Donc soit `true` ou
        `false` ;)
        Ou sinon, la logique est très bonne, bravo !
     */
    if (int % 2 == 0) {
        return true
    } else {
        return false
    }
}
