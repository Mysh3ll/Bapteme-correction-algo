/*
 * Tests
 */
var container = document.getElementById('container');
if (
    getExtension('test1.css') === 'css'
    && getExtension('jquery.min.js') === 'js'
    && getExtension('.eslintrc') === 'eslintrc'
    && getExtension('monfichier') === false
) {
    container.textContent = 'Yeaaah';
    container.className = 'success';
} else {
    container.textContent = 'Nope';
    container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {
    /* J'ai mal au yeuxxxxxxx !!!!! Comme pour les deux autres exo, be careful à l'indentation ;)
       Ton code fonctionne parfaitement, même si on peut retrouver un soucis de performance si on tombe sur une chaîne
       de caracrtère très longueeeeeeeeeeeee.

       Je te conseil d'effectuer un test de comparaison strict avec `===` au lieu de `==`
       Je te mets un lien afin que tu puisse mieux comprendre (bonne lecture):
       https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison
     */
    for (var i = str.length; i >= 0; i--) {
        console.log(i);
        if (str[i] === ".") {
            var j = str.slice(i + 1, str.length);
            console.log(j);
            return j;
        }
    }
    return false;
}
