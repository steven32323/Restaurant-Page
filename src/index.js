'use strict';

import frontPage from './frontpage';
import menu from './menu';
import contact from './contact';
import './style.css';

const content = document.querySelector('#content');
let html = `
<div class="header">
    <h1>Ristorante Italiano</h1>
    <ul class="navbar">
        <li class="home">Home</li>
        <li class="menu">Menu</li>
        <li class="contact">contact</li>
      </ul>
</div>
<div>
      <div class="container"></div> 
</div>
<div class="footer">Steven Smith 2023</div>`;

content.innerHTML = html;

content.insertAdjacentHTML('afterend', frontPage());

// Home tab
const home = document.querySelector('.home');
home.addEventListener('click', () => frontPage());

// Menu Tab
const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => menu());

// About tab
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => contact());
