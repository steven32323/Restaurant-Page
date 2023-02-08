'use strict';

export default function contact() {
  const container = document.querySelector('.container');
  const html = `
  <div class="image"><img src="italy.png" alt="Italy Flag"></div>
          <div class="blurb"><i class="fa-solid fa-phone"></i>   0134 236 784</div>
    `;
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', html);
}
