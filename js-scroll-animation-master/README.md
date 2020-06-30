# js-scroll-animation


# Exo 1 : 
Au lieu d'un carré blanc, afficher une diagonale :
![Exo1](https://github.com/alexbrbr/js-scroll-animation/blob/master/assets/exo1.png)

Puis rajouter 2 autres sections pour faire des diagonales dans l'autre sens : 
![Exo1.1](https://github.com/alexbrbr/js-scroll-animation/blob/master/assets/exo1.1.png)

Pour cela on peut utiliser en css `background: linear-gradient` avec du transparent sur les côtés.
[Documentation MDN](https://developer.mozilla.org/fr/docs/Web/CSS/linear-gradient)



# Exo 2 : 
(en repartant de la solution à l'exercice 1 et en touchant uniquement le fichier `index.js`)

Intercepter l'évènement de scroll de l'utilisateur.
Dès que l'utilisateur commence à scroller vers le bas, le faire scroller tout en bas de la page.

Quelques fonctions utiles : 
- window.addEventListener sur l'évènement 'scroll'  ([Documentation MDN](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener))
- window.removeEventListener sur l'évènement 'scroll'
- window.scrollTo ([Documentation MDN](https://developer.mozilla.org/fr/docs/Web/API/Element/scrollTo))

