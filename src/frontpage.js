'use strict';

export default function frontPage() {
  //   console.log('hello');

  const container = document.querySelector('.container');
  const html = `
  
        <div class="image"><img src="italy.png" alt="Italy Flag"></div>
        <div class="blurb">Indulge in a culinary journey at our restaurant, where the combination of fresh ingredients, exotic flavors, and an inviting atmosphere come together to create an unforgettable dining experience. From our signature dishes to daily specials, each bite is crafted with care and presented with artful precision. Join us for a casual lunch, romantic dinner, or any occasion in between, and taste the difference of truly exceptional cuisine.</div>`;
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', html);
}
