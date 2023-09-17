import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageList = document.querySelector(".gallery");

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

imageList.insertAdjacentHTML("afterbegin", addImageList) 

imageList.addEventListener("click", selectImage)

function selectImage(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }

    event.preventDefault();
    
    const modalImage = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);
    modalImage.show()

    const closeImage = (event) => {
        if (event.key === "Escape") {
            modalImage.close();
            document.removeEventListener("keydown", closeImage)
        };
    };

    document.addEventListener("keydown", closeImage)

};


