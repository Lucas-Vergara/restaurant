
let append = (...family) => {
    let parent = family[family.length-1]
    for(let i=0; i<family.length-1; i++){
        parent.appendChild(family[i])
    }
}

let singleContact = (id, text) => {
    let contact = document.createElement('div')
    let a = document.createElement('a')
    let span1 = document.createElement('span')
    span1.id = id
    span1.innerHTML = ''
    let span2 = document.createElement('span')
    span2.innerHTML = text
    span2.classList.add('contact')
    append(span1,span2,a)
    append(a,contact)
    return contact
}

let contacts = () => {
    // let image = document.createElement('div')
    // image.id = 'contactImage'   
    let facebook = singleContact('facebook', ' Facebook')
    facebook.firstChild.href = 'http://www.facebook.com'
    let twitter = singleContact('twitter', ' Twitter')
    twitter.firstChild.href = 'http://www.twitter.com'
    let instagram = singleContact('instagram', ' Instagram')
    instagram.firstChild.href = 'http://www.instagram.com'
    
    let column1 = document.createElement('div')
    append(facebook,instagram,twitter,column1)
    let column2 = document.createElement('div')
    column2.id = 'contactImage'

    let container = document.createElement('div')
    container.id = 'contactContainer'
    append(column1,column2,container)

    document.getElementById('content').appendChild(container)

}

export {singleContact, append, contacts}