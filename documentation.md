Un composant Web ( ou web Component) est une balise HTML qui se comporte comme un petit bout d’interface autonome (un "mini-programme").

* class X extends HTMLElement	-> Crée un composant.

* constructor() ->	Initialises le composant.	

* connectedCallback() ->	Agis quand le composant est ajouté à la page (récupere les images dans le fichiers html et appelle les fonctions pour l'affichage).

* customElements.define()	-> Tu "donnes un nom" à ton composant en premier parametre et le nom de la class en deuxieme parametre.

* <aa-carousel> data-images= [---adresse https des images]	A mettre dans le body -> instancie automatiquement un new element et connected (la callback).

Fonctionnalités : Carousel qui permet de passer à l'image suivante ou précedente.

* Pour utiliser ce composant, faire un fichier index.js y placer le code js. Faire un page html et mettre <aa-carousel> dans le body autant de fois que necessaire en changeant les images dans data-images.  --- 
