const menu = () => {

    let container = document.createElement('div')
    container.id = 'menuContainer'
    let title = document.createElement('h1')
    title.innerText = 'Menú'
    let subtitle1 = document.createElement('h2')
    let subtitle2 = document.createElement('h2')
    let subtitle3 = document.createElement('h2')
    subtitle1.innerText = 'Entradas'
    subtitle2.innerText = 'Plato Principal'
    subtitle3.innerText = 'Postres'
    let dish1 = document.createElement('h3')
    let dish2 = document.createElement('h3')
    let dish3 = document.createElement('h3')
    let dish4 = document.createElement('h3')
    let dish5 = document.createElement('h3')
    dish1.innerText = 'Ensalada Marina'
    dish2.innerText = 'Sopa del Día'
    dish3.innerText = 'Pastel de Jaiba'
    dish4.innerText = 'Suspiro Limeño'
    dish5.innerText = 'Ensalada de Frutas'

    container.appendChild(title)
    container.appendChild(subtitle1)
    container.appendChild(dish1)
    container.appendChild(dish2)
    container.appendChild(subtitle2)
    container.appendChild(dish3)
    container.appendChild(subtitle3)
    container.appendChild(dish4)
    container.appendChild(dish5)
    
    document.getElementById('content').appendChild(container)

};

export default menu