import menu from './menu'
import contact from './contact'


const titles = () => {

    let h1 = document.createElement('h1')
    h1.innerText = 'Cafe del Mar'
    let h2 = document.createElement('h2')
    h2.innerText = 'El mejor café de la sona, ubicado en privilegiado muelle. Gastronomía autoctona, y atención de lujo'
    let container = document.createElement('div')
    container.id = 'container'
    container.appendChild(h1)
    container.appendChild(h2)
    document.getElementById('content').appendChild(container)

};

const navbar = () => {
    let span1 = document.createElement('span')
    let span2 = document.createElement('span')
    let span3 = document.createElement('span')
    span1.innerText = 'Home'
    span1.id = 'nav1'
    span2.innerText = 'Menu'
    span2.id = 'nav2'
    span3.innerText = 'Contact'
    span3.id = 'nav3'
    let div = document.createElement('div')
    div.id = 'navbar'
    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    document.getElementById('content').appendChild(div)
    
};

const clear = () => {
    document.getElementById('content').innerHTML = ''
    navbar();

    document.getElementById('nav2').addEventListener('click', clear);
    document.getElementById('nav2').addEventListener('click', menu);

    document.getElementById('nav1').addEventListener('click', clear);
    document.getElementById('nav1').addEventListener('click', titles);

    document.getElementById('nav3').addEventListener('click', clear);
    document.getElementById('nav3').addEventListener('click', contact);
}

export {titles, navbar, clear}