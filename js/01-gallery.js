import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGallery(array) {
  return array.reduce(
    (acc, image) =>
      acc +
      `
        <div class="gallery__item">
        <a class="gallery__link" href="#">
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </div>
      `,
    ""
  );
}

const result = createGallery(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", result);

function eventSetup(event) {
  basicLightbox
    .create(
      `
        <img
        class="gallery__image"
        src="${event.target.dataset.source}"
        data-source="${event.target.dataset.source}"
        alt="${event.alt}"
      />
	`
    )
    .show();
}

gallery.addEventListener("click", eventSetup);
