import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

function createGallery(array) {
  return array.reduce(
    (acc, image) =>
      acc +
      `
        <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
        `,
    ""
  );
}

const result = createGallery(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", result);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
