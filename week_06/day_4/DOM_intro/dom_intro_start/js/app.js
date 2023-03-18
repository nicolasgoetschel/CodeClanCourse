document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1')
    title.textContent = "JavaScript says 'Hello World!'"

    const welcomeParagraph = document.getElementById('welcome-paragraph')
    console.dir(welcomeParagraph)

    const redElement = document.querySelector('.red')
    console.log(redElement)

    const redListItem = document.querySelector('li.red')
    redListItem.textContent = 'RED!!!'
    redListItem.classList.add('bold')
    console.log(redListItem)

    const allRedElements = document.getElementsByClassName('red')
    console.dir(allRedElements)

    const newListItem = document.createElement('li')
    newListItem.textContent = 'Purple'
    newListItem.classList.add('purple')
    const list = document.querySelector('ul')
    list.appendChild(newListItem)
})


