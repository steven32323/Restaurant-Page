'use strict';

export default function menu() {
  const container = document.querySelector('.container');
  const html = `
    <div class="menuContainer">
    <div class="menuItem"><img class="menuPic" src="./lasagne.jpg" alt=""><h2>Lasagne - €15</h2></div>
        <div class="menuItem"><img class="menuPic" src="./pasta.webp" alt=""><h2>Pasta - €12</h2></div>
        <div class="menuItem"><img class="menuPic" src="./risotto.png" alt=""><h2>Risotto - €17</h2></div>
        <div class="menuItem"><img class="menuPic" src="./pizza.webp" alt=""><h2>Pizza - €13</h2></div>
  `;
  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', html);
}
