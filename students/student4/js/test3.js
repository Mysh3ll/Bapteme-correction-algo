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
}
else {
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

    /* Si jamais tu as un doute sur l'utilisation d'une méthode, je t'invite à "googleliser" le nom de cette dernière.
       Comme je suis un helper gentil, je te donne le lien direct:
       https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/lastIndexOf
       Après lecture de cette magnifique page, tu t'apercevras que la méthode `lastIndexOf()` prend un SEUL paramètre.
       Pour le reste on reverra ensemble cet exercice lors de la correction ;)
     */
    var str = str.lastIndexOf('css';'js';'eslintrc';'eslintrc');
    console.log(str);
    return str;
}
