# Challenge : Parcours du combattant Algo

## 1 - Exercices

Les exercices montent progressivement en difficultés pour atteindre l'apogée sur l'exo 5 !
Peut être que l'exo 5 est un peut complexe à ce stade de l'apprentissage, à voir avec l'équipe pédagogique ;)

## 2 - Amélioration

### Code

Je pense que l'on pourrait intégrer l'ES6 dans les exercices par ex:
+ ```let/const``` au lieu de ```var```
+ ```() => {}``` au lieu de ```function()```

### Correction
+ Exo 1:

        + Vérifier que le paramètre `int` de la fonction `doubleInt()` soit bien du type number.
        exemple:
        if(typeof int == 'number'){};

+ Exo 4:

        + Mettre cette vérification au début de la fonction pour éviter de boucler pour rien ;)
        // Si l'array est vide, on renvoie false
          if (arr.length === 0) {
            return false;
          }
