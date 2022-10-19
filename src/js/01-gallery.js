// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryRef = document.querySelector(`.gallery`);
const galleryContainer = creatGallery(galleryItems);
galleryRef.insertAdjacentHTML('afterbegin', galleryContainer);
// galleryRef.addEventListener("click", openerLargeImage);

new SimpleLightbox('.gallery__item', {
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
function creatGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

console.log(galleryItems);
