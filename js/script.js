

let activeItem = 0;

// Per ogni immagine nell'array prendo il contenitore delle immagini
// e gli aggiungo la singola immagine
const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

//Utilizziamo for each al posoto di for
images.forEach((image, index) => {
    //genero nel html 
    const newImage = `<div class="image ${index === activeItem ? 'active' : ''}">
    <img src="${image.image}">
    <div class="image-info">
        <h3>${image.title}</h3>
        <p>${image.text}</p>
    </div>
</div>`;
    // Aggiungi l'HTML ai rispettivi contenitori
    imagesContainer.innerHTML += newImage;

    const newThumbnail = `
    <div class="thumbnail ${index === activeItem ? 'active' : ''}">
        <img src="${image.image}">
    </div>
    `;

    thumbnailsContainer.innerHTML += newThumbnail;
});
    


// Aggiungiamo la classe active alla prima immagine
const allImages = document.querySelectorAll('.image');
allImages[activeItem].classList.add('active');
const allThumbnails = document.querySelectorAll('.thumbnail');
allThumbnails[activeItem].classList.add('active');

const nextArrow = document.querySelector('.arrow.next');
nextArrow.addEventListener('click', function() {
    // Rimouviamo active dall'elemento corrente
    // incrementiamo activeItem di 1
    // Aggiungiamo active al nuovo activeItem
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    if(activeItem < allImages.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});

const previousArrow = document.querySelector('.arrow.previous');
previousArrow.addEventListener('click', function() {
    // Rimouviamo active dall'elemento corrente
    // decrementiamo activeItem di 1
    // Aggiungiamo active al nuovo activeItem
    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    if(activeItem > 0) {
        activeItem--;
    } else {
        activeItem = allImages.length - 1;
    }

    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
});

//USE FOR EACH
