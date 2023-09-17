import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageList = document.querySelector(".gallery")

const addImageList = galleryItems.map(image => `
    <li class="gallery__item">
        <a class="gallery__link" href = "${image.original}">
            <img class="gallery__image"
            src=${image.preview} 
            data-source=${image.original} 
            alt=${image.description}/>
        </a>
    </li>
`).join("")

imageList.innerHTML = addImageList

let modalImage = new SimpleLightbox ('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250
});