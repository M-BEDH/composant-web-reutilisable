Un composant Web ( ou web Component) est une balise HTML qui se comporte comme un petit bout d’interface autonome (un "mini-programme").

* class X extends HTMLElement	-> Crée un composant.

* constructor() ->	Initialises le composant.	

* connectedCallback() ->	Agis quand le composant est ajouté à la page (récupere les images dans le fichiers html et appelle les fonctions pour l'affichage).

* customElements.define()	-> Tu "donnes un nom" à ton composant en premier parametre et le nom de la class en deuxieme parametre.

* <aa-carousel> data-images= [---adresse https des images]	A mettre dans le body -> instancie automatiquement un new element et connected (la callback).

Fonctionnalités : Carousel qui permet de passer à l'image suivante ou précedente.

* Pour utiliser ce composant, faire un fichier index.js y placer le code js. Faire un page html et mettre <aa-carousel> dans le body autant de fois que necessaire en changeant les images dans data-images.  --- 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Documentation du composant web Carousel 

Le composant Carousel est un composant Web personnalisé qui permet d'afficher un carrousel d'images avec navigation via des boutons "Précédent" et "Suivant".

## Description générale

- Le composant est défini par la classe `Carousel` qui étend `HTMLElement`.
- Il utilise un Shadow DOM pour encapsuler son contenu et son style, évitant ainsi les conflits avec le reste de la page.
- Les images à afficher sont passées via l'attribut HTML `data-images` sous forme d'une chaîne JSON représentant un tableau d'URLs.

## Fonctionnalités principales

- Affiche une image à la fois dans le carrousel.
- Permet de naviguer entre les images avec les boutons "Précédent" et "Suivant".
- La navigation est cyclique : après la dernière image, on revient à la première, et inversement.

## Détails techniques

### Constructeur

- Initialise le Shadow DOM en mode ouvert.
- Initialise l'index actuel de l'image (`indexActuel`) à 0.
- Initialise un tableau vide pour stocker les URLs des images.

### connectedCallback()

- Méthode appelée automatiquement lorsque le composant est inséré dans le DOM.
- Récupère et parse l'attribut `data-images` pour obtenir le tableau d'images.
- Appelle les méthodes pour afficher le contenu HTML, mettre à jour l'image affichée et ajouter les gestionnaires d'événements.

### render()

- Génère le contenu HTML et CSS du carrousel dans le Shadow DOM.
- Contient la structure du carrousel avec l'image et les boutons de navigation.

### updateImage()

- Met à jour la source de l'image affichée selon l'index actuel.

### addEventListeners()

- Ajoute les gestionnaires d'événements pour les boutons "Précédent" et "Suivant".
- Met à jour l'index actuel et rafraîchit l'image affichée lors des clics.

## Utilisation

Dans une page HTML, inclure le composant comme suit :

```html
<aa-carousel data-images='["url1.jpg", "url2.jpg", "url3.jpg"]'></aa-carousel>
```

- Remplacer les URLs dans `data-images` par les adresses des images souhaitées.
- Le composant peut être instancié plusieurs fois dans la même page avec des images différentes.

## Définition du composant

Le composant est enregistré avec la ligne suivante dans `index.js` :

```js
customElements.define('aa-carousel', Carousel);
```

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- COMPOSANT 2 - GESTION DES IMAGES AVEC JS -----------------------------------------------------------------------------------------------

# Documentation du composant2 

Le composant Carousel est un composant Web personnalisé représentant un carrousel d'images avec navigation via des boutons "Précédent" et "Suivant". Il permet de naviguer à travers un ensemble d'images en affichant une image à la fois.

## Description générale

- Le composant est défini par la classe `Carousel` qui étend `HTMLElement`.
- Il utilise un Shadow DOM ouvert pour encapsuler son contenu et son style, évitant ainsi les conflits avec le reste de la page.
- Les images sont définies via la méthode `setImages(imagesArray)` qui prend un tableau d'URLs d'images.
- Le composant est instancié dynamiquement dans le DOM après le chargement de la page, avec des ensembles d'images prédéfinis.

## Fonctionnalités principales

- Affiche une image à la fois dans le carrousel.
- Permet de naviguer entre les images avec les boutons "Précédent" et "Suivant".
- La navigation est cyclique : après la dernière image, on revient à la première, et inversement.
- Les carrousels sont créés dynamiquement dans un conteneur identifié par `carousels-container`.

## Détails techniques

### Constructeur

- Initialise le Shadow DOM en mode ouvert.
- Initialise l'index actuel de l'image (`indexActuel`) à 0.
- Initialise un tableau vide pour stocker les URLs des images.

### setImages(imagesArray)

- Définit les images à afficher dans le carrousel.
- Réinitialise l'index actuel à 0.
- Appelle les méthodes pour rendre le contenu, afficher l'image initiale et ajouter les gestionnaires d'événements.

### render()

- Génère le contenu HTML et CSS du carrousel dans le Shadow DOM.
- Contient la structure du carrousel avec l'image et les boutons de navigation.

### updateImage()

- Met à jour la source de l'image affichée selon l'index actuel.

### addEventListeners()

- Ajoute les gestionnaires d'événements pour les boutons "Précédent" et "Suivant".
- Met à jour l'index actuel et rafraîchit l'image affichée lors des clics.

### DOMContentLoaded

- Après le chargement du DOM, crée des instances du composant `aa-carousel` pour chaque ensemble d'images prédéfini.
- Ajoute chaque carrousel créé dans le conteneur avec l'id `carousels-container`.

## Utilisation

Dans une page HTML, inclure un conteneur avec l'id `carousels-container` où les carrousels seront insérés dynamiquement :

```html
<div id="carousels-container"></div>
```

Le script crée automatiquement les carrousels avec les images définies dans le tableau `carouselsData`.

## Définition du composant

Le composant est enregistré avec la ligne suivante dans `index2.js` :

```js
customElements.define('aa-carousel', Carousel);
