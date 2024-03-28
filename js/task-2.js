const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const createGalleryCard = pictureInfo => {
  // Створення li
  const galleryItemEl = document.createElement('li');

  galleryItemEl.classList.add('gallery-item');

  // Створення img
  const galleryImgEl = document.createElement('img');

  galleryImgEl.src = pictureInfo.url;
  galleryImgEl.alt = pictureInfo.alt;
  galleryItemEl.prepend(galleryImgEl);

  return galleryItemEl;
};
//? Перебір масиву pictures
const galleryCardsArr = images.map(image => createGalleryCard(image));

galleryList.append(...galleryCardsArr);
