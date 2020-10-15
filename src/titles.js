const titles = (() => {

    let h1 = document.createElement('h1')
    h1.innerText = 'Cafe del Mar'
    let h2 = document.createElement('h2')
    h2.innerText = 'El mejor café de la sona, ubicado en privilegiado muelle. Gastronomía autoctona, y atención de lujo'
    let container = document.createElement('div')
    container.id = 'container'
    container.appendChild(h1)
    container.appendChild(h2)
    document.getElementById('content').appendChild(container)

})();

