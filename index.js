/**
 * Classe Carousel - Composant Web personnalisé pour afficher un carrousel d'images.
 * Ce composant permet de naviguer entre plusieurs images via des boutons Précédent et Suivant.
 */
class Carousel extends HTMLElement {
    /**
     * Constructeur du composant Carousel.
     * Crée un shadow DOM pour encapsuler le contenu et le style du composant,
     * initialise l'index actuel de l'image et le tableau d'images vide.
     */
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Attache un shadow DOM en mode ouvert
        this.indexActuel = 0; // Index de l'image actuellement affichée
        this.images = []; // Tableau des URLs des images, initialement vide
    }
    
    /**
     * Méthode appelée lorsque l'élément est inséré dans le DOM.
     * Récupère les images depuis l'attribut HTML, puis affiche et initialise le carrousel.
     */
    connectedCallback() {
        // Récupère les images depuis l'attribut HTML "data-images"
        const dataAttr = this.getAttribute('data-images');
        try {
            // Convertit la chaîne JSON en tableau JavaScript
            this.images = JSON.parse(dataAttr);
        } catch (e) {
            // Avertit si le format des images est incorrect
            console.warn("Images mal formatées pour le carrousel", e);
        }
        
        // Affiche le contenu HTML du carrousel
        this.render();
        // Met à jour l'image affichée selon l'index actuel
        this.updateImage();
        // Ajoute les gestionnaires d'événements pour les boutons
        this.addEventListeners();
    }
    
    /**
     * Génère le contenu HTML et CSS du carrousel dans le shadow DOM.
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
          padding: 0.2rem 0.5rem;
          font-size: 1rem;
          border-radius: 5px;
        }
        button:hover {
          background-color:#f7c8de;
        }
      </style>
      <div class="carousel">
        <img class="carousel-slide" src="" alt="carrousel image">
        <div class="btn-controls">
          <button class="btnPrecedent">Précédent</button>
          <button class="btnSuivant">Suivant</button>
        </div>
      </div>
    `;
    }
    
    /**
     * Met à jour l'image affichée dans le carrousel selon l'index actuel.
     */
    updateImage() {
        const img = this.shadowRoot.querySelector(".carousel-slide");
        if (this.images.length > 0) {
            // Change la source de l'image à afficher
            img.src = this.images[this.indexActuel];
        }
    }
    
    /**
     * Ajoute les gestionnaires d'événements pour les boutons Précédent et Suivant.
     * Permet de naviguer dans les images du carrousel.
     */
    addEventListeners() {
        this.shadowRoot.querySelector('.btnSuivant').onclick = () => {
            // Passe à l'image suivante, en revenant au début si on dépasse la fin
            this.indexActuel = (this.indexActuel + 1) % this.images.length;
            this.updateImage();
        };
        
        this.shadowRoot.querySelector('.btnPrecedent').onclick = () => {
            // Passe à l'image précédente, en revenant à la fin si on dépasse le début
            this.indexActuel = (this.indexActuel - 1 + this.images.length) % this.images.length;
            this.updateImage();
        };
    }
}

// Définit le composant personnalisé <aa-carousel> lié à la classe Carousel
customElements.define('aa-carousel', Carousel);
