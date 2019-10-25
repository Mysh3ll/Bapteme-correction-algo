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

   var rep = str.split('.'); // Petit oubli que notre ami PHP n'aime pas trop, il manquait un `;`! Je sais que la semaine a été dure, accroche toi ;)
   var index = rep.length - 1; // Ici on peut simplifier un peu ton code en faisant `var index = str.split('.').length - 1`. Le résultat sera le même.
    /* Je te conseil d'effectuer un test de comparaison strict avec `===` au lieu de `==`
       Je te mets un lien afin que tu puisse mieux comprendre (bonne lecture):
       https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison
     */
   if ( str.lastIndexOf('.') === -1){

      return false;
   }
   else {

      console.log(rep[index]);
      return (rep[index]);
   }
}
