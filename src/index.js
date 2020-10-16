import {titles, navbar, clear} from './home'
import menu from './menu'
import {singleContact, append, contacts} from './contact'


navbar();
titles();

document.getElementById('nav2').addEventListener('click', clear);
document.getElementById('nav2').addEventListener('click', menu);

document.getElementById('nav1').addEventListener('click', clear);
document.getElementById('nav1').addEventListener('click', titles);

document.getElementById('nav3').addEventListener('click', clear);
document.getElementById('nav3').addEventListener('click', contacts);




