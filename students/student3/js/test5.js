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
} else {
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
    /* J'avoue que cet exercicie était chaud !
       On reprendra tout ça lors de la correction, mais dans les grandes lignes:
       - Ton code fonctionne cependant tu te répètes
       - Il est difficilement évolutif/maintenable
       - ATTENTION à l'indentation. (Je vais te saouler avec ça).
       - Code trop spécifique
       Ne soit pas déçu de toi, cet exercice n'est pas simple du tout. Keep confidant !
     */
    var sum1 = 0;
    for (var i = 0; i < arr.length; i++) { // Peut être une faute d'inattention, il manquait le mot clef `var`
        if (typeof (arr[i]) == "number") {
            sum1 += arr[i];
        } else if (typeof (arr[i]) == "string") {
        } else if (arr[i].length > 0) {
            for (var j = 0; j < arr[i].length; j++) {
                if (arr[i][j].length > 0) {
                    for (var p = 0; p < arr[i][j].length; p++) {
                        sum1 += arr[i][j][p];
                    }
                } else {
                    sum1 += arr[i][j];
                }
            }
        }
    }
    return sum1;
}
