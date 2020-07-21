# svg-exercises

Le but est d'animer les icones svg pour voir un peu quelles sont les similitudes et les différences par rapport au HTML.

Exo 1 : 
L'idée dans cet exercice est de travailler sur les icones svg, de leur rajouter des classes dans le fichier HTML et ensuite de les animer en CSS.
Points bonus pour déclencher l'animation au click en JS par la suite mais le but premier est de bien comprendre les attributs SVG (notamment fill et stroke qui sont équivalents au background et à la border) et de voir un peu les différents éléments (path, rect, circle...).

1) Le but est d'animer la couleur de fond de l'icnoe pour simuler un état activé/désactivé ([voir ici](https://developer.mozilla.org/fr/docs/Web/SVG/Attribute/fill))

2) Ici c'est une icone qui se retrouve dans énormément de sites/applications : le burger menu avec les 3 barres qui se transforment en une croix pour fermer le menu (une propriété qui peut être utile pour faire la rotation https://developer.mozilla.org/fr/docs/Web/CSS/transform-origin)

3) Un élément un peu plus compliqué avec différents éléments. Il faut essayer de voir quel élément correspond à quel partie de l'icone et ensuite faire la transition de couleurs sur ces éléments. J'ai repris l'icone de la librairie mais il faut rajouter un élément dans le svg pour que la transition de couleurs puisse bien se faire.
