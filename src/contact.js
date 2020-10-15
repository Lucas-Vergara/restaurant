
const contact = () => {
    let container = document.createElement('div')
    container.id = 'contactContainer'

    let facebook = document.createElement('div')
    let span1 = document.createElement('span')
    span1.id = 'facebook'
    let span2 = document.createElement('span')
    span2.innerHTML = ' Facebook'
    facebook.appendChild(span1)
    facebook.appendChild(span2)

    let insta = document.createElement('div')
    span1 = document.createElement('span')
    span1.id = 'instagram'
    span2 = document.createElement('span')
    span2.innerHTML = ' Instagram'
    insta.appendChild(span1)
    insta.appendChild(span2)

    let twitter = document.createElement('div')
    span1 = document.createElement('span')
    span1.id = 'twitter'
    span1.innerHTML = ''
    span2 = document.createElement('span')
    span2.innerHTML = ' Twitter'
    twitter.appendChild(span1)
    twitter.appendChild(span2)
    
    container.appendChild(facebook)
    container.appendChild(insta)
    container.appendChild(twitter)

    document.getElementById('content').appendChild(container)
    
}

export default contact