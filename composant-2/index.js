/**
 * Composant web personnalisé représentant un carrousel d'images.
 * Permet de naviguer à travers un ensemble d'images avec des boutons précédent et suivant.
 */
class Carousel extends HTMLElement {
  constructor() {
    super();
    // Attache un shadow DOM ouvert pour encapsuler les styles et le markup
    this.attachShadow({ mode: 'open' });
    // Index actuel de l'image affichée
    this.indexActuel = 0;
    // Tableau contenant les URLs des images
    this.images = [];
  }

  /**
   * Définit les images à afficher dans le carrousel.
   * @param {string[]} imagesArray - Tableau d'URLs d'images.
   */
  setImages(imagesArray) {
    this.images = imagesArray;
    this.indexActuel = 0; // Réinitialise à la première image
    this.render(); // Rend le markup et les styles du carrousel
    this.updateImage(); // Affiche l'image initiale
    this.addEventListeners(); // Ajoute les écouteurs d'événements aux boutons
  }

  /**
   * Rend le HTML et le CSS du carrousel dans le shadow DOM.
   */
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .carousel {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ccc;
          padding: 1rem;
          margin: 1rem 0;
          width: 300px;
        }
        .carousel img {
          max-width: 100%;
          border-radius: 8px;
        }
        .btn-controls {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        button {
         font-size: 1rem;
          padding: 0.2rem 0.5rem;
          border-radius: 5px;
          border: 1px solid grey;
        }
          button:hover {
          background-color:#30c8ed3b;
          cursor: pointer;
        }
      </style>
      <div class="carousel">
        <img class="carousel-slide" src="" alt="image carrousel">
        <div class="btn-controls">
          <button class="btnPrecedent">Précédent</button>
          <button class="btnSuivant">Suivant</button>
        </div>
      </div>
    `;
  }

  /**
   * Met à jour l'image affichée en fonction de l'index actuel.
   */
  updateImage() {
    const img = this.shadowRoot.querySelector(".carousel-slide");
    if (this.images.length > 0) {
      img.src = this.images[this.indexActuel];
    }
  }

  /**
   * Ajoute les écouteurs d'événements click aux boutons précédent et suivant.
   * Met à jour l'index de l'image actuelle et rafraîchit l'image affichée.
   */
  addEventListeners() {
    this.shadowRoot.querySelector('.btnSuivant').onclick = () => {
      this.indexActuel = (this.indexActuel + 1) % this.images.length;
      this.updateImage();
    };

    this.shadowRoot.querySelector('.btnPrecedent').onclick = () => {
      this.indexActuel = (this.indexActuel - 1 + this.images.length) % this.images.length;
      this.updateImage();
    };
  }
}

// Définit l'élément personnalisé pour pouvoir l'utiliser dans le HTML comme <-carousel>
customElements.define('aa-carousel', Carousel);



// Partie qui gère l'insertion des carrousels dans le DOM
// Assure que le script s'exécute après le chargement du DOM pour éviter les erreurs de sélection d'éléments
// et pour que les carrousels soient créés dynamiquement avec les données fournies
// Lorsque le contenu du DOM est chargé, crée des carrousels pour chaque ensemble d'images
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carousels-container");

  // Tableau de tableaux, chacun contenant des URLs d'images pour un carrousel
  const carouselsData = [
    [
    "https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_960_720.jpg"
    ],
    [
   "https://cdn.pixabay.com/photo/2016/11/22/21/33/sunglasses-1850648_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/05/08/49/sea-8041734_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/05/20/13/12/travel-6268605_1280.jpg"
    ]
  ];

  // Pour chaque tableau d’images, créer un carrousel
  carouselsData.forEach((imagesArray) => {
    const carousel = document.createElement("aa-carousel"); // Création d'une instance du carrousel - remplace <aa-carousel> </aa-carousel> en dur dans le html
    carousel.setImages(imagesArray); // Appel de la méthode personnalisée
    container.appendChild(carousel); // On l’ajoute au DOM
  });
});
